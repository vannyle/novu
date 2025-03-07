/* eslint-disable @typescript-eslint/no-explicit-any */
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { addMonths } from 'date-fns';
import { Model, Types, ProjectionType, FilterQuery, UpdateQuery } from 'mongoose';
import { DalException } from '../shared';

export class BaseRepository<T_DBModel, T_MappedEntity, T_Enforcement = object> {
  public _model: Model<T_DBModel>;

  constructor(protected MongooseModel: Model<T_DBModel>, protected entity: ClassConstructor<T_MappedEntity>) {
    this._model = MongooseModel;
  }

  public static createObjectId() {
    return new Types.ObjectId().toString();
  }

  protected convertObjectIdToString(value: Types.ObjectId): string {
    return value.toString();
  }

  protected convertStringToObjectId(value: string): Types.ObjectId {
    return new Types.ObjectId(value);
  }

  async count(query: FilterQuery<T_DBModel> & T_Enforcement, limit?: number): Promise<number> {
    return this.MongooseModel.countDocuments(query, {
      limit,
    });
  }

  async aggregate(query: any[], options: { readPreference?: 'secondaryPreferred' | 'primary' } = {}): Promise<any> {
    return await this.MongooseModel.aggregate(query).read(options.readPreference || 'primary');
  }

  async findById(id: string, select?: string): Promise<T_MappedEntity | null> {
    const data = await this.MongooseModel.findById(id, select);
    if (!data) return null;

    return this.mapEntity(data.toObject());
  }

  async findOne(
    query: FilterQuery<T_DBModel> & T_Enforcement,
    select?: ProjectionType<T_MappedEntity>,
    options: { readPreference?: 'secondaryPreferred' | 'primary' } = {}
  ): Promise<T_MappedEntity | null> {
    const data = await this.MongooseModel.findOne(query, select).read(options.readPreference || 'primary');
    if (!data) return null;

    return this.mapEntity(data.toObject());
  }

  async delete(query: FilterQuery<T_DBModel> & T_Enforcement): Promise<void> {
    return await this.MongooseModel.remove(query);
  }

  async find(
    query: FilterQuery<T_DBModel> & T_Enforcement,
    select: ProjectionType<T_MappedEntity> = '',
    options: { limit?: number; sort?: any; skip?: number } = {}
  ): Promise<T_MappedEntity[]> {
    const data = await this.MongooseModel.find(query, select, {
      sort: options.sort || null,
    })
      .skip(options.skip as number)
      .limit(options.limit as number)
      .lean()
      .exec();

    return this.mapEntities(data);
  }

  async *findBatch(
    query: FilterQuery<T_DBModel> & T_Enforcement,
    select = '',
    options: { limit?: number; sort?: any; skip?: number } = {},
    batchSize = 500
  ) {
    for await (const doc of this._model
      .find(query, select, {
        sort: options.sort || null,
      })
      .batchSize(batchSize)
      .cursor()) {
      yield this.mapEntity(doc);
    }
  }

  private calcExpireDate(modelName: string, data: FilterQuery<T_DBModel> & T_Enforcement) {
    let startDate: Date = new Date();
    if (data.expireAt) {
      startDate = new Date(data.expireAt);
    }

    switch (modelName) {
      case 'Message':
        if (data.channel === 'in_app') {
          return addMonths(startDate, 12);
        } else {
          return addMonths(startDate, 1);
        }
      case 'Notification':
        return addMonths(startDate, 1);
      default:
        return null;
    }
  }

  async create(data: FilterQuery<T_DBModel> & T_Enforcement): Promise<T_MappedEntity> {
    const expireAt = this.calcExpireDate(this.MongooseModel.modelName, data);
    if (expireAt) {
      data = { ...data, expireAt };
    }
    const newEntity = new this.MongooseModel(data);
    const saved = await newEntity.save();

    return this.mapEntity(saved);
  }

  async insertMany(
    data: FilterQuery<T_DBModel> & T_Enforcement[],
    ordered = false
  ): Promise<{ acknowledged: boolean; insertedCount: number; insertedIds: Types.ObjectId[] }> {
    let result;
    try {
      result = await this.MongooseModel.insertMany(data, { ordered });
    } catch (e) {
      throw new DalException(e.message);
    }

    const insertedIds = result.map((inserted) => inserted._id);

    return {
      acknowledged: true,
      insertedCount: result.length,
      insertedIds,
    };
  }

  async update(
    query: FilterQuery<T_DBModel> & T_Enforcement,
    updateBody: UpdateQuery<T_DBModel>
  ): Promise<{
    matched: number;
    modified: number;
  }> {
    const saved = await this.MongooseModel.updateMany(query, updateBody, {
      multi: true,
    });

    return {
      matched: saved.matchedCount,
      modified: saved.modifiedCount,
    };
  }

  async upsertMany(data: (FilterQuery<T_DBModel> & T_Enforcement)[]) {
    const promises = data.map((entry) => this.MongooseModel.findOneAndUpdate(entry, entry, { upsert: true }));

    return await Promise.all(promises);
  }

  async bulkWrite(bulkOperations: any) {
    await this.MongooseModel.bulkWrite(bulkOperations);
  }

  protected mapEntity<TData>(data: TData): TData extends null ? null : T_MappedEntity {
    return plainToInstance(this.entity, JSON.parse(JSON.stringify(data))) as any;
  }

  protected mapEntities(data: any): T_MappedEntity[] {
    return plainToInstance<T_MappedEntity, T_MappedEntity[]>(this.entity, JSON.parse(JSON.stringify(data)));
  }
}
