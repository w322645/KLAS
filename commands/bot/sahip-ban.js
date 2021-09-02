const Discord = require("discord.js");
const db = require("quick.db");
  const talkedRecently = new Set();
exports.run = async (client, message, args) => {


if(!message.author.id === "758672982146809867") return message.reply("bunu sadece sahibim kullanabilir")
    return message.channel.send("BAN Yetkisine sahip değilsin.");

  let user = message.mentions.users.first();
  let sebep = args.slice(1).join(" ") || "Belirtilmemiş.";
  if (!user) return message.channel.send(" ``Bir kişi etiketlemelisin.``");
  if (user.id === message.author.id)
    return message.channel.send(" ``Kendini banlayamazsın.``");
  if (user.id === client.user.id)
    return message.channel.send(" ``Botu banlayamazsın.``");
  if (user.id === message.guild.ownerID)
    return message.channel.send(" ``Sunucu sahibini banlayamazsın.``");
  if (!message.guild.member(user).bannable)
    return message.reply(
      "``Bu kişinin rolü senden üstte veya `Üyeleri yasakla` yetkisine sahip.``"
    );

  message.channel
    .send(
      "<@" +
        user.id +
        "> Kişisini **" +
        sebep +
        "** Sebebiyle banlamak istediğine eminmisin ? <a:4225_ban_button:814532928863731733>"
    )
    .then(async m => {
      m.react("✅").then(r => {
        const tamam = (reaction, user) =>
          reaction.emoji.name == "✅" && user.id == message.author.id;
        const tamam2 = m.createReactionCollector(tamam);

        tamam2.on("collect", async r => {
          message.guild.members.cache.get(user.id).ban({
            reason: `${sebep}`
          });
        });
      });
      await m.react("❌").then(r => {
        const tamam = (reaction, user) =>
          reaction.emoji.name == "❌" && user.id == message.author.id;
        const tamam2 = m.createReactionCollector(tamam);

        tamam2.on("collect", async r => {
          m.delete();
          message.channel.send("Banlama işlemi iptal edildi.");
        });
      });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 4
};

exports.help = {
  name: "ban"
};
