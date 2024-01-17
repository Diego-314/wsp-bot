const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const client = new Client({
  puppeteer: {
    args: ["--no-sandbox"],
  },
  authStrategy: new LocalAuth({
    dataPath: "sesiones",
  }),
});

client.on("qr", (qr) => {
  qrcode.generate(qr);
});

client.on("ready", () => {
  console.log("¡El bot está funcionando correctamente!");
});

client.on("message", async (msg) => {
  msg.body = msg.body.toLowerCase();
  if (
    msg.body == "ballena" ||
    msg.body == "🦈🐋" ||
    msg.body == "🐋" ||
    msg.body == "ballenaa" ||
    msg.body == "ballenaaa"
  ) {
    msg.reply(
      "OMGOMGOMGOMG 9mh BALKENAAAAA SUOER BALKENA TIBURON VALLENA IMH NO 0UEDO CREERLO ES UN TIBURON BALLENA OOOUMAGAAAAAAA I CANT BELIEVE IT UTS AMAZING I LOVE YOU SO MUCH 😘😘😚😘😚😘😚😚😘😘😘😚😘😘😚😚😘🦈🐋🦈🐋🦈🐋"
    );
  }
  if (msg.body === "@everyone") {
    const chat = await msg.getChat();

    let text = "";
    let mentions = [];

    msg.reply("Enviando...");

    for (let participant of chat.participants) {
      mentions.push(`${participant.id.user}@c.us`);
      text += `@${participant.id.user} `;
    }

    await chat.sendMessage(text, { mentions });
  }
});

client.initialize();
