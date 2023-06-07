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
| Photo | Nick name | Medals |
| ----- | ------ | ------ |
| <img src="https://avatars.githubusercontent.com/jainpawan21?v=3&s=60" width="60" height="60" alt="jainpawan21" /> | <a href="https://novu.co/contributors/jainpawan21" target="_blank" rel="noopener noreferrer">jainpawan21</a> | Gold Medal, Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/andrewgolovanov?v=3&s=60" width="60" height="60" alt="andrewgolovanov" /> | <a href="https://novu.co/contributors/andrewgolovanov" target="_blank" rel="noopener noreferrer">andrewgolovanov</a> | Gold Medal, Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/venarius?v=3&s=60" width="60" height="60" alt="venarius" /> | <a href="https://novu.co/contributors/venarius" target="_blank" rel="noopener noreferrer">venarius</a> | Gold Medal, Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/ryshu?v=3&s=60" width="60" height="60" alt="ryshu" /> | <a href="https://novu.co/contributors/ryshu" target="_blank" rel="noopener noreferrer">ryshu</a> | Gold Medal, Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/ericobi?v=3&s=60" width="60" height="60" alt="ericobi" /> | <a href="https://novu.co/contributors/ericobi" target="_blank" rel="noopener noreferrer">ericobi</a> | Gold Medal, Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/akshitagupta15june?v=3&s=60" width="60" height="60" alt="akshitagupta15june" /> | <a href="https://novu.co/contributors/akshitagupta15june" target="_blank" rel="noopener noreferrer">akshitagupta15june</a> | Gold Medal, Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/peoray?v=3&s=60" width="60" height="60" alt="peoray" /> | <a href="https://novu.co/contributors/peoray" target="_blank" rel="noopener noreferrer">peoray</a> | Gold Medal, Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/abhilipsasahoo03?v=3&s=60" width="60" height="60" alt="abhilipsasahoo03" /> | <a href="https://novu.co/contributors/abhilipsasahoo03" target="_blank" rel="noopener noreferrer">abhilipsasahoo03</a> | Gold Medal, Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/diwash007?v=3&s=60" width="60" height="60" alt="diwash007" /> | <a href="https://novu.co/contributors/diwash007" target="_blank" rel="noopener noreferrer">diwash007</a> | Gold Medal, Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/raikasdev?v=3&s=60" width="60" height="60" alt="raikasdev" /> | <a href="https://novu.co/contributors/raikasdev" target="_blank" rel="noopener noreferrer">raikasdev</a> | Gold Medal, Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Akash190104?v=3&s=60" width="60" height="60" alt="Akash190104" /> | <a href="https://novu.co/contributors/Akash190104" target="_blank" rel="noopener noreferrer">Akash190104</a> | Gold Medal, Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Rutam21?v=3&s=60" width="60" height="60" alt="Rutam21" /> | <a href="https://novu.co/contributors/Rutam21" target="_blank" rel="noopener noreferrer">Rutam21</a> | Gold Medal, Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/MaximFedarau?v=3&s=60" width="60" height="60" alt="MaximFedarau" /> | <a href="https://novu.co/contributors/MaximFedarau" target="_blank" rel="noopener noreferrer">MaximFedarau</a> | Gold Medal, Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/gitstart?v=3&s=60" width="60" height="60" alt="gitstart" /> | <a href="https://novu.co/contributors/gitstart" target="_blank" rel="noopener noreferrer">gitstart</a> | Gold Medal, Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/samsoft00?v=3&s=60" width="60" height="60" alt="samsoft00" /> | <a href="https://novu.co/contributors/samsoft00" target="_blank" rel="noopener noreferrer">samsoft00</a> | Gold Medal, Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/kymppi?v=3&s=60" width="60" height="60" alt="kymppi" /> | <a href="https://novu.co/contributors/kymppi" target="_blank" rel="noopener noreferrer">kymppi</a> | Gold Medal, Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/BoseSj?v=3&s=60" width="60" height="60" alt="BoseSj" /> | <a href="https://novu.co/contributors/BoseSj" target="_blank" rel="noopener noreferrer">BoseSj</a> | Gold Medal, Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/michaldziuba03?v=3&s=60" width="60" height="60" alt="michaldziuba03" /> | <a href="https://novu.co/contributors/michaldziuba03" target="_blank" rel="noopener noreferrer">michaldziuba03</a> | Gold Medal, Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/codingmickey?v=3&s=60" width="60" height="60" alt="codingmickey" /> | <a href="https://novu.co/contributors/codingmickey" target="_blank" rel="noopener noreferrer">codingmickey</a> | Gold Medal, Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/chavda-bhavik?v=3&s=60" width="60" height="60" alt="chavda-bhavik" /> | <a href="https://novu.co/contributors/chavda-bhavik" target="_blank" rel="noopener noreferrer">chavda-bhavik</a> | Gold Medal, Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/kailashchoudhary11?v=3&s=60" width="60" height="60" alt="kailashchoudhary11" /> | <a href="https://novu.co/contributors/kailashchoudhary11" target="_blank" rel="noopener noreferrer">kailashchoudhary11</a> | Gold Medal, Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/katyaterletskaya?v=3&s=60" width="60" height="60" alt="katyaterletskaya" /> | <a href="https://novu.co/contributors/katyaterletskaya" target="_blank" rel="noopener noreferrer">katyaterletskaya</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/JoeyEamigh?v=3&s=60" width="60" height="60" alt="JoeyEamigh" /> | <a href="https://novu.co/contributors/JoeyEamigh" target="_blank" rel="noopener noreferrer">JoeyEamigh</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/vannyle?v=3&s=60" width="60" height="60" alt="vannyle" /> | <a href="https://novu.co/contributors/vannyle" target="_blank" rel="noopener noreferrer">vannyle</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/AlexVCS?v=3&s=60" width="60" height="60" alt="AlexVCS" /> | <a href="https://novu.co/contributors/AlexVCS" target="_blank" rel="noopener noreferrer">AlexVCS</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/galezra?v=3&s=60" width="60" height="60" alt="galezra" /> | <a href="https://novu.co/contributors/galezra" target="_blank" rel="noopener noreferrer">galezra</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/TheLearneer?v=3&s=60" width="60" height="60" alt="TheLearneer" /> | <a href="https://novu.co/contributors/TheLearneer" target="_blank" rel="noopener noreferrer">TheLearneer</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/lex111?v=3&s=60" width="60" height="60" alt="lex111" /> | <a href="https://novu.co/contributors/lex111" target="_blank" rel="noopener noreferrer">lex111</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/ShaneMaglangit?v=3&s=60" width="60" height="60" alt="ShaneMaglangit" /> | <a href="https://novu.co/contributors/ShaneMaglangit" target="_blank" rel="noopener noreferrer">ShaneMaglangit</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/sumitsaurabh927?v=3&s=60" width="60" height="60" alt="sumitsaurabh927" /> | <a href="https://novu.co/contributors/sumitsaurabh927" target="_blank" rel="noopener noreferrer">sumitsaurabh927</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/fadkeabhi?v=3&s=60" width="60" height="60" alt="fadkeabhi" /> | <a href="https://novu.co/contributors/fadkeabhi" target="_blank" rel="noopener noreferrer">fadkeabhi</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/devblin?v=3&s=60" width="60" height="60" alt="devblin" /> | <a href="https://novu.co/contributors/devblin" target="_blank" rel="noopener noreferrer">devblin</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/WinterCore?v=3&s=60" width="60" height="60" alt="WinterCore" /> | <a href="https://novu.co/contributors/WinterCore" target="_blank" rel="noopener noreferrer">WinterCore</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/proDOOMman?v=3&s=60" width="60" height="60" alt="proDOOMman" /> | <a href="https://novu.co/contributors/proDOOMman" target="_blank" rel="noopener noreferrer">proDOOMman</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Wyfy0107?v=3&s=60" width="60" height="60" alt="Wyfy0107" /> | <a href="https://novu.co/contributors/Wyfy0107" target="_blank" rel="noopener noreferrer">Wyfy0107</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Lian1230?v=3&s=60" width="60" height="60" alt="Lian1230" /> | <a href="https://novu.co/contributors/Lian1230" target="_blank" rel="noopener noreferrer">Lian1230</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/codingis4noobs2?v=3&s=60" width="60" height="60" alt="codingis4noobs2" /> | <a href="https://novu.co/contributors/codingis4noobs2" target="_blank" rel="noopener noreferrer">codingis4noobs2</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/MrKrishnaAgarwal?v=3&s=60" width="60" height="60" alt="MrKrishnaAgarwal" /> | <a href="https://novu.co/contributors/MrKrishnaAgarwal" target="_blank" rel="noopener noreferrer">MrKrishnaAgarwal</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/k8isdead?v=3&s=60" width="60" height="60" alt="k8isdead" /> | <a href="https://novu.co/contributors/k8isdead" target="_blank" rel="noopener noreferrer">k8isdead</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/shtelzerartem?v=3&s=60" width="60" height="60" alt="shtelzerartem" /> | <a href="https://novu.co/contributors/shtelzerartem" target="_blank" rel="noopener noreferrer">shtelzerartem</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/mocherfaoui?v=3&s=60" width="60" height="60" alt="mocherfaoui" /> | <a href="https://novu.co/contributors/mocherfaoui" target="_blank" rel="noopener noreferrer">mocherfaoui</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/akhill10?v=3&s=60" width="60" height="60" alt="akhill10" /> | <a href="https://novu.co/contributors/akhill10" target="_blank" rel="noopener noreferrer">akhill10</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/TNAJanssen?v=3&s=60" width="60" height="60" alt="TNAJanssen" /> | <a href="https://novu.co/contributors/TNAJanssen" target="_blank" rel="noopener noreferrer">TNAJanssen</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Abobos?v=3&s=60" width="60" height="60" alt="Abobos" /> | <a href="https://novu.co/contributors/Abobos" target="_blank" rel="noopener noreferrer">Abobos</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/SachinHatikankar100?v=3&s=60" width="60" height="60" alt="SachinHatikankar100" /> | <a href="https://novu.co/contributors/SachinHatikankar100" target="_blank" rel="noopener noreferrer">SachinHatikankar100</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/btkostner?v=3&s=60" width="60" height="60" alt="btkostner" /> | <a href="https://novu.co/contributors/btkostner" target="_blank" rel="noopener noreferrer">btkostner</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/florian-lefebvre?v=3&s=60" width="60" height="60" alt="florian-lefebvre" /> | <a href="https://novu.co/contributors/florian-lefebvre" target="_blank" rel="noopener noreferrer">florian-lefebvre</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/kVarunkk?v=3&s=60" width="60" height="60" alt="kVarunkk" /> | <a href="https://novu.co/contributors/kVarunkk" target="_blank" rel="noopener noreferrer">kVarunkk</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Susmita-Dey?v=3&s=60" width="60" height="60" alt="Susmita-Dey" /> | <a href="https://novu.co/contributors/Susmita-Dey" target="_blank" rel="noopener noreferrer">Susmita-Dey</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/saimaheshtaduri?v=3&s=60" width="60" height="60" alt="saimaheshtaduri" /> | <a href="https://novu.co/contributors/saimaheshtaduri" target="_blank" rel="noopener noreferrer">saimaheshtaduri</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/L-390?v=3&s=60" width="60" height="60" alt="L-390" /> | <a href="https://novu.co/contributors/L-390" target="_blank" rel="noopener noreferrer">L-390</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/vrabe?v=3&s=60" width="60" height="60" alt="vrabe" /> | <a href="https://novu.co/contributors/vrabe" target="_blank" rel="noopener noreferrer">vrabe</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/DonnachaHeff?v=3&s=60" width="60" height="60" alt="DonnachaHeff" /> | <a href="https://novu.co/contributors/DonnachaHeff" target="_blank" rel="noopener noreferrer">DonnachaHeff</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/LunarMarathon?v=3&s=60" width="60" height="60" alt="LunarMarathon" /> | <a href="https://novu.co/contributors/LunarMarathon" target="_blank" rel="noopener noreferrer">LunarMarathon</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/BhuvaneshPatil?v=3&s=60" width="60" height="60" alt="BhuvaneshPatil" /> | <a href="https://novu.co/contributors/BhuvaneshPatil" target="_blank" rel="noopener noreferrer">BhuvaneshPatil</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Raunik2?v=3&s=60" width="60" height="60" alt="Raunik2" /> | <a href="https://novu.co/contributors/Raunik2" target="_blank" rel="noopener noreferrer">Raunik2</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/npentrel?v=3&s=60" width="60" height="60" alt="npentrel" /> | <a href="https://novu.co/contributors/npentrel" target="_blank" rel="noopener noreferrer">npentrel</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Cxxshyy?v=3&s=60" width="60" height="60" alt="Cxxshyy" /> | <a href="https://novu.co/contributors/Cxxshyy" target="_blank" rel="noopener noreferrer">Cxxshyy</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/nikitagrossman?v=3&s=60" width="60" height="60" alt="nikitagrossman" /> | <a href="https://novu.co/contributors/nikitagrossman" target="_blank" rel="noopener noreferrer">nikitagrossman</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/immattdavison?v=3&s=60" width="60" height="60" alt="immattdavison" /> | <a href="https://novu.co/contributors/immattdavison" target="_blank" rel="noopener noreferrer">immattdavison</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/shanehandley-lived?v=3&s=60" width="60" height="60" alt="shanehandley-lived" /> | <a href="https://novu.co/contributors/shanehandley-lived" target="_blank" rel="noopener noreferrer">shanehandley-lived</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/rahmat-st?v=3&s=60" width="60" height="60" alt="rahmat-st" /> | <a href="https://novu.co/contributors/rahmat-st" target="_blank" rel="noopener noreferrer">rahmat-st</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/bigpreshy?v=3&s=60" width="60" height="60" alt="bigpreshy" /> | <a href="https://novu.co/contributors/bigpreshy" target="_blank" rel="noopener noreferrer">bigpreshy</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/FidalMathew?v=3&s=60" width="60" height="60" alt="FidalMathew" /> | <a href="https://novu.co/contributors/FidalMathew" target="_blank" rel="noopener noreferrer">FidalMathew</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/aggmoulik?v=3&s=60" width="60" height="60" alt="aggmoulik" /> | <a href="https://novu.co/contributors/aggmoulik" target="_blank" rel="noopener noreferrer">aggmoulik</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/nishit-g?v=3&s=60" width="60" height="60" alt="nishit-g" /> | <a href="https://novu.co/contributors/nishit-g" target="_blank" rel="noopener noreferrer">nishit-g</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/CharlieBrownCharacter?v=3&s=60" width="60" height="60" alt="CharlieBrownCharacter" /> | <a href="https://novu.co/contributors/CharlieBrownCharacter" target="_blank" rel="noopener noreferrer">CharlieBrownCharacter</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/ranrib?v=3&s=60" width="60" height="60" alt="ranrib" /> | <a href="https://novu.co/contributors/ranrib" target="_blank" rel="noopener noreferrer">ranrib</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/varghesejose2020?v=3&s=60" width="60" height="60" alt="varghesejose2020" /> | <a href="https://novu.co/contributors/varghesejose2020" target="_blank" rel="noopener noreferrer">varghesejose2020</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/chxmbley?v=3&s=60" width="60" height="60" alt="chxmbley" /> | <a href="https://novu.co/contributors/chxmbley" target="_blank" rel="noopener noreferrer">chxmbley</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/JakovGlavac?v=3&s=60" width="60" height="60" alt="JakovGlavac" /> | <a href="https://novu.co/contributors/JakovGlavac" target="_blank" rel="noopener noreferrer">JakovGlavac</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/mohanthilak?v=3&s=60" width="60" height="60" alt="mohanthilak" /> | <a href="https://novu.co/contributors/mohanthilak" target="_blank" rel="noopener noreferrer">mohanthilak</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Chii-Onan?v=3&s=60" width="60" height="60" alt="Chii-Onan" /> | <a href="https://novu.co/contributors/Chii-Onan" target="_blank" rel="noopener noreferrer">Chii-Onan</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Asmit2952?v=3&s=60" width="60" height="60" alt="Asmit2952" /> | <a href="https://novu.co/contributors/Asmit2952" target="_blank" rel="noopener noreferrer">Asmit2952</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/geisterfurz007?v=3&s=60" width="60" height="60" alt="geisterfurz007" /> | <a href="https://novu.co/contributors/geisterfurz007" target="_blank" rel="noopener noreferrer">geisterfurz007</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/ArmanChand?v=3&s=60" width="60" height="60" alt="ArmanChand" /> | <a href="https://novu.co/contributors/ArmanChand" target="_blank" rel="noopener noreferrer">ArmanChand</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/thenishantsapkota?v=3&s=60" width="60" height="60" alt="thenishantsapkota" /> | <a href="https://novu.co/contributors/thenishantsapkota" target="_blank" rel="noopener noreferrer">thenishantsapkota</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/yasell?v=3&s=60" width="60" height="60" alt="yasell" /> | <a href="https://novu.co/contributors/yasell" target="_blank" rel="noopener noreferrer">yasell</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/washbin?v=3&s=60" width="60" height="60" alt="washbin" /> | <a href="https://novu.co/contributors/washbin" target="_blank" rel="noopener noreferrer">washbin</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/MihirShinde-29?v=3&s=60" width="60" height="60" alt="MihirShinde-29" /> | <a href="https://novu.co/contributors/MihirShinde-29" target="_blank" rel="noopener noreferrer">MihirShinde-29</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/omimakhare?v=3&s=60" width="60" height="60" alt="omimakhare" /> | <a href="https://novu.co/contributors/omimakhare" target="_blank" rel="noopener noreferrer">omimakhare</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/michizhou?v=3&s=60" width="60" height="60" alt="michizhou" /> | <a href="https://novu.co/contributors/michizhou" target="_blank" rel="noopener noreferrer">michizhou</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Yash-sudo-web?v=3&s=60" width="60" height="60" alt="Yash-sudo-web" /> | <a href="https://novu.co/contributors/Yash-sudo-web" target="_blank" rel="noopener noreferrer">Yash-sudo-web</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/daniel-shuy?v=3&s=60" width="60" height="60" alt="daniel-shuy" /> | <a href="https://novu.co/contributors/daniel-shuy" target="_blank" rel="noopener noreferrer">daniel-shuy</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/kaustav202?v=3&s=60" width="60" height="60" alt="kaustav202" /> | <a href="https://novu.co/contributors/kaustav202" target="_blank" rel="noopener noreferrer">kaustav202</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Smartmind12?v=3&s=60" width="60" height="60" alt="Smartmind12" /> | <a href="https://novu.co/contributors/Smartmind12" target="_blank" rel="noopener noreferrer">Smartmind12</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/bishal7679?v=3&s=60" width="60" height="60" alt="bishal7679" /> | <a href="https://novu.co/contributors/bishal7679" target="_blank" rel="noopener noreferrer">bishal7679</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/das-amit?v=3&s=60" width="60" height="60" alt="das-amit" /> | <a href="https://novu.co/contributors/das-amit" target="_blank" rel="noopener noreferrer">das-amit</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Arjun31415?v=3&s=60" width="60" height="60" alt="Arjun31415" /> | <a href="https://novu.co/contributors/Arjun31415" target="_blank" rel="noopener noreferrer">Arjun31415</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/TheZal?v=3&s=60" width="60" height="60" alt="TheZal" /> | <a href="https://novu.co/contributors/TheZal" target="_blank" rel="noopener noreferrer">TheZal</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/SarojWasti?v=3&s=60" width="60" height="60" alt="SarojWasti" /> | <a href="https://novu.co/contributors/SarojWasti" target="_blank" rel="noopener noreferrer">SarojWasti</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/ShashankKumarSaxena?v=3&s=60" width="60" height="60" alt="ShashankKumarSaxena" /> | <a href="https://novu.co/contributors/ShashankKumarSaxena" target="_blank" rel="noopener noreferrer">ShashankKumarSaxena</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Akshu-on-github?v=3&s=60" width="60" height="60" alt="Akshu-on-github" /> | <a href="https://novu.co/contributors/Akshu-on-github" target="_blank" rel="noopener noreferrer">Akshu-on-github</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Abubakrce19?v=3&s=60" width="60" height="60" alt="Abubakrce19" /> | <a href="https://novu.co/contributors/Abubakrce19" target="_blank" rel="noopener noreferrer">Abubakrce19</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/wanderer163?v=3&s=60" width="60" height="60" alt="wanderer163" /> | <a href="https://novu.co/contributors/wanderer163" target="_blank" rel="noopener noreferrer">wanderer163</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/ImMattDavison?v=3&s=60" width="60" height="60" alt="ImMattDavison" /> | <a href="https://novu.co/contributors/ImMattDavison" target="_blank" rel="noopener noreferrer">ImMattDavison</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/tsssdev?v=3&s=60" width="60" height="60" alt="tsssdev" /> | <a href="https://novu.co/contributors/tsssdev" target="_blank" rel="noopener noreferrer">tsssdev</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/rahmat-dev?v=3&s=60" width="60" height="60" alt="rahmat-dev" /> | <a href="https://novu.co/contributors/rahmat-dev" target="_blank" rel="noopener noreferrer">rahmat-dev</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/vfxGer?v=3&s=60" width="60" height="60" alt="vfxGer" /> | <a href="https://novu.co/contributors/vfxGer" target="_blank" rel="noopener noreferrer">vfxGer</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/gitstart-novu?v=3&s=60" width="60" height="60" alt="gitstart-novu" /> | <a href="https://novu.co/contributors/gitstart-novu" target="_blank" rel="noopener noreferrer">gitstart-novu</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/asmitbm?v=3&s=60" width="60" height="60" alt="asmitbm" /> | <a href="https://novu.co/contributors/asmitbm" target="_blank" rel="noopener noreferrer">asmitbm</a> | Silver Medal, Bronze Medal |
| <img src="https://avatars.githubusercontent.com/cryptic-ai?v=3&s=60" width="60" height="60" alt="cryptic-ai" /> | <a href="https://novu.co/contributors/cryptic-ai" target="_blank" rel="noopener noreferrer">cryptic-ai</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/wdh23?v=3&s=60" width="60" height="60" alt="wdh23" /> | <a href="https://novu.co/contributors/wdh23" target="_blank" rel="noopener noreferrer">wdh23</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/guiruiz?v=3&s=60" width="60" height="60" alt="guiruiz" /> | <a href="https://novu.co/contributors/guiruiz" target="_blank" rel="noopener noreferrer">guiruiz</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/prajjwaldimri?v=3&s=60" width="60" height="60" alt="prajjwaldimri" /> | <a href="https://novu.co/contributors/prajjwaldimri" target="_blank" rel="noopener noreferrer">prajjwaldimri</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/americano98?v=3&s=60" width="60" height="60" alt="americano98" /> | <a href="https://novu.co/contributors/americano98" target="_blank" rel="noopener noreferrer">americano98</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/ryshoooo?v=3&s=60" width="60" height="60" alt="ryshoooo" /> | <a href="https://novu.co/contributors/ryshoooo" target="_blank" rel="noopener noreferrer">ryshoooo</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/MaurerKrisztian?v=3&s=60" width="60" height="60" alt="MaurerKrisztian" /> | <a href="https://novu.co/contributors/MaurerKrisztian" target="_blank" rel="noopener noreferrer">MaurerKrisztian</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/shahriar-shojib?v=3&s=60" width="60" height="60" alt="shahriar-shojib" /> | <a href="https://novu.co/contributors/shahriar-shojib" target="_blank" rel="noopener noreferrer">shahriar-shojib</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/CodrShiv?v=3&s=60" width="60" height="60" alt="CodrShiv" /> | <a href="https://novu.co/contributors/CodrShiv" target="_blank" rel="noopener noreferrer">CodrShiv</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/csachdeva83?v=3&s=60" width="60" height="60" alt="csachdeva83" /> | <a href="https://novu.co/contributors/csachdeva83" target="_blank" rel="noopener noreferrer">csachdeva83</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/remirobichet?v=3&s=60" width="60" height="60" alt="remirobichet" /> | <a href="https://novu.co/contributors/remirobichet" target="_blank" rel="noopener noreferrer">remirobichet</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/zakariaelas?v=3&s=60" width="60" height="60" alt="zakariaelas" /> | <a href="https://novu.co/contributors/zakariaelas" target="_blank" rel="noopener noreferrer">zakariaelas</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/murtuzaalisurti?v=3&s=60" width="60" height="60" alt="murtuzaalisurti" /> | <a href="https://novu.co/contributors/murtuzaalisurti" target="_blank" rel="noopener noreferrer">murtuzaalisurti</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Lorakus?v=3&s=60" width="60" height="60" alt="Lorakus" /> | <a href="https://novu.co/contributors/Lorakus" target="_blank" rel="noopener noreferrer">Lorakus</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/oba2311?v=3&s=60" width="60" height="60" alt="oba2311" /> | <a href="https://novu.co/contributors/oba2311" target="_blank" rel="noopener noreferrer">oba2311</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Tosin-webdev?v=3&s=60" width="60" height="60" alt="Tosin-webdev" /> | <a href="https://novu.co/contributors/Tosin-webdev" target="_blank" rel="noopener noreferrer">Tosin-webdev</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/akhil-gautam?v=3&s=60" width="60" height="60" alt="akhil-gautam" /> | <a href="https://novu.co/contributors/akhil-gautam" target="_blank" rel="noopener noreferrer">akhil-gautam</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/deepak-sreekumar?v=3&s=60" width="60" height="60" alt="deepak-sreekumar" /> | <a href="https://novu.co/contributors/deepak-sreekumar" target="_blank" rel="noopener noreferrer">deepak-sreekumar</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/diganta413?v=3&s=60" width="60" height="60" alt="diganta413" /> | <a href="https://novu.co/contributors/diganta413" target="_blank" rel="noopener noreferrer">diganta413</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/yuval-hazaz?v=3&s=60" width="60" height="60" alt="yuval-hazaz" /> | <a href="https://novu.co/contributors/yuval-hazaz" target="_blank" rel="noopener noreferrer">yuval-hazaz</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/13ogrammer?v=3&s=60" width="60" height="60" alt="13ogrammer" /> | <a href="https://novu.co/contributors/13ogrammer" target="_blank" rel="noopener noreferrer">13ogrammer</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/rhythm-sharma?v=3&s=60" width="60" height="60" alt="rhythm-sharma" /> | <a href="https://novu.co/contributors/rhythm-sharma" target="_blank" rel="noopener noreferrer">rhythm-sharma</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/doomspork?v=3&s=60" width="60" height="60" alt="doomspork" /> | <a href="https://novu.co/contributors/doomspork" target="_blank" rel="noopener noreferrer">doomspork</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/SpencerMiller23?v=3&s=60" width="60" height="60" alt="SpencerMiller23" /> | <a href="https://novu.co/contributors/SpencerMiller23" target="_blank" rel="noopener noreferrer">SpencerMiller23</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/nidble?v=3&s=60" width="60" height="60" alt="nidble" /> | <a href="https://novu.co/contributors/nidble" target="_blank" rel="noopener noreferrer">nidble</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/nilesh-maurya?v=3&s=60" width="60" height="60" alt="nilesh-maurya" /> | <a href="https://novu.co/contributors/nilesh-maurya" target="_blank" rel="noopener noreferrer">nilesh-maurya</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/krshkun?v=3&s=60" width="60" height="60" alt="krshkun" /> | <a href="https://novu.co/contributors/krshkun" target="_blank" rel="noopener noreferrer">krshkun</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/viveknshah?v=3&s=60" width="60" height="60" alt="viveknshah" /> | <a href="https://novu.co/contributors/viveknshah" target="_blank" rel="noopener noreferrer">viveknshah</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/IamsahilPhadtare?v=3&s=60" width="60" height="60" alt="IamsahilPhadtare" /> | <a href="https://novu.co/contributors/IamsahilPhadtare" target="_blank" rel="noopener noreferrer">IamsahilPhadtare</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/pmontp19?v=3&s=60" width="60" height="60" alt="pmontp19" /> | <a href="https://novu.co/contributors/pmontp19" target="_blank" rel="noopener noreferrer">pmontp19</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/EmmaDawsonDev?v=3&s=60" width="60" height="60" alt="EmmaDawsonDev" /> | <a href="https://novu.co/contributors/EmmaDawsonDev" target="_blank" rel="noopener noreferrer">EmmaDawsonDev</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/AranavMahalpure?v=3&s=60" width="60" height="60" alt="AranavMahalpure" /> | <a href="https://novu.co/contributors/AranavMahalpure" target="_blank" rel="noopener noreferrer">AranavMahalpure</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/npv12?v=3&s=60" width="60" height="60" alt="npv12" /> | <a href="https://novu.co/contributors/npv12" target="_blank" rel="noopener noreferrer">npv12</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/dmulligan?v=3&s=60" width="60" height="60" alt="dmulligan" /> | <a href="https://novu.co/contributors/dmulligan" target="_blank" rel="noopener noreferrer">dmulligan</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Akshay-21?v=3&s=60" width="60" height="60" alt="Akshay-21" /> | <a href="https://novu.co/contributors/Akshay-21" target="_blank" rel="noopener noreferrer">Akshay-21</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/ukmadlz?v=3&s=60" width="60" height="60" alt="ukmadlz" /> | <a href="https://novu.co/contributors/ukmadlz" target="_blank" rel="noopener noreferrer">ukmadlz</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Aadarsh805?v=3&s=60" width="60" height="60" alt="Aadarsh805" /> | <a href="https://novu.co/contributors/Aadarsh805" target="_blank" rel="noopener noreferrer">Aadarsh805</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/ShashwatAgrawal20?v=3&s=60" width="60" height="60" alt="ShashwatAgrawal20" /> | <a href="https://novu.co/contributors/ShashwatAgrawal20" target="_blank" rel="noopener noreferrer">ShashwatAgrawal20</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/whodges2?v=3&s=60" width="60" height="60" alt="whodges2" /> | <a href="https://novu.co/contributors/whodges2" target="_blank" rel="noopener noreferrer">whodges2</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/titenkov?v=3&s=60" width="60" height="60" alt="titenkov" /> | <a href="https://novu.co/contributors/titenkov" target="_blank" rel="noopener noreferrer">titenkov</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/KristofDeTroch?v=3&s=60" width="60" height="60" alt="KristofDeTroch" /> | <a href="https://novu.co/contributors/KristofDeTroch" target="_blank" rel="noopener noreferrer">KristofDeTroch</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/hodges12?v=3&s=60" width="60" height="60" alt="hodges12" /> | <a href="https://novu.co/contributors/hodges12" target="_blank" rel="noopener noreferrer">hodges12</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/wh1337?v=3&s=60" width="60" height="60" alt="wh1337" /> | <a href="https://novu.co/contributors/wh1337" target="_blank" rel="noopener noreferrer">wh1337</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/emotidev?v=3&s=60" width="60" height="60" alt="emotidev" /> | <a href="https://novu.co/contributors/emotidev" target="_blank" rel="noopener noreferrer">emotidev</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/gptkrsh?v=3&s=60" width="60" height="60" alt="gptkrsh" /> | <a href="https://novu.co/contributors/gptkrsh" target="_blank" rel="noopener noreferrer">gptkrsh</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/krshkodes?v=3&s=60" width="60" height="60" alt="krshkodes" /> | <a href="https://novu.co/contributors/krshkodes" target="_blank" rel="noopener noreferrer">krshkodes</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/PapuleX?v=3&s=60" width="60" height="60" alt="PapuleX" /> | <a href="https://novu.co/contributors/PapuleX" target="_blank" rel="noopener noreferrer">PapuleX</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/wouter-toppy?v=3&s=60" width="60" height="60" alt="wouter-toppy" /> | <a href="https://novu.co/contributors/wouter-toppy" target="_blank" rel="noopener noreferrer">wouter-toppy</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/roman-utila?v=3&s=60" width="60" height="60" alt="roman-utila" /> | <a href="https://novu.co/contributors/roman-utila" target="_blank" rel="noopener noreferrer">roman-utila</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/asparuhkostov?v=3&s=60" width="60" height="60" alt="asparuhkostov" /> | <a href="https://novu.co/contributors/asparuhkostov" target="_blank" rel="noopener noreferrer">asparuhkostov</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/deep-bhatt-pmc?v=3&s=60" width="60" height="60" alt="deep-bhatt-pmc" /> | <a href="https://novu.co/contributors/deep-bhatt-pmc" target="_blank" rel="noopener noreferrer">deep-bhatt-pmc</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/tienthanh2509?v=3&s=60" width="60" height="60" alt="tienthanh2509" /> | <a href="https://novu.co/contributors/tienthanh2509" target="_blank" rel="noopener noreferrer">tienthanh2509</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/tomcastro?v=3&s=60" width="60" height="60" alt="tomcastro" /> | <a href="https://novu.co/contributors/tomcastro" target="_blank" rel="noopener noreferrer">tomcastro</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/SKG2310?v=3&s=60" width="60" height="60" alt="SKG2310" /> | <a href="https://novu.co/contributors/SKG2310" target="_blank" rel="noopener noreferrer">SKG2310</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/ebimohi?v=3&s=60" width="60" height="60" alt="ebimohi" /> | <a href="https://novu.co/contributors/ebimohi" target="_blank" rel="noopener noreferrer">ebimohi</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/AvinashUtekar?v=3&s=60" width="60" height="60" alt="AvinashUtekar" /> | <a href="https://novu.co/contributors/AvinashUtekar" target="_blank" rel="noopener noreferrer">AvinashUtekar</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/adriantoro26?v=3&s=60" width="60" height="60" alt="adriantoro26" /> | <a href="https://novu.co/contributors/adriantoro26" target="_blank" rel="noopener noreferrer">adriantoro26</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/nick-w-nick?v=3&s=60" width="60" height="60" alt="nick-w-nick" /> | <a href="https://novu.co/contributors/nick-w-nick" target="_blank" rel="noopener noreferrer">nick-w-nick</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/szbartnik?v=3&s=60" width="60" height="60" alt="szbartnik" /> | <a href="https://novu.co/contributors/szbartnik" target="_blank" rel="noopener noreferrer">szbartnik</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/IoannisFlo?v=3&s=60" width="60" height="60" alt="IoannisFlo" /> | <a href="https://novu.co/contributors/IoannisFlo" target="_blank" rel="noopener noreferrer">IoannisFlo</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/amitanshusahu?v=3&s=60" width="60" height="60" alt="amitanshusahu" /> | <a href="https://novu.co/contributors/amitanshusahu" target="_blank" rel="noopener noreferrer">amitanshusahu</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/MD-Fleksa?v=3&s=60" width="60" height="60" alt="MD-Fleksa" /> | <a href="https://novu.co/contributors/MD-Fleksa" target="_blank" rel="noopener noreferrer">MD-Fleksa</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/palashbasik?v=3&s=60" width="60" height="60" alt="palashbasik" /> | <a href="https://novu.co/contributors/palashbasik" target="_blank" rel="noopener noreferrer">palashbasik</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/RtiM0?v=3&s=60" width="60" height="60" alt="RtiM0" /> | <a href="https://novu.co/contributors/RtiM0" target="_blank" rel="noopener noreferrer">RtiM0</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/ayush4345?v=3&s=60" width="60" height="60" alt="ayush4345" /> | <a href="https://novu.co/contributors/ayush4345" target="_blank" rel="noopener noreferrer">ayush4345</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/david-morris?v=3&s=60" width="60" height="60" alt="david-morris" /> | <a href="https://novu.co/contributors/david-morris" target="_blank" rel="noopener noreferrer">david-morris</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/raheelriax?v=3&s=60" width="60" height="60" alt="raheelriax" /> | <a href="https://novu.co/contributors/raheelriax" target="_blank" rel="noopener noreferrer">raheelriax</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/SergeiMeza?v=3&s=60" width="60" height="60" alt="SergeiMeza" /> | <a href="https://novu.co/contributors/SergeiMeza" target="_blank" rel="noopener noreferrer">SergeiMeza</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/donnguyen?v=3&s=60" width="60" height="60" alt="donnguyen" /> | <a href="https://novu.co/contributors/donnguyen" target="_blank" rel="noopener noreferrer">donnguyen</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/jensenbox?v=3&s=60" width="60" height="60" alt="jensenbox" /> | <a href="https://novu.co/contributors/jensenbox" target="_blank" rel="noopener noreferrer">jensenbox</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/dependabot[bot]?v=3&s=60" width="60" height="60" alt="dependabot[bot]" /> | <a href="https://novu.co/contributors/dependabot[bot]" target="_blank" rel="noopener noreferrer">dependabot[bot]</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/underfisk?v=3&s=60" width="60" height="60" alt="underfisk" /> | <a href="https://novu.co/contributors/underfisk" target="_blank" rel="noopener noreferrer">underfisk</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/simon-retsch?v=3&s=60" width="60" height="60" alt="simon-retsch" /> | <a href="https://novu.co/contributors/simon-retsch" target="_blank" rel="noopener noreferrer">simon-retsch</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/origranot?v=3&s=60" width="60" height="60" alt="origranot" /> | <a href="https://novu.co/contributors/origranot" target="_blank" rel="noopener noreferrer">origranot</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/PidginEnemy?v=3&s=60" width="60" height="60" alt="PidginEnemy" /> | <a href="https://novu.co/contributors/PidginEnemy" target="_blank" rel="noopener noreferrer">PidginEnemy</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/PritamSarbajna?v=3&s=60" width="60" height="60" alt="PritamSarbajna" /> | <a href="https://novu.co/contributors/PritamSarbajna" target="_blank" rel="noopener noreferrer">PritamSarbajna</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/AakashRaj20?v=3&s=60" width="60" height="60" alt="AakashRaj20" /> | <a href="https://novu.co/contributors/AakashRaj20" target="_blank" rel="noopener noreferrer">AakashRaj20</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/pgaijin66?v=3&s=60" width="60" height="60" alt="pgaijin66" /> | <a href="https://novu.co/contributors/pgaijin66" target="_blank" rel="noopener noreferrer">pgaijin66</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/wolfymaster?v=3&s=60" width="60" height="60" alt="wolfymaster" /> | <a href="https://novu.co/contributors/wolfymaster" target="_blank" rel="noopener noreferrer">wolfymaster</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/magnetomax?v=3&s=60" width="60" height="60" alt="magnetomax" /> | <a href="https://novu.co/contributors/magnetomax" target="_blank" rel="noopener noreferrer">magnetomax</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/fredsossa1?v=3&s=60" width="60" height="60" alt="fredsossa1" /> | <a href="https://novu.co/contributors/fredsossa1" target="_blank" rel="noopener noreferrer">fredsossa1</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/rockingrohit9639?v=3&s=60" width="60" height="60" alt="rockingrohit9639" /> | <a href="https://novu.co/contributors/rockingrohit9639" target="_blank" rel="noopener noreferrer">rockingrohit9639</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/abhinavsaurav?v=3&s=60" width="60" height="60" alt="abhinavsaurav" /> | <a href="https://novu.co/contributors/abhinavsaurav" target="_blank" rel="noopener noreferrer">abhinavsaurav</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/adarshajit?v=3&s=60" width="60" height="60" alt="adarshajit" /> | <a href="https://novu.co/contributors/adarshajit" target="_blank" rel="noopener noreferrer">adarshajit</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/sachinsom93?v=3&s=60" width="60" height="60" alt="sachinsom93" /> | <a href="https://novu.co/contributors/sachinsom93" target="_blank" rel="noopener noreferrer">sachinsom93</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Zed93?v=3&s=60" width="60" height="60" alt="Zed93" /> | <a href="https://novu.co/contributors/Zed93" target="_blank" rel="noopener noreferrer">Zed93</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/thisaakash?v=3&s=60" width="60" height="60" alt="thisaakash" /> | <a href="https://novu.co/contributors/thisaakash" target="_blank" rel="noopener noreferrer">thisaakash</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/ArshErgon?v=3&s=60" width="60" height="60" alt="ArshErgon" /> | <a href="https://novu.co/contributors/ArshErgon" target="_blank" rel="noopener noreferrer">ArshErgon</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/dha-stix?v=3&s=60" width="60" height="60" alt="dha-stix" /> | <a href="https://novu.co/contributors/dha-stix" target="_blank" rel="noopener noreferrer">dha-stix</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/josephjosedev?v=3&s=60" width="60" height="60" alt="josephjosedev" /> | <a href="https://novu.co/contributors/josephjosedev" target="_blank" rel="noopener noreferrer">josephjosedev</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/EmiliyaGrossman?v=3&s=60" width="60" height="60" alt="EmiliyaGrossman" /> | <a href="https://novu.co/contributors/EmiliyaGrossman" target="_blank" rel="noopener noreferrer">EmiliyaGrossman</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/dcbartlett-fadv?v=3&s=60" width="60" height="60" alt="dcbartlett-fadv" /> | <a href="https://novu.co/contributors/dcbartlett-fadv" target="_blank" rel="noopener noreferrer">dcbartlett-fadv</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/KarlGusta?v=3&s=60" width="60" height="60" alt="KarlGusta" /> | <a href="https://novu.co/contributors/KarlGusta" target="_blank" rel="noopener noreferrer">KarlGusta</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/souravjain540?v=3&s=60" width="60" height="60" alt="souravjain540" /> | <a href="https://novu.co/contributors/souravjain540" target="_blank" rel="noopener noreferrer">souravjain540</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/tusharsrivastav?v=3&s=60" width="60" height="60" alt="tusharsrivastav" /> | <a href="https://novu.co/contributors/tusharsrivastav" target="_blank" rel="noopener noreferrer">tusharsrivastav</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/williamsgqdev?v=3&s=60" width="60" height="60" alt="williamsgqdev" /> | <a href="https://novu.co/contributors/williamsgqdev" target="_blank" rel="noopener noreferrer">williamsgqdev</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/SaschaWebDev?v=3&s=60" width="60" height="60" alt="SaschaWebDev" /> | <a href="https://novu.co/contributors/SaschaWebDev" target="_blank" rel="noopener noreferrer">SaschaWebDev</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/TexasBullet26?v=3&s=60" width="60" height="60" alt="TexasBullet26" /> | <a href="https://novu.co/contributors/TexasBullet26" target="_blank" rel="noopener noreferrer">TexasBullet26</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/joaomarcoscrs?v=3&s=60" width="60" height="60" alt="joaomarcoscrs" /> | <a href="https://novu.co/contributors/joaomarcoscrs" target="_blank" rel="noopener noreferrer">joaomarcoscrs</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Scrip7?v=3&s=60" width="60" height="60" alt="Scrip7" /> | <a href="https://novu.co/contributors/Scrip7" target="_blank" rel="noopener noreferrer">Scrip7</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/osbornetunde?v=3&s=60" width="60" height="60" alt="osbornetunde" /> | <a href="https://novu.co/contributors/osbornetunde" target="_blank" rel="noopener noreferrer">osbornetunde</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/cloudguruab?v=3&s=60" width="60" height="60" alt="cloudguruab" /> | <a href="https://novu.co/contributors/cloudguruab" target="_blank" rel="noopener noreferrer">cloudguruab</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/l0ne?v=3&s=60" width="60" height="60" alt="l0ne" /> | <a href="https://novu.co/contributors/l0ne" target="_blank" rel="noopener noreferrer">l0ne</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/timgates42?v=3&s=60" width="60" height="60" alt="timgates42" /> | <a href="https://novu.co/contributors/timgates42" target="_blank" rel="noopener noreferrer">timgates42</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/chasmfiend?v=3&s=60" width="60" height="60" alt="chasmfiend" /> | <a href="https://novu.co/contributors/chasmfiend" target="_blank" rel="noopener noreferrer">chasmfiend</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/tonytangdev?v=3&s=60" width="60" height="60" alt="tonytangdev" /> | <a href="https://novu.co/contributors/tonytangdev" target="_blank" rel="noopener noreferrer">tonytangdev</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/ulentini?v=3&s=60" width="60" height="60" alt="ulentini" /> | <a href="https://novu.co/contributors/ulentini" target="_blank" rel="noopener noreferrer">ulentini</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/RobiMez?v=3&s=60" width="60" height="60" alt="RobiMez" /> | <a href="https://novu.co/contributors/RobiMez" target="_blank" rel="noopener noreferrer">RobiMez</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/L8Y?v=3&s=60" width="60" height="60" alt="L8Y" /> | <a href="https://novu.co/contributors/L8Y" target="_blank" rel="noopener noreferrer">L8Y</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/artfuldev?v=3&s=60" width="60" height="60" alt="artfuldev" /> | <a href="https://novu.co/contributors/artfuldev" target="_blank" rel="noopener noreferrer">artfuldev</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/painotpi?v=3&s=60" width="60" height="60" alt="painotpi" /> | <a href="https://novu.co/contributors/painotpi" target="_blank" rel="noopener noreferrer">painotpi</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Xenfo?v=3&s=60" width="60" height="60" alt="Xenfo" /> | <a href="https://novu.co/contributors/Xenfo" target="_blank" rel="noopener noreferrer">Xenfo</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/crismxiex?v=3&s=60" width="60" height="60" alt="crismxiex" /> | <a href="https://novu.co/contributors/crismxiex" target="_blank" rel="noopener noreferrer">crismxiex</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/matthiez?v=3&s=60" width="60" height="60" alt="matthiez" /> | <a href="https://novu.co/contributors/matthiez" target="_blank" rel="noopener noreferrer">matthiez</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/wheredidhugo?v=3&s=60" width="60" height="60" alt="wheredidhugo" /> | <a href="https://novu.co/contributors/wheredidhugo" target="_blank" rel="noopener noreferrer">wheredidhugo</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/bolotskydev?v=3&s=60" width="60" height="60" alt="bolotskydev" /> | <a href="https://novu.co/contributors/bolotskydev" target="_blank" rel="noopener noreferrer">bolotskydev</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/asgeirf?v=3&s=60" width="60" height="60" alt="asgeirf" /> | <a href="https://novu.co/contributors/asgeirf" target="_blank" rel="noopener noreferrer">asgeirf</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/samaranand?v=3&s=60" width="60" height="60" alt="samaranand" /> | <a href="https://novu.co/contributors/samaranand" target="_blank" rel="noopener noreferrer">samaranand</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/eddiejaoude?v=3&s=60" width="60" height="60" alt="eddiejaoude" /> | <a href="https://novu.co/contributors/eddiejaoude" target="_blank" rel="noopener noreferrer">eddiejaoude</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/mrajen27?v=3&s=60" width="60" height="60" alt="mrajen27" /> | <a href="https://novu.co/contributors/mrajen27" target="_blank" rel="noopener noreferrer">mrajen27</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/wpoynter?v=3&s=60" width="60" height="60" alt="wpoynter" /> | <a href="https://novu.co/contributors/wpoynter" target="_blank" rel="noopener noreferrer">wpoynter</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/AmanNegi?v=3&s=60" width="60" height="60" alt="AmanNegi" /> | <a href="https://novu.co/contributors/AmanNegi" target="_blank" rel="noopener noreferrer">AmanNegi</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/miles170?v=3&s=60" width="60" height="60" alt="miles170" /> | <a href="https://novu.co/contributors/miles170" target="_blank" rel="noopener noreferrer">miles170</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/guywal?v=3&s=60" width="60" height="60" alt="guywal" /> | <a href="https://novu.co/contributors/guywal" target="_blank" rel="noopener noreferrer">guywal</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/kinson?v=3&s=60" width="60" height="60" alt="kinson" /> | <a href="https://novu.co/contributors/kinson" target="_blank" rel="noopener noreferrer">kinson</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/dcamarasa?v=3&s=60" width="60" height="60" alt="dcamarasa" /> | <a href="https://novu.co/contributors/dcamarasa" target="_blank" rel="noopener noreferrer">dcamarasa</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/matigumma?v=3&s=60" width="60" height="60" alt="matigumma" /> | <a href="https://novu.co/contributors/matigumma" target="_blank" rel="noopener noreferrer">matigumma</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/DanishOnGit?v=3&s=60" width="60" height="60" alt="DanishOnGit" /> | <a href="https://novu.co/contributors/DanishOnGit" target="_blank" rel="noopener noreferrer">DanishOnGit</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/saby22?v=3&s=60" width="60" height="60" alt="saby22" /> | <a href="https://novu.co/contributors/saby22" target="_blank" rel="noopener noreferrer">saby22</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/LucasLeandroBR?v=3&s=60" width="60" height="60" alt="LucasLeandroBR" /> | <a href="https://novu.co/contributors/LucasLeandroBR" target="_blank" rel="noopener noreferrer">LucasLeandroBR</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/stanulilic?v=3&s=60" width="60" height="60" alt="stanulilic" /> | <a href="https://novu.co/contributors/stanulilic" target="_blank" rel="noopener noreferrer">stanulilic</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/thomasbnt?v=3&s=60" width="60" height="60" alt="thomasbnt" /> | <a href="https://novu.co/contributors/thomasbnt" target="_blank" rel="noopener noreferrer">thomasbnt</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/vivian-dai?v=3&s=60" width="60" height="60" alt="vivian-dai" /> | <a href="https://novu.co/contributors/vivian-dai" target="_blank" rel="noopener noreferrer">vivian-dai</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/ozanuslan?v=3&s=60" width="60" height="60" alt="ozanuslan" /> | <a href="https://novu.co/contributors/ozanuslan" target="_blank" rel="noopener noreferrer">ozanuslan</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/yk-jp?v=3&s=60" width="60" height="60" alt="yk-jp" /> | <a href="https://novu.co/contributors/yk-jp" target="_blank" rel="noopener noreferrer">yk-jp</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/vanyaxk?v=3&s=60" width="60" height="60" alt="vanyaxk" /> | <a href="https://novu.co/contributors/vanyaxk" target="_blank" rel="noopener noreferrer">vanyaxk</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/VasuDevrani?v=3&s=60" width="60" height="60" alt="VasuDevrani" /> | <a href="https://novu.co/contributors/VasuDevrani" target="_blank" rel="noopener noreferrer">VasuDevrani</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Artemis6969?v=3&s=60" width="60" height="60" alt="Artemis6969" /> | <a href="https://novu.co/contributors/Artemis6969" target="_blank" rel="noopener noreferrer">Artemis6969</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/AshishSharma1203?v=3&s=60" width="60" height="60" alt="AshishSharma1203" /> | <a href="https://novu.co/contributors/AshishSharma1203" target="_blank" rel="noopener noreferrer">AshishSharma1203</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/aguywithnojob?v=3&s=60" width="60" height="60" alt="aguywithnojob" /> | <a href="https://novu.co/contributors/aguywithnojob" target="_blank" rel="noopener noreferrer">aguywithnojob</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/sebastiaanviaene?v=3&s=60" width="60" height="60" alt="sebastiaanviaene" /> | <a href="https://novu.co/contributors/sebastiaanviaene" target="_blank" rel="noopener noreferrer">sebastiaanviaene</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/psteinroe?v=3&s=60" width="60" height="60" alt="psteinroe" /> | <a href="https://novu.co/contributors/psteinroe" target="_blank" rel="noopener noreferrer">psteinroe</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Predeactor?v=3&s=60" width="60" height="60" alt="Predeactor" /> | <a href="https://novu.co/contributors/Predeactor" target="_blank" rel="noopener noreferrer">Predeactor</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/olinabin2004?v=3&s=60" width="60" height="60" alt="olinabin2004" /> | <a href="https://novu.co/contributors/olinabin2004" target="_blank" rel="noopener noreferrer">olinabin2004</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Rounak-28?v=3&s=60" width="60" height="60" alt="Rounak-28" /> | <a href="https://novu.co/contributors/Rounak-28" target="_blank" rel="noopener noreferrer">Rounak-28</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/emhng?v=3&s=60" width="60" height="60" alt="emhng" /> | <a href="https://novu.co/contributors/emhng" target="_blank" rel="noopener noreferrer">emhng</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/ManishModak?v=3&s=60" width="60" height="60" alt="ManishModak" /> | <a href="https://novu.co/contributors/ManishModak" target="_blank" rel="noopener noreferrer">ManishModak</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Dilshan-H?v=3&s=60" width="60" height="60" alt="Dilshan-H" /> | <a href="https://novu.co/contributors/Dilshan-H" target="_blank" rel="noopener noreferrer">Dilshan-H</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/nickprinsloo?v=3&s=60" width="60" height="60" alt="nickprinsloo" /> | <a href="https://novu.co/contributors/nickprinsloo" target="_blank" rel="noopener noreferrer">nickprinsloo</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/og118?v=3&s=60" width="60" height="60" alt="og118" /> | <a href="https://novu.co/contributors/og118" target="_blank" rel="noopener noreferrer">og118</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/shashankbhatgs?v=3&s=60" width="60" height="60" alt="shashankbhatgs" /> | <a href="https://novu.co/contributors/shashankbhatgs" target="_blank" rel="noopener noreferrer">shashankbhatgs</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/munyoudoum?v=3&s=60" width="60" height="60" alt="munyoudoum" /> | <a href="https://novu.co/contributors/munyoudoum" target="_blank" rel="noopener noreferrer">munyoudoum</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Sen-442b?v=3&s=60" width="60" height="60" alt="Sen-442b" /> | <a href="https://novu.co/contributors/Sen-442b" target="_blank" rel="noopener noreferrer">Sen-442b</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/jsoref?v=3&s=60" width="60" height="60" alt="jsoref" /> | <a href="https://novu.co/contributors/jsoref" target="_blank" rel="noopener noreferrer">jsoref</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/maglionaire?v=3&s=60" width="60" height="60" alt="maglionaire" /> | <a href="https://novu.co/contributors/maglionaire" target="_blank" rel="noopener noreferrer">maglionaire</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Srikarmk?v=3&s=60" width="60" height="60" alt="Srikarmk" /> | <a href="https://novu.co/contributors/Srikarmk" target="_blank" rel="noopener noreferrer">Srikarmk</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Aditya-Kapadiya?v=3&s=60" width="60" height="60" alt="Aditya-Kapadiya" /> | <a href="https://novu.co/contributors/Aditya-Kapadiya" target="_blank" rel="noopener noreferrer">Aditya-Kapadiya</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/harshagrawal523?v=3&s=60" width="60" height="60" alt="harshagrawal523" /> | <a href="https://novu.co/contributors/harshagrawal523" target="_blank" rel="noopener noreferrer">harshagrawal523</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/PalashDhabale?v=3&s=60" width="60" height="60" alt="PalashDhabale" /> | <a href="https://novu.co/contributors/PalashDhabale" target="_blank" rel="noopener noreferrer">PalashDhabale</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/soundarrajan-official?v=3&s=60" width="60" height="60" alt="soundarrajan-official" /> | <a href="https://novu.co/contributors/soundarrajan-official" target="_blank" rel="noopener noreferrer">soundarrajan-official</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/ranodeepbanerjee?v=3&s=60" width="60" height="60" alt="ranodeepbanerjee" /> | <a href="https://novu.co/contributors/ranodeepbanerjee" target="_blank" rel="noopener noreferrer">ranodeepbanerjee</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/CursedRock17?v=3&s=60" width="60" height="60" alt="CursedRock17" /> | <a href="https://novu.co/contributors/CursedRock17" target="_blank" rel="noopener noreferrer">CursedRock17</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/furtidev?v=3&s=60" width="60" height="60" alt="furtidev" /> | <a href="https://novu.co/contributors/furtidev" target="_blank" rel="noopener noreferrer">furtidev</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/L-U-C-K-Y?v=3&s=60" width="60" height="60" alt="L-U-C-K-Y" /> | <a href="https://novu.co/contributors/L-U-C-K-Y" target="_blank" rel="noopener noreferrer">L-U-C-K-Y</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/hitblast?v=3&s=60" width="60" height="60" alt="hitblast" /> | <a href="https://novu.co/contributors/hitblast" target="_blank" rel="noopener noreferrer">hitblast</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/priyanshkulshrestha?v=3&s=60" width="60" height="60" alt="priyanshkulshrestha" /> | <a href="https://novu.co/contributors/priyanshkulshrestha" target="_blank" rel="noopener noreferrer">priyanshkulshrestha</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/akarsh-jain-790?v=3&s=60" width="60" height="60" alt="akarsh-jain-790" /> | <a href="https://novu.co/contributors/akarsh-jain-790" target="_blank" rel="noopener noreferrer">akarsh-jain-790</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Sreevidya181?v=3&s=60" width="60" height="60" alt="Sreevidya181" /> | <a href="https://novu.co/contributors/Sreevidya181" target="_blank" rel="noopener noreferrer">Sreevidya181</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/tanishk-23?v=3&s=60" width="60" height="60" alt="tanishk-23" /> | <a href="https://novu.co/contributors/tanishk-23" target="_blank" rel="noopener noreferrer">tanishk-23</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Ian-Yy?v=3&s=60" width="60" height="60" alt="Ian-Yy" /> | <a href="https://novu.co/contributors/Ian-Yy" target="_blank" rel="noopener noreferrer">Ian-Yy</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Astrodevil?v=3&s=60" width="60" height="60" alt="Astrodevil" /> | <a href="https://novu.co/contributors/Astrodevil" target="_blank" rel="noopener noreferrer">Astrodevil</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/tuanlc?v=3&s=60" width="60" height="60" alt="tuanlc" /> | <a href="https://novu.co/contributors/tuanlc" target="_blank" rel="noopener noreferrer">tuanlc</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/MuzzammilRafiq?v=3&s=60" width="60" height="60" alt="MuzzammilRafiq" /> | <a href="https://novu.co/contributors/MuzzammilRafiq" target="_blank" rel="noopener noreferrer">MuzzammilRafiq</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/chaiwattsw?v=3&s=60" width="60" height="60" alt="chaiwattsw" /> | <a href="https://novu.co/contributors/chaiwattsw" target="_blank" rel="noopener noreferrer">chaiwattsw</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/devXprite?v=3&s=60" width="60" height="60" alt="devXprite" /> | <a href="https://novu.co/contributors/devXprite" target="_blank" rel="noopener noreferrer">devXprite</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/myshri123?v=3&s=60" width="60" height="60" alt="myshri123" /> | <a href="https://novu.co/contributors/myshri123" target="_blank" rel="noopener noreferrer">myshri123</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/eltociear?v=3&s=60" width="60" height="60" alt="eltociear" /> | <a href="https://novu.co/contributors/eltociear" target="_blank" rel="noopener noreferrer">eltociear</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/tomasbranda?v=3&s=60" width="60" height="60" alt="tomasbranda" /> | <a href="https://novu.co/contributors/tomasbranda" target="_blank" rel="noopener noreferrer">tomasbranda</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/cuitlazotlac?v=3&s=60" width="60" height="60" alt="cuitlazotlac" /> | <a href="https://novu.co/contributors/cuitlazotlac" target="_blank" rel="noopener noreferrer">cuitlazotlac</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/rameshwaghmare123?v=3&s=60" width="60" height="60" alt="rameshwaghmare123" /> | <a href="https://novu.co/contributors/rameshwaghmare123" target="_blank" rel="noopener noreferrer">rameshwaghmare123</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/ljobse?v=3&s=60" width="60" height="60" alt="ljobse" /> | <a href="https://novu.co/contributors/ljobse" target="_blank" rel="noopener noreferrer">ljobse</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Kritika30032002?v=3&s=60" width="60" height="60" alt="Kritika30032002" /> | <a href="https://novu.co/contributors/Kritika30032002" target="_blank" rel="noopener noreferrer">Kritika30032002</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/iqrafirdose?v=3&s=60" width="60" height="60" alt="iqrafirdose" /> | <a href="https://novu.co/contributors/iqrafirdose" target="_blank" rel="noopener noreferrer">iqrafirdose</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/sofferjacob?v=3&s=60" width="60" height="60" alt="sofferjacob" /> | <a href="https://novu.co/contributors/sofferjacob" target="_blank" rel="noopener noreferrer">sofferjacob</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/johnnyreilly?v=3&s=60" width="60" height="60" alt="johnnyreilly" /> | <a href="https://novu.co/contributors/johnnyreilly" target="_blank" rel="noopener noreferrer">johnnyreilly</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/amarkmcconn?v=3&s=60" width="60" height="60" alt="amarkmcconn" /> | <a href="https://novu.co/contributors/amarkmcconn" target="_blank" rel="noopener noreferrer">amarkmcconn</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Swahjak?v=3&s=60" width="60" height="60" alt="Swahjak" /> | <a href="https://novu.co/contributors/Swahjak" target="_blank" rel="noopener noreferrer">Swahjak</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/ducdung8491?v=3&s=60" width="60" height="60" alt="ducdung8491" /> | <a href="https://novu.co/contributors/ducdung8491" target="_blank" rel="noopener noreferrer">ducdung8491</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/dlmcauslan?v=3&s=60" width="60" height="60" alt="dlmcauslan" /> | <a href="https://novu.co/contributors/dlmcauslan" target="_blank" rel="noopener noreferrer">dlmcauslan</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/riginoommen?v=3&s=60" width="60" height="60" alt="riginoommen" /> | <a href="https://novu.co/contributors/riginoommen" target="_blank" rel="noopener noreferrer">riginoommen</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/vinhnguyen1211?v=3&s=60" width="60" height="60" alt="vinhnguyen1211" /> | <a href="https://novu.co/contributors/vinhnguyen1211" target="_blank" rel="noopener noreferrer">vinhnguyen1211</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/viktorlarsson?v=3&s=60" width="60" height="60" alt="viktorlarsson" /> | <a href="https://novu.co/contributors/viktorlarsson" target="_blank" rel="noopener noreferrer">viktorlarsson</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/ttlgeek?v=3&s=60" width="60" height="60" alt="ttlgeek" /> | <a href="https://novu.co/contributors/ttlgeek" target="_blank" rel="noopener noreferrer">ttlgeek</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/ArturHamannRonconi?v=3&s=60" width="60" height="60" alt="ArturHamannRonconi" /> | <a href="https://novu.co/contributors/ArturHamannRonconi" target="_blank" rel="noopener noreferrer">ArturHamannRonconi</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/achadha235?v=3&s=60" width="60" height="60" alt="achadha235" /> | <a href="https://novu.co/contributors/achadha235" target="_blank" rel="noopener noreferrer">achadha235</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/jacobwgillespie?v=3&s=60" width="60" height="60" alt="jacobwgillespie" /> | <a href="https://novu.co/contributors/jacobwgillespie" target="_blank" rel="noopener noreferrer">jacobwgillespie</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/caiopiassali?v=3&s=60" width="60" height="60" alt="caiopiassali" /> | <a href="https://novu.co/contributors/caiopiassali" target="_blank" rel="noopener noreferrer">caiopiassali</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/ilteoood?v=3&s=60" width="60" height="60" alt="ilteoood" /> | <a href="https://novu.co/contributors/ilteoood" target="_blank" rel="noopener noreferrer">ilteoood</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/paolapog?v=3&s=60" width="60" height="60" alt="paolapog" /> | <a href="https://novu.co/contributors/paolapog" target="_blank" rel="noopener noreferrer">paolapog</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/isurumaldeniya?v=3&s=60" width="60" height="60" alt="isurumaldeniya" /> | <a href="https://novu.co/contributors/isurumaldeniya" target="_blank" rel="noopener noreferrer">isurumaldeniya</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/vishnu-kyatannawar?v=3&s=60" width="60" height="60" alt="vishnu-kyatannawar" /> | <a href="https://novu.co/contributors/vishnu-kyatannawar" target="_blank" rel="noopener noreferrer">vishnu-kyatannawar</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/codesee-maps[bot]?v=3&s=60" width="60" height="60" alt="codesee-maps[bot]" /> | <a href="https://novu.co/contributors/codesee-maps[bot]" target="_blank" rel="noopener noreferrer">codesee-maps[bot]</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Agathe-Brusset?v=3&s=60" width="60" height="60" alt="Agathe-Brusset" /> | <a href="https://novu.co/contributors/Agathe-Brusset" target="_blank" rel="noopener noreferrer">Agathe-Brusset</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/RobertoCassino?v=3&s=60" width="60" height="60" alt="RobertoCassino" /> | <a href="https://novu.co/contributors/RobertoCassino" target="_blank" rel="noopener noreferrer">RobertoCassino</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Codepowercode?v=3&s=60" width="60" height="60" alt="Codepowercode" /> | <a href="https://novu.co/contributors/Codepowercode" target="_blank" rel="noopener noreferrer">Codepowercode</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/chauandrew?v=3&s=60" width="60" height="60" alt="chauandrew" /> | <a href="https://novu.co/contributors/chauandrew" target="_blank" rel="noopener noreferrer">chauandrew</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/kylegalbraith?v=3&s=60" width="60" height="60" alt="kylegalbraith" /> | <a href="https://novu.co/contributors/kylegalbraith" target="_blank" rel="noopener noreferrer">kylegalbraith</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Ananya2001-an?v=3&s=60" width="60" height="60" alt="Ananya2001-an" /> | <a href="https://novu.co/contributors/Ananya2001-an" target="_blank" rel="noopener noreferrer">Ananya2001-an</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/ghost?v=3&s=60" width="60" height="60" alt="ghost" /> | <a href="https://novu.co/contributors/ghost" target="_blank" rel="noopener noreferrer">ghost</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/precs-jmcrs?v=3&s=60" width="60" height="60" alt="precs-jmcrs" /> | <a href="https://novu.co/contributors/precs-jmcrs" target="_blank" rel="noopener noreferrer">precs-jmcrs</a> | Bronze Medal |
| <img src="https://avatars.githubusercontent.com/Guyonsteroids?v=3&s=60" width="60" height="60" alt="Guyonsteroids" /> | <a href="https://novu.co/contributors/Guyonsteroids" target="_blank" rel="noopener noreferrer">Guyonsteroids</a> | Bronze Medal |
