<div align="center">
  <a href="https://novu.co" target="_blank">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/2233092/213641039-220ac15f-f367-4d13-9eaf-56e79433b8c1.png">
    <img src="https://user-images.githubusercontent.com/2233092/213641043-3bbb3f21-3c53-4e67-afe5-755aeb222159.png" width="280" alt="Logo"/>
  </picture>
  </a>
</div>

<h1 align="center">The open-source notification infrastructure for developers</h1>

<div align="center">
The ultimate service for managing multi-channel notifications with a single API.
</div>

  <p align="center">
    <br />
    <a href="https://docs.novu.co" rel="dofollow"><strong>Explore the docs »</strong></a>
    <br />

  <br/>
    <a href="https://github.com/novuhq/novu/issues/new?assignees=&labels=type%3A+bug&template=bug_report.yml&title=%F0%9F%90%9B+Bug+Report%3A+">Report Bug</a>
    ·
    <a href="https://github.com/novuhq/novu/issues/new?assignees=&labels=feature&template=feature_request.yml&title=%F0%9F%9A%80+Feature%3A+">Request Feature</a>
    ·
  <a href="https://discord.novu.co">Join Our Discord</a>
    ·
    <a href="https://roadmap.novu.co">Roadmap</a>
    ·
    <a href="https://twitter.com/novuhq">Twitter</a>
    ·
    <a href="https://notifications.directory">Notifications Directory</a>
  </p>
  
  <p align="center">
  Available in: <a href="https://github.com/novuhq/novu/tree/next/packages/node">Node.js</a>
  · <a href="https://github.com/novuhq/novu-php">PHP</a>
  · <a href="https://github.com/novuhq/go-novu">Go</a>
  · <a href="https://github.com/novuhq/novu-ruby">Ruby</a>
  · <a href="https://github.com/novuhq/novu-kotlin">Kotlin</a>
  · <a href="https://github.com/novuhq/elixir">Elixir</a>
  · <a href="https://github.com/novuhq/rust">Rust</a>
  </p>

## ⭐️ Why Novu?

Novu provides a unified API that makes it simple to send notifications through multiple channels, including In-App, Push, Email, SMS, and Chat.
With Novu, you can create custom workflows and define conditions for each channel, ensuring that your notifications are delivered in the most effective way possible.

## ✨ Features

- 🌈 Single API for all messaging providers (In-App, Email, SMS, Push, Chat)
- 💅 Easily manage notifications over multiple channels
- 🚀 Equipped with a CMS for advanced layouts and design management
- 🛡 Built-in protection for missing variables (Coming Soon)
- 📦 Easy to set up and integrate
- 🛡 Debug and analyze multi-channel messages in a single dashboard
- 📦 Embeddable notification center with real-time updates
- 👨‍💻 Community driven

## 📚 Table Of Contents

- [Getting Started](https://github.com/novuhq/novu#-getting-started)
- [Embeddable notification center](https://github.com/novuhq/novu#embeddable-notification-center)
- [Providers](https://github.com/novuhq/novu#providers)
  - [Email](https://github.com/novuhq/novu#-email)
  - [SMS](https://github.com/novuhq/novu#-sms)
  - [Push](https://github.com/novuhq/novu#-push)
  - [Chat](https://github.com/novuhq/novu#-chat)
  - [In-App](https://github.com/novuhq/novu#-in-app)
  - [Others](https://github.com/novuhq/novu#other-coming-soon)
- [Need Help?](https://github.com/novuhq/novu#-need-help)
- [Links](https://github.com/novuhq/novu#-links)
- [License](https://github.com/novuhq/novu#%EF%B8%8F-license)

## 🚀 Getting Started

We are excited to launch the complete Novu API and admin panel. Want to give it a test before the official release? Here is how:

```
npx novu init
```

After setting up your account using the cloud or docker version you can trigger the API using the `@novu/node` package.

```bash
npm install @novu/node
```

```ts
import { Novu } from '@novu/node';

const novu = new Novu(process.env.NOVU_API_KEY);

await novu.trigger('<TRIGGER_NAME>', {
  to: [
    {
      subscriberId: '<UNIQUE_IDENTIFIER>',
      email: 'john1@doemail.com',
      firstName: 'John',
      lastName: 'Doe',
    },
  ],
  payload: {
    name: 'Hello World',
    organization: {
      logo: 'https://happycorp.com/logo.png',
    },
  },
});
```

## Embeddable Notification Center

Using the Novu API and admin panel, you can easily add a real-time notification center to your web app without building it yourself. You can use our React / Vue / Angular component or an iframe embed.

<div align="center">
<img width="762" alt="notification-center-912bb96e009fb3a69bafec23bcde00b0" src="https://user-images.githubusercontent.com/80174214/193887395-f1c95042-b4e6-480e-a89c-a78aa247fa90.gif">

Read more about how to add a notification center to your app with the Novu API [here](https://docs.novu.co/notification-center/getting-started)

<p align="center">
  <a href="https://docs.novu.co/notification-center/getting-started">React Component</a>
  · <a href="https://docs.novu.co/notification-center/vue-component">Vue Component</a>
  · <a href="https://github.com/novuhq/novu/tree/next/packages/notification-center-angular">Angular Component</a>
  </p>
  
</div>

## Providers

Novu provides a single API to manage providers across multiple channels with a simple-to-use interface.

#### 💌 Email

- [x] [Sendgrid](https://github.com/novuhq/novu/tree/main/providers/sendgrid)
- [x] [Netcore](https://github.com/novuhq/novu/tree/main/providers/netcore)
- [x] [Mailgun](https://github.com/novuhq/novu/tree/main/providers/mailgun)
- [x] [SES](https://github.com/novuhq/novu/tree/main/providers/ses)
- [x] [Postmark](https://github.com/novuhq/novu/tree/main/providers/postmark)
- [x] [Custom SMTP](https://github.com/novuhq/novu/tree/main/providers/nodemailer)
- [x] [Mailjet](https://github.com/novuhq/novu/tree/main/providers/mailjet)
- [x] [Mandrill](https://github.com/novuhq/novu/tree/main/providers/mandrill)
- [x] [SendinBlue](https://github.com/novuhq/novu/tree/main/providers/sendinblue)
- [x] [MailerSend](https://github.com/novuhq/novu/tree/main/providers/mailersend)
- [x] [Infobip](https://github.com/novuhq/novu/tree/main/providers/infobip)
- [x] [Resend](https://github.com/novuhq/novu/tree/main/providers/resend)
- [x] [SparkPost](https://github.com/novuhq/novu/tree/main/providers/sparkpost)
- [x] [Outlook 365](https://github.com/novuhq/novu/tree/main/providers/outlook365)

#### 📞 SMS

- [x] [Twilio](https://github.com/novuhq/novu/tree/main/providers/twilio)
- [x] [Plivo](https://github.com/novuhq/novu/tree/main/providers/plivo)
- [x] [SNS](https://github.com/novuhq/novu/tree/main/providers/sns)
- [x] [Nexmo - Vonage](https://github.com/novuhq/novu/tree/main/providers/nexmo)
- [x] [Sms77](https://github.com/novuhq/novu/tree/main/providers/sms77)
- [x] [Telnyx](https://github.com/novuhq/novu/tree/main/providers/telnyx)
- [x] [Termii](https://github.com/novuhq/novu/tree/main/providers/termii)
- [x] [Gupshup](https://github.com/novuhq/novu/tree/main/providers/gupshup)
- [x] [SMS Central](https://github.com/novuhq/novu/tree/main/providers/sms-central)
- [x] [Maqsam](https://github.com/novuhq/novu/tree/main/providers/maqsam)
- [x] [46elks](https://github.com/novuhq/novu/tree/main/providers/forty-six-elks)
- [x] [Clickatell](https://github.com/novuhq/novu/tree/main/providers/clickatell)
- [x] [Burst SMS](https://github.com/novuhq/novu/tree/main/providers/burst-sms)
- [x] [Firetext](https://github.com/novuhq/novu/tree/main/providers/firetext)
- [x] [Infobip](https://github.com/novuhq/novu/tree/main/providers/infobip)
- [x] [SNS](https://github.com/novuhq/novu/tree/main/providers/sns)
- [ ] Bandwidth
- [ ] RingCentral

#### 📱 Push

- [x] [FCM](https://github.com/novuhq/novu/tree/main/providers/fcm)
- [x] [Expo](https://github.com/novuhq/novu/tree/main/providers/expo)
- [x] [APNS](https://github.com/novuhq/novu/tree/main/providers/apns)
- [ ] OneSignal
- [ ] Pushwoosh

#### 👇 Chat

- [x] Slack
- [x] Discord
- [x] MS Teams
- [x] Mattermost

#### 📱 In-App

- [x] [Novu](https://docs.novu.co/notification-center/getting-started)
- [ ] MagicBell

#### Other (Coming Soon...)

- [ ] PagerDuty

## 📋 Read Our Code Of Conduct

Before you begin coding and collaborating, please read our [Code of Conduct](https://github.com/novuhq/novu/blob/main/CODE_OF_CONDUCT.md) thoroughly to understand the standards (that you are required to adhere to) for community engagement. As part of our open-source community, we hold ourselves and other contributors to a high standard of communication. As a participant and contributor to this project, you are agreeing to abide by our [Code of Conduct](https://github.com/novuhq/novu/blob/main/CODE_OF_CONDUCT.md).

## 💻 Need Help?

We are more than happy to help you. If you are getting any errors or facing problems while working on this project, join our [Discord server](https://discord.novu.co) and ask for help. We are open to discussing anything related to the project.

## ⚡ Immediate working space with Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/novuhq/novu)

## 🔗 Links

- [Home page](https://novu.co/)
- [Contribution Guidelines](https://github.com/novuhq/novu/blob/main/CONTRIBUTING.md)
- [Run Novu Locally](https://docs.novu.co/community/run-locally)

## 🛡️ License

Novu is licensed under the MIT License - see the [LICENSE](https://github.com/novuhq/novu/blob/main/LICENSE) file for details.

## 💪 Thanks To All Contributors
| Photo | Name  | Medals |
| ----- | ------ | ------ |
| ![jainpawan21](https://contributors.novu.co/profiles/jainpawan21-small.jpg) | jainpawan21 | 65 |
| ![andrewgolovanov](https://contributors.novu.co/profiles/andrewgolovanov-small.jpg) | andrewgolovanov | 51 |
| ![venarius](https://contributors.novu.co/profiles/venarius-small.jpg) | venarius | 36 |
| ![ryshu](https://contributors.novu.co/profiles/ryshu-small.jpg) | ryshu | 20 |
| ![ericobi](https://contributors.novu.co/profiles/ericobi-small.jpg) | ericobi | 17 |
| ![akshitagupta15june](https://contributors.novu.co/profiles/akshitagupta15june-small.jpg) | akshitagupta15june | 17 |
| ![peoray](https://contributors.novu.co/profiles/peoray-small.jpg) | peoray | 15 |
| ![abhilipsasahoo03](https://contributors.novu.co/profiles/abhilipsasahoo03-small.jpg) | abhilipsasahoo03 | 13 |
| ![diwash007](https://contributors.novu.co/profiles/diwash007-small.jpg) | diwash007 | 12 |
| ![raikasdev](https://contributors.novu.co/profiles/raikasdev-small.jpg) | raikasdev | 12 |
| ![Akash190104](https://contributors.novu.co/profiles/Akash190104-small.jpg) | Akash190104 | 11 |
| ![Rutam21](https://contributors.novu.co/profiles/Rutam21-small.jpg) | Rutam21 | 9 |
| ![MaximFedarau](https://contributors.novu.co/profiles/MaximFedarau-small.jpg) | MaximFedarau | 9 |
| ![gitstart](https://contributors.novu.co/profiles/gitstart-small.jpg) | gitstart | 8 |
| ![samsoft00](https://contributors.novu.co/profiles/samsoft00-small.jpg) | samsoft00 | 8 |
| ![kymppi](https://contributors.novu.co/profiles/kymppi-small.jpg) | kymppi | 8 |
| ![BoseSj](https://contributors.novu.co/profiles/BoseSj-small.jpg) | BoseSj | 8 |
| ![michaldziuba03](https://contributors.novu.co/profiles/michaldziuba03-small.jpg) | michaldziuba03 | 7 |
| ![codingmickey](https://contributors.novu.co/profiles/codingmickey-small.jpg) | codingmickey | 7 |
| ![chavda-bhavik](https://contributors.novu.co/profiles/chavda-bhavik-small.jpg) | chavda-bhavik | 7 |
| ![kailashchoudhary11](https://contributors.novu.co/profiles/kailashchoudhary11-small.jpg) | kailashchoudhary11 | 7 |
| ![katyaterletskaya](https://contributors.novu.co/profiles/katyaterletskaya-small.jpg) | katyaterletskaya | 6 |
| ![JoeyEamigh](https://contributors.novu.co/profiles/JoeyEamigh-small.jpg) | JoeyEamigh | 6 |
| ![vannyle](https://contributors.novu.co/profiles/vannyle-small.jpg) | vannyle | 6 |
| ![AlexVCS](https://contributors.novu.co/profiles/AlexVCS-small.jpg) | AlexVCS | 6 |
| ![galezra](https://contributors.novu.co/profiles/galezra-small.jpg) | galezra | 6 |
| ![TheLearneer](https://contributors.novu.co/profiles/TheLearneer-small.jpg) | TheLearneer | 6 |
| ![lex111](https://contributors.novu.co/profiles/lex111-small.jpg) | lex111 | 6 |
| ![ShaneMaglangit](https://contributors.novu.co/profiles/ShaneMaglangit-small.jpg) | ShaneMaglangit | 6 |
| ![sumitsaurabh927](https://contributors.novu.co/profiles/sumitsaurabh927-small.jpg) | sumitsaurabh927 | 5 |
| ![fadkeabhi](https://contributors.novu.co/profiles/fadkeabhi-small.jpg) | fadkeabhi | 5 |
| ![devblin](https://contributors.novu.co/profiles/devblin-small.jpg) | devblin | 5 |
| ![WinterCore](https://contributors.novu.co/profiles/WinterCore-small.jpg) | WinterCore | 5 |
| ![proDOOMman](https://contributors.novu.co/profiles/proDOOMman-small.jpg) | proDOOMman | 5 |
| ![Wyfy0107](https://contributors.novu.co/profiles/Wyfy0107-small.jpg) | Wyfy0107 | 5 |
| ![Lian1230](https://contributors.novu.co/profiles/Lian1230-small.jpg) | Lian1230 | 5 |
| ![codingis4noobs2](https://contributors.novu.co/profiles/codingis4noobs2-small.jpg) | codingis4noobs2 | 5 |
| ![MrKrishnaAgarwal](https://contributors.novu.co/profiles/MrKrishnaAgarwal-small.jpg) | MrKrishnaAgarwal | 5 |
| ![k8isdead](https://contributors.novu.co/profiles/k8isdead-small.jpg) | k8isdead | 5 |
| ![shtelzerartem](https://contributors.novu.co/profiles/shtelzerartem-small.jpg) | shtelzerartem | 5 |
| ![mocherfaoui](https://contributors.novu.co/profiles/mocherfaoui-small.jpg) | mocherfaoui | 5 |
| ![akhill10](https://contributors.novu.co/profiles/akhill10-small.jpg) | akhill10 | 4 |
| ![TNAJanssen](https://contributors.novu.co/profiles/TNAJanssen-small.jpg) | TNAJanssen | 4 |
| ![Abobos](https://contributors.novu.co/profiles/Abobos-small.jpg) | Abobos | 4 |
| ![SachinHatikankar100](https://contributors.novu.co/profiles/SachinHatikankar100-small.jpg) | SachinHatikankar100 | 4 |
| ![btkostner](https://contributors.novu.co/profiles/btkostner-small.jpg) | btkostner | 4 |
| ![florian-lefebvre](https://contributors.novu.co/profiles/florian-lefebvre-small.jpg) | florian-lefebvre | 4 |
| ![kVarunkk](https://contributors.novu.co/profiles/kVarunkk-small.jpg) | kVarunkk | 4 |
| ![Susmita-Dey](https://contributors.novu.co/profiles/Susmita-Dey-small.jpg) | Susmita-Dey | 4 |
| ![saimaheshtaduri](https://contributors.novu.co/profiles/saimaheshtaduri-small.jpg) | saimaheshtaduri | 4 |
| ![L-390](https://contributors.novu.co/profiles/L-390-small.jpg) | L-390 | 4 |
| ![vrabe](https://contributors.novu.co/profiles/vrabe-small.jpg) | vrabe | 4 |
| ![DonnachaHeff](https://contributors.novu.co/profiles/DonnachaHeff-small.jpg) | DonnachaHeff | 4 |
| ![LunarMarathon](https://contributors.novu.co/profiles/LunarMarathon-small.jpg) | LunarMarathon | 4 |
| ![BhuvaneshPatil](https://contributors.novu.co/profiles/BhuvaneshPatil-small.jpg) | BhuvaneshPatil | 4 |
| ![Raunik2](https://contributors.novu.co/profiles/Raunik2-small.jpg) | Raunik2 | 4 |
| ![npentrel](https://contributors.novu.co/profiles/npentrel-small.jpg) | npentrel | 4 |
| ![Cxxshyy](https://contributors.novu.co/profiles/Cxxshyy-small.jpg) | Cxxshyy | 4 |
| ![nikitagrossman](https://contributors.novu.co/profiles/nikitagrossman-small.jpg) | nikitagrossman | 4 |
| ![immattdavison](https://contributors.novu.co/profiles/immattdavison-small.jpg) | immattdavison | 3 |
| ![shanehandley-lived](https://contributors.novu.co/profiles/shanehandley-lived-small.jpg) | shanehandley-lived | 3 |
| ![rahmat-st](https://contributors.novu.co/profiles/rahmat-st-small.jpg) | rahmat-st | 3 |
| ![bigpreshy](https://contributors.novu.co/profiles/bigpreshy-small.jpg) | bigpreshy | 3 |
| ![FidalMathew](https://contributors.novu.co/profiles/FidalMathew-small.jpg) | FidalMathew | 3 |
| ![aggmoulik](https://contributors.novu.co/profiles/aggmoulik-small.jpg) | aggmoulik | 3 |
| ![nishit-g](https://contributors.novu.co/profiles/nishit-g-small.jpg) | nishit-g | 3 |
| ![CharlieBrownCharacter](https://contributors.novu.co/profiles/CharlieBrownCharacter-small.jpg) | CharlieBrownCharacter | 3 |
| ![ranrib](https://contributors.novu.co/profiles/ranrib-small.jpg) | ranrib | 3 |
| ![varghesejose2020](https://contributors.novu.co/profiles/varghesejose2020-small.jpg) | varghesejose2020 | 3 |
| ![chxmbley](https://contributors.novu.co/profiles/chxmbley-small.jpg) | chxmbley | 3 |
| ![JakovGlavac](https://contributors.novu.co/profiles/JakovGlavac-small.jpg) | JakovGlavac | 3 |
| ![mohanthilak](https://contributors.novu.co/profiles/mohanthilak-small.jpg) | mohanthilak | 3 |
| ![Chii-Onan](https://contributors.novu.co/profiles/Chii-Onan-small.jpg) | Chii-Onan | 3 |
| ![Asmit2952](https://contributors.novu.co/profiles/Asmit2952-small.jpg) | Asmit2952 | 3 |
| ![geisterfurz007](https://contributors.novu.co/profiles/geisterfurz007-small.jpg) | geisterfurz007 | 3 |
| ![ArmanChand](https://contributors.novu.co/profiles/ArmanChand-small.jpg) | ArmanChand | 3 |
| ![thenishantsapkota](https://contributors.novu.co/profiles/thenishantsapkota-small.jpg) | thenishantsapkota | 3 |
| ![yasell](https://contributors.novu.co/profiles/yasell-small.jpg) | yasell | 3 |
| ![washbin](https://contributors.novu.co/profiles/washbin-small.jpg) | washbin | 3 |
| ![MihirShinde-29](https://contributors.novu.co/profiles/MihirShinde-29-small.jpg) | MihirShinde-29 | 3 |
| ![omimakhare](https://contributors.novu.co/profiles/omimakhare-small.jpg) | omimakhare | 3 |
| ![michizhou](https://contributors.novu.co/profiles/michizhou-small.jpg) | michizhou | 3 |
| ![Yash-sudo-web](https://contributors.novu.co/profiles/Yash-sudo-web-small.jpg) | Yash-sudo-web | 3 |
| ![daniel-shuy](https://contributors.novu.co/profiles/daniel-shuy-small.jpg) | daniel-shuy | 3 |
| ![kaustav202](https://contributors.novu.co/profiles/kaustav202-small.jpg) | kaustav202 | 3 |
| ![Smartmind12](https://contributors.novu.co/profiles/Smartmind12-small.jpg) | Smartmind12 | 3 |
| ![bishal7679](https://contributors.novu.co/profiles/bishal7679-small.jpg) | bishal7679 | 3 |
| ![das-amit](https://contributors.novu.co/profiles/das-amit-small.jpg) | das-amit | 3 |
| ![Arjun31415](https://contributors.novu.co/profiles/Arjun31415-small.jpg) | Arjun31415 | 3 |
| ![TheZal](https://contributors.novu.co/profiles/TheZal-small.jpg) | TheZal | 3 |
| ![SarojWasti](https://contributors.novu.co/profiles/SarojWasti-small.jpg) | SarojWasti | 3 |
| ![ShashankKumarSaxena](https://contributors.novu.co/profiles/ShashankKumarSaxena-small.jpg) | ShashankKumarSaxena | 3 |
| ![Akshu-on-github](https://contributors.novu.co/profiles/Akshu-on-github-small.jpg) | Akshu-on-github | 3 |
| ![Abubakrce19](https://contributors.novu.co/profiles/Abubakrce19-small.jpg) | Abubakrce19 | 3 |
| ![wanderer163](https://contributors.novu.co/profiles/wanderer163-small.jpg) | wanderer163 | 3 |
| ![ImMattDavison](https://contributors.novu.co/profiles/ImMattDavison-small.jpg) | ImMattDavison | 3 |
| ![tsssdev](https://contributors.novu.co/profiles/tsssdev-small.jpg) | tsssdev | 3 |
| ![rahmat-dev](https://contributors.novu.co/profiles/rahmat-dev-small.jpg) | rahmat-dev | 3 |
| ![vfxGer](https://contributors.novu.co/profiles/vfxGer-small.jpg) | vfxGer | 3 |
| ![gitstart-novu](https://contributors.novu.co/profiles/gitstart-novu-small.jpg) | gitstart-novu | 3 |
| ![asmitbm](https://contributors.novu.co/profiles/asmitbm-small.jpg) | asmitbm | 3 |
| ![cryptic-ai](https://contributors.novu.co/profiles/cryptic-ai-small.jpg) | cryptic-ai | 2 |
| ![wdh23](https://contributors.novu.co/profiles/wdh23-small.jpg) | wdh23 | 2 |
| ![guiruiz](https://contributors.novu.co/profiles/guiruiz-small.jpg) | guiruiz | 2 |
| ![prajjwaldimri](https://contributors.novu.co/profiles/prajjwaldimri-small.jpg) | prajjwaldimri | 2 |
| ![americano98](https://contributors.novu.co/profiles/americano98-small.jpg) | americano98 | 2 |
| ![ryshoooo](https://contributors.novu.co/profiles/ryshoooo-small.jpg) | ryshoooo | 2 |
| ![MaurerKrisztian](https://contributors.novu.co/profiles/MaurerKrisztian-small.jpg) | MaurerKrisztian | 2 |
| ![shahriar-shojib](https://contributors.novu.co/profiles/shahriar-shojib-small.jpg) | shahriar-shojib | 2 |
| ![CodrShiv](https://contributors.novu.co/profiles/CodrShiv-small.jpg) | CodrShiv | 2 |
| ![csachdeva83](https://contributors.novu.co/profiles/csachdeva83-small.jpg) | csachdeva83 | 2 |
| ![remirobichet](https://contributors.novu.co/profiles/remirobichet-small.jpg) | remirobichet | 2 |
| ![zakariaelas](https://contributors.novu.co/profiles/zakariaelas-small.jpg) | zakariaelas | 2 |
| ![murtuzaalisurti](https://contributors.novu.co/profiles/murtuzaalisurti-small.jpg) | murtuzaalisurti | 2 |
| ![Lorakus](https://contributors.novu.co/profiles/Lorakus-small.jpg) | Lorakus | 2 |
| ![oba2311](https://contributors.novu.co/profiles/oba2311-small.jpg) | oba2311 | 2 |
| ![Tosin-webdev](https://contributors.novu.co/profiles/Tosin-webdev-small.jpg) | Tosin-webdev | 2 |
| ![akhil-gautam](https://contributors.novu.co/profiles/akhil-gautam-small.jpg) | akhil-gautam | 2 |
| ![deepak-sreekumar](https://contributors.novu.co/profiles/deepak-sreekumar-small.jpg) | deepak-sreekumar | 2 |
| ![diganta413](https://contributors.novu.co/profiles/diganta413-small.jpg) | diganta413 | 2 |
| ![yuval-hazaz](https://contributors.novu.co/profiles/yuval-hazaz-small.jpg) | yuval-hazaz | 2 |
| ![13ogrammer](https://contributors.novu.co/profiles/13ogrammer-small.jpg) | 13ogrammer | 2 |
| ![rhythm-sharma](https://contributors.novu.co/profiles/rhythm-sharma-small.jpg) | rhythm-sharma | 2 |
| ![doomspork](https://contributors.novu.co/profiles/doomspork-small.jpg) | doomspork | 2 |
| ![SpencerMiller23](https://contributors.novu.co/profiles/SpencerMiller23-small.jpg) | SpencerMiller23 | 2 |
| ![nidble](https://contributors.novu.co/profiles/nidble-small.jpg) | nidble | 2 |
| ![nilesh-maurya](https://contributors.novu.co/profiles/nilesh-maurya-small.jpg) | nilesh-maurya | 2 |
| ![krshkun](https://contributors.novu.co/profiles/krshkun-small.jpg) | krshkun | 2 |
| ![viveknshah](https://contributors.novu.co/profiles/viveknshah-small.jpg) | viveknshah | 2 |
| ![IamsahilPhadtare](https://contributors.novu.co/profiles/IamsahilPhadtare-small.jpg) | IamsahilPhadtare | 2 |
| ![pmontp19](https://contributors.novu.co/profiles/pmontp19-small.jpg) | pmontp19 | 2 |
| ![EmmaDawsonDev](https://contributors.novu.co/profiles/EmmaDawsonDev-small.jpg) | EmmaDawsonDev | 2 |
| ![AranavMahalpure](https://contributors.novu.co/profiles/AranavMahalpure-small.jpg) | AranavMahalpure | 2 |
| ![npv12](https://contributors.novu.co/profiles/npv12-small.jpg) | npv12 | 2 |
| ![dmulligan](https://contributors.novu.co/profiles/dmulligan-small.jpg) | dmulligan | 2 |
| ![Akshay-21](https://contributors.novu.co/profiles/Akshay-21-small.jpg) | Akshay-21 | 2 |
| ![ukmadlz](https://contributors.novu.co/profiles/ukmadlz-small.jpg) | ukmadlz | 2 |
| ![Aadarsh805](https://contributors.novu.co/profiles/Aadarsh805-small.jpg) | Aadarsh805 | 2 |
| ![ShashwatAgrawal20](https://contributors.novu.co/profiles/ShashwatAgrawal20-small.jpg) | ShashwatAgrawal20 | 2 |
| ![whodges2](https://contributors.novu.co/profiles/whodges2-small.jpg) | whodges2 | 2 |
| ![titenkov](https://contributors.novu.co/profiles/titenkov-small.jpg) | titenkov | 2 |
| ![KristofDeTroch](https://contributors.novu.co/profiles/KristofDeTroch-small.jpg) | KristofDeTroch | 2 |
| ![hodges12](https://contributors.novu.co/profiles/hodges12-small.jpg) | hodges12 | 2 |
| ![wh1337](https://contributors.novu.co/profiles/wh1337-small.jpg) | wh1337 | 2 |
| ![emotidev](https://contributors.novu.co/profiles/emotidev-small.jpg) | emotidev | 2 |
| ![gptkrsh](https://contributors.novu.co/profiles/gptkrsh-small.jpg) | gptkrsh | 2 |
| ![krshkodes](https://contributors.novu.co/profiles/krshkodes-small.jpg) | krshkodes | 1 |
| ![PapuleX](https://contributors.novu.co/profiles/PapuleX-small.jpg) | PapuleX | 1 |
| ![wouter-toppy](https://contributors.novu.co/profiles/wouter-toppy-small.jpg) | wouter-toppy | 1 |
| ![Codepowercode](https://contributors.novu.co/profiles/Codepowercode-small.jpg) | Codepowercode | 1 |
| ![roman-utila](https://contributors.novu.co/profiles/roman-utila-small.jpg) | roman-utila | 1 |
| ![asparuhkostov](https://contributors.novu.co/profiles/asparuhkostov-small.jpg) | asparuhkostov | 1 |
| ![deep-bhatt-pmc](https://contributors.novu.co/profiles/deep-bhatt-pmc-small.jpg) | deep-bhatt-pmc | 1 |
| ![tienthanh2509](https://contributors.novu.co/profiles/tienthanh2509-small.jpg) | tienthanh2509 | 1 |
| ![tomcastro](https://contributors.novu.co/profiles/tomcastro-small.jpg) | tomcastro | 1 |
| ![SKG2310](https://contributors.novu.co/profiles/SKG2310-small.jpg) | SKG2310 | 1 |
| ![ebimohi](https://contributors.novu.co/profiles/ebimohi-small.jpg) | ebimohi | 1 |
| ![AvinashUtekar](https://contributors.novu.co/profiles/AvinashUtekar-small.jpg) | AvinashUtekar | 1 |
| ![adriantoro26](https://contributors.novu.co/profiles/adriantoro26-small.jpg) | adriantoro26 | 1 |
| ![nick-w-nick](https://contributors.novu.co/profiles/nick-w-nick-small.jpg) | nick-w-nick | 1 |
| ![szbartnik](https://contributors.novu.co/profiles/szbartnik-small.jpg) | szbartnik | 1 |
| ![IoannisFlo](https://contributors.novu.co/profiles/IoannisFlo-small.jpg) | IoannisFlo | 1 |
| ![amitanshusahu](https://contributors.novu.co/profiles/amitanshusahu-small.jpg) | amitanshusahu | 1 |
| ![MD-Fleksa](https://contributors.novu.co/profiles/MD-Fleksa-small.jpg) | MD-Fleksa | 1 |
| ![palashbasik](https://contributors.novu.co/profiles/palashbasik-small.jpg) | palashbasik | 1 |
| ![RtiM0](https://contributors.novu.co/profiles/RtiM0-small.jpg) | RtiM0 | 1 |
| ![ayush4345](https://contributors.novu.co/profiles/ayush4345-small.jpg) | ayush4345 | 1 |
| ![david-morris](https://contributors.novu.co/profiles/david-morris-small.jpg) | david-morris | 1 |
| ![raheelriax](https://contributors.novu.co/profiles/raheelriax-small.jpg) | raheelriax | 1 |
| ![SergeiMeza](https://contributors.novu.co/profiles/SergeiMeza-small.jpg) | SergeiMeza | 1 |
| ![donnguyen](https://contributors.novu.co/profiles/donnguyen-small.jpg) | donnguyen | 1 |
| ![jensenbox](https://contributors.novu.co/profiles/jensenbox-small.jpg) | jensenbox | 1 |
| ![dependabot[bot]](https://contributors.novu.co/profiles/dependabot[bot]-small.jpg) | dependabot[bot] | 1 |
| ![underfisk](https://contributors.novu.co/profiles/underfisk-small.jpg) | underfisk | 1 |
| ![simon-retsch](https://contributors.novu.co/profiles/simon-retsch-small.jpg) | simon-retsch | 1 |
| ![origranot](https://contributors.novu.co/profiles/origranot-small.jpg) | origranot | 1 |
| ![PidginEnemy](https://contributors.novu.co/profiles/PidginEnemy-small.jpg) | PidginEnemy | 1 |
| ![PritamSarbajna](https://contributors.novu.co/profiles/PritamSarbajna-small.jpg) | PritamSarbajna | 1 |
| ![AakashRaj20](https://contributors.novu.co/profiles/AakashRaj20-small.jpg) | AakashRaj20 | 1 |
| ![pgaijin66](https://contributors.novu.co/profiles/pgaijin66-small.jpg) | pgaijin66 | 1 |
| ![wolfymaster](https://contributors.novu.co/profiles/wolfymaster-small.jpg) | wolfymaster | 1 |
| ![magnetomax](https://contributors.novu.co/profiles/magnetomax-small.jpg) | magnetomax | 1 |
| ![fredsossa1](https://contributors.novu.co/profiles/fredsossa1-small.jpg) | fredsossa1 | 1 |
| ![rockingrohit9639](https://contributors.novu.co/profiles/rockingrohit9639-small.jpg) | rockingrohit9639 | 1 |
| ![abhinavsaurav](https://contributors.novu.co/profiles/abhinavsaurav-small.jpg) | abhinavsaurav | 1 |
| ![adarshajit](https://contributors.novu.co/profiles/adarshajit-small.jpg) | adarshajit | 1 |
| ![sachinsom93](https://contributors.novu.co/profiles/sachinsom93-small.jpg) | sachinsom93 | 1 |
| ![Zed93](https://contributors.novu.co/profiles/Zed93-small.jpg) | Zed93 | 1 |
| ![thisaakash](https://contributors.novu.co/profiles/thisaakash-small.jpg) | thisaakash | 1 |
| ![ArshErgon](https://contributors.novu.co/profiles/ArshErgon-small.jpg) | ArshErgon | 1 |
| ![dha-stix](https://contributors.novu.co/profiles/dha-stix-small.jpg) | dha-stix | 1 |
| ![josephjosedev](https://contributors.novu.co/profiles/josephjosedev-small.jpg) | josephjosedev | 1 |
| ![EmiliyaGrossman](https://contributors.novu.co/profiles/EmiliyaGrossman-small.jpg) | EmiliyaGrossman | 1 |
| ![dcbartlett-fadv](https://contributors.novu.co/profiles/dcbartlett-fadv-small.jpg) | dcbartlett-fadv | 1 |
| ![KarlGusta](https://contributors.novu.co/profiles/KarlGusta-small.jpg) | KarlGusta | 1 |
| ![souravjain540](https://contributors.novu.co/profiles/souravjain540-small.jpg) | souravjain540 | 1 |
| ![tusharsrivastav](https://contributors.novu.co/profiles/tusharsrivastav-small.jpg) | tusharsrivastav | 1 |
| ![williamsgqdev](https://contributors.novu.co/profiles/williamsgqdev-small.jpg) | williamsgqdev | 1 |
| ![SaschaWebDev](https://contributors.novu.co/profiles/SaschaWebDev-small.jpg) | SaschaWebDev | 1 |
| ![TexasBullet26](https://contributors.novu.co/profiles/TexasBullet26-small.jpg) | TexasBullet26 | 1 |
| ![joaomarcoscrs](https://contributors.novu.co/profiles/joaomarcoscrs-small.jpg) | joaomarcoscrs | 1 |
| ![Scrip7](https://contributors.novu.co/profiles/Scrip7-small.jpg) | Scrip7 | 1 |
| ![osbornetunde](https://contributors.novu.co/profiles/osbornetunde-small.jpg) | osbornetunde | 1 |
| ![cloudguruab](https://contributors.novu.co/profiles/cloudguruab-small.jpg) | cloudguruab | 1 |
| ![l0ne](https://contributors.novu.co/profiles/l0ne-small.jpg) | l0ne | 1 |
| ![timgates42](https://contributors.novu.co/profiles/timgates42-small.jpg) | timgates42 | 1 |
| ![chasmfiend](https://contributors.novu.co/profiles/chasmfiend-small.jpg) | chasmfiend | 1 |
| ![tonytangdev](https://contributors.novu.co/profiles/tonytangdev-small.jpg) | tonytangdev | 1 |
| ![ulentini](https://contributors.novu.co/profiles/ulentini-small.jpg) | ulentini | 1 |
| ![RobiMez](https://contributors.novu.co/profiles/RobiMez-small.jpg) | RobiMez | 1 |
| ![L8Y](https://contributors.novu.co/profiles/L8Y-small.jpg) | L8Y | 1 |
| ![artfuldev](https://contributors.novu.co/profiles/artfuldev-small.jpg) | artfuldev | 1 |
| ![painotpi](https://contributors.novu.co/profiles/painotpi-small.jpg) | painotpi | 1 |
| ![Xenfo](https://contributors.novu.co/profiles/Xenfo-small.jpg) | Xenfo | 1 |
| ![crismxiex](https://contributors.novu.co/profiles/crismxiex-small.jpg) | crismxiex | 1 |
| ![matthiez](https://contributors.novu.co/profiles/matthiez-small.jpg) | matthiez | 1 |
| ![wheredidhugo](https://contributors.novu.co/profiles/wheredidhugo-small.jpg) | wheredidhugo | 1 |
| ![bolotskydev](https://contributors.novu.co/profiles/bolotskydev-small.jpg) | bolotskydev | 1 |
| ![asgeirf](https://contributors.novu.co/profiles/asgeirf-small.jpg) | asgeirf | 1 |
| ![samaranand](https://contributors.novu.co/profiles/samaranand-small.jpg) | samaranand | 1 |
| ![eddiejaoude](https://contributors.novu.co/profiles/eddiejaoude-small.jpg) | eddiejaoude | 1 |
| ![mrajen27](https://contributors.novu.co/profiles/mrajen27-small.jpg) | mrajen27 | 1 |
| ![wpoynter](https://contributors.novu.co/profiles/wpoynter-small.jpg) | wpoynter | 1 |
| ![AmanNegi](https://contributors.novu.co/profiles/AmanNegi-small.jpg) | AmanNegi | 1 |
| ![miles170](https://contributors.novu.co/profiles/miles170-small.jpg) | miles170 | 1 |
| ![guywal](https://contributors.novu.co/profiles/guywal-small.jpg) | guywal | 1 |
| ![kinson](https://contributors.novu.co/profiles/kinson-small.jpg) | kinson | 1 |
| ![dcamarasa](https://contributors.novu.co/profiles/dcamarasa-small.jpg) | dcamarasa | 1 |
| ![matigumma](https://contributors.novu.co/profiles/matigumma-small.jpg) | matigumma | 1 |
| ![DanishOnGit](https://contributors.novu.co/profiles/DanishOnGit-small.jpg) | DanishOnGit | 1 |
| ![saby22](https://contributors.novu.co/profiles/saby22-small.jpg) | saby22 | 1 |
| ![LucasLeandroBR](https://contributors.novu.co/profiles/LucasLeandroBR-small.jpg) | LucasLeandroBR | 1 |
| ![stanulilic](https://contributors.novu.co/profiles/stanulilic-small.jpg) | stanulilic | 1 |
| ![thomasbnt](https://contributors.novu.co/profiles/thomasbnt-small.jpg) | thomasbnt | 1 |
| ![vivian-dai](https://contributors.novu.co/profiles/vivian-dai-small.jpg) | vivian-dai | 1 |
| ![ozanuslan](https://contributors.novu.co/profiles/ozanuslan-small.jpg) | ozanuslan | 1 |
| ![yk-jp](https://contributors.novu.co/profiles/yk-jp-small.jpg) | yk-jp | 1 |
| ![vanyaxk](https://contributors.novu.co/profiles/vanyaxk-small.jpg) | vanyaxk | 1 |
| ![VasuDevrani](https://contributors.novu.co/profiles/VasuDevrani-small.jpg) | VasuDevrani | 1 |
| ![Artemis6969](https://contributors.novu.co/profiles/Artemis6969-small.jpg) | Artemis6969 | 1 |
| ![AshishSharma1203](https://contributors.novu.co/profiles/AshishSharma1203-small.jpg) | AshishSharma1203 | 1 |
| ![aguywithnojob](https://contributors.novu.co/profiles/aguywithnojob-small.jpg) | aguywithnojob | 1 |
| ![sebastiaanviaene](https://contributors.novu.co/profiles/sebastiaanviaene-small.jpg) | sebastiaanviaene | 1 |
| ![psteinroe](https://contributors.novu.co/profiles/psteinroe-small.jpg) | psteinroe | 1 |
| ![Predeactor](https://contributors.novu.co/profiles/Predeactor-small.jpg) | Predeactor | 1 |
| ![olinabin2004](https://contributors.novu.co/profiles/olinabin2004-small.jpg) | olinabin2004 | 1 |
| ![Rounak-28](https://contributors.novu.co/profiles/Rounak-28-small.jpg) | Rounak-28 | 1 |
| ![emhng](https://contributors.novu.co/profiles/emhng-small.jpg) | emhng | 1 |
| ![ManishModak](https://contributors.novu.co/profiles/ManishModak-small.jpg) | ManishModak | 1 |
| ![Dilshan-H](https://contributors.novu.co/profiles/Dilshan-H-small.jpg) | Dilshan-H | 1 |
| ![nickprinsloo](https://contributors.novu.co/profiles/nickprinsloo-small.jpg) | nickprinsloo | 1 |
| ![og118](https://contributors.novu.co/profiles/og118-small.jpg) | og118 | 1 |
| ![shashankbhatgs](https://contributors.novu.co/profiles/shashankbhatgs-small.jpg) | shashankbhatgs | 1 |
| ![munyoudoum](https://contributors.novu.co/profiles/munyoudoum-small.jpg) | munyoudoum | 1 |
| ![Sen-442b](https://contributors.novu.co/profiles/Sen-442b-small.jpg) | Sen-442b | 1 |
| ![jsoref](https://contributors.novu.co/profiles/jsoref-small.jpg) | jsoref | 1 |
| ![maglionaire](https://contributors.novu.co/profiles/maglionaire-small.jpg) | maglionaire | 1 |
| ![Srikarmk](https://contributors.novu.co/profiles/Srikarmk-small.jpg) | Srikarmk | 1 |
| ![Aditya-Kapadiya](https://contributors.novu.co/profiles/Aditya-Kapadiya-small.jpg) | Aditya-Kapadiya | 1 |
| ![harshagrawal523](https://contributors.novu.co/profiles/harshagrawal523-small.jpg) | harshagrawal523 | 1 |
| ![PalashDhabale](https://contributors.novu.co/profiles/PalashDhabale-small.jpg) | PalashDhabale | 1 |
| ![soundarrajan-official](https://contributors.novu.co/profiles/soundarrajan-official-small.jpg) | soundarrajan-official | 1 |
| ![ranodeepbanerjee](https://contributors.novu.co/profiles/ranodeepbanerjee-small.jpg) | ranodeepbanerjee | 1 |
| ![CursedRock17](https://contributors.novu.co/profiles/CursedRock17-small.jpg) | CursedRock17 | 1 |
| ![furtidev](https://contributors.novu.co/profiles/furtidev-small.jpg) | furtidev | 1 |
| ![L-U-C-K-Y](https://contributors.novu.co/profiles/L-U-C-K-Y-small.jpg) | L-U-C-K-Y | 1 |
| ![hitblast](https://contributors.novu.co/profiles/hitblast-small.jpg) | hitblast | 1 |
| ![priyanshkulshrestha](https://contributors.novu.co/profiles/priyanshkulshrestha-small.jpg) | priyanshkulshrestha | 1 |
| ![akarsh-jain-790](https://contributors.novu.co/profiles/akarsh-jain-790-small.jpg) | akarsh-jain-790 | 1 |
| ![Sreevidya181](https://contributors.novu.co/profiles/Sreevidya181-small.jpg) | Sreevidya181 | 1 |
| ![tanishk-23](https://contributors.novu.co/profiles/tanishk-23-small.jpg) | tanishk-23 | 1 |
| ![Ian-Yy](https://contributors.novu.co/profiles/Ian-Yy-small.jpg) | Ian-Yy | 1 |
| ![Astrodevil](https://contributors.novu.co/profiles/Astrodevil-small.jpg) | Astrodevil | 1 |
| ![tuanlc](https://contributors.novu.co/profiles/tuanlc-small.jpg) | tuanlc | 1 |
| ![MuzzammilRafiq](https://contributors.novu.co/profiles/MuzzammilRafiq-small.jpg) | MuzzammilRafiq | 1 |
| ![chaiwattsw](https://contributors.novu.co/profiles/chaiwattsw-small.jpg) | chaiwattsw | 1 |
| ![devXprite](https://contributors.novu.co/profiles/devXprite-small.jpg) | devXprite | 1 |
| ![myshri123](https://contributors.novu.co/profiles/myshri123-small.jpg) | myshri123 | 1 |
| ![eltociear](https://contributors.novu.co/profiles/eltociear-small.jpg) | eltociear | 1 |
| ![tomasbranda](https://contributors.novu.co/profiles/tomasbranda-small.jpg) | tomasbranda | 1 |
| ![cuitlazotlac](https://contributors.novu.co/profiles/cuitlazotlac-small.jpg) | cuitlazotlac | 1 |
| ![rameshwaghmare123](https://contributors.novu.co/profiles/rameshwaghmare123-small.jpg) | rameshwaghmare123 | 1 |
| ![ljobse](https://contributors.novu.co/profiles/ljobse-small.jpg) | ljobse | 1 |
| ![Kritika30032002](https://contributors.novu.co/profiles/Kritika30032002-small.jpg) | Kritika30032002 | 1 |
| ![iqrafirdose](https://contributors.novu.co/profiles/iqrafirdose-small.jpg) | iqrafirdose | 1 |
| ![sofferjacob](https://contributors.novu.co/profiles/sofferjacob-small.jpg) | sofferjacob | 1 |
| ![johnnyreilly](https://contributors.novu.co/profiles/johnnyreilly-small.jpg) | johnnyreilly | 1 |
| ![amarkmcconn](https://contributors.novu.co/profiles/amarkmcconn-small.jpg) | amarkmcconn | 1 |
| ![Swahjak](https://contributors.novu.co/profiles/Swahjak-small.jpg) | Swahjak | 1 |
| ![ducdung8491](https://contributors.novu.co/profiles/ducdung8491-small.jpg) | ducdung8491 | 1 |
| ![dlmcauslan](https://contributors.novu.co/profiles/dlmcauslan-small.jpg) | dlmcauslan | 1 |
| ![riginoommen](https://contributors.novu.co/profiles/riginoommen-small.jpg) | riginoommen | 1 |
| ![vinhnguyen1211](https://contributors.novu.co/profiles/vinhnguyen1211-small.jpg) | vinhnguyen1211 | 1 |
| ![viktorlarsson](https://contributors.novu.co/profiles/viktorlarsson-small.jpg) | viktorlarsson | 1 |
| ![ttlgeek](https://contributors.novu.co/profiles/ttlgeek-small.jpg) | ttlgeek | 1 |
| ![ArturHamannRonconi](https://contributors.novu.co/profiles/ArturHamannRonconi-small.jpg) | ArturHamannRonconi | 1 |
| ![achadha235](https://contributors.novu.co/profiles/achadha235-small.jpg) | achadha235 | 1 |
| ![jacobwgillespie](https://contributors.novu.co/profiles/jacobwgillespie-small.jpg) | jacobwgillespie | 1 |
| ![caiopiassali](https://contributors.novu.co/profiles/caiopiassali-small.jpg) | caiopiassali | 1 |
| ![ilteoood](https://contributors.novu.co/profiles/ilteoood-small.jpg) | ilteoood | 1 |
| ![paolapog](https://contributors.novu.co/profiles/paolapog-small.jpg) | paolapog | 1 |
| ![isurumaldeniya](https://contributors.novu.co/profiles/isurumaldeniya-small.jpg) | isurumaldeniya | 1 |
| ![vishnu-kyatannawar](https://contributors.novu.co/profiles/vishnu-kyatannawar-small.jpg) | vishnu-kyatannawar | 1 |
| ![codesee-maps[bot]](https://contributors.novu.co/profiles/codesee-maps[bot]-small.jpg) | codesee-maps[bot] | 1 |
| ![Agathe-Brusset](https://contributors.novu.co/profiles/Agathe-Brusset-small.jpg) | Agathe-Brusset | 1 |
| ![RobertoCassino](https://contributors.novu.co/profiles/RobertoCassino-small.jpg) | RobertoCassino | 1 |
| ![chauandrew](https://contributors.novu.co/profiles/chauandrew-small.jpg) | chauandrew | 1 |
| ![kylegalbraith](https://contributors.novu.co/profiles/kylegalbraith-small.jpg) | kylegalbraith | 1 |
| ![Ananya2001-an](https://contributors.novu.co/profiles/Ananya2001-an-small.jpg) | Ananya2001-an | 1 |
| ![ghost](https://contributors.novu.co/profiles/ghost-small.jpg) | ghost | 1 |
| ![precs-jmcrs](https://contributors.novu.co/profiles/precs-jmcrs-small.jpg) | precs-jmcrs | 1 |
| ![Guyonsteroids](https://contributors.novu.co/profiles/Guyonsteroids-small.jpg) | Guyonsteroids | 1 |
