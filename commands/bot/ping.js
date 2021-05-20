const Discord = require("discord.js");
const data = require("quick.db");

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  };
  message.channel
    .send(
      new Discord.MessageEmbed()
        .setColor("#36393f")
        .setDescription(
          `${message.author} **Ping Hesaplanıyor... <a:ttnet:764635922917621791>**`
        )
    )
    .then(m => {
      setTimeout(() => {
        m.edit(
          new Discord.MessageEmbed()
            .setColor("#36393f")
            .addField(
              "**__Gecikme Sürem__**",
              `<a:7879_sinal:814581717553381398> **${client.ws.ping}** ms Olarak Hesaplandı.`,
              true
            )
        );
      }, 7500);
    });
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["p", "ms", "geçikme"],
  permLevel: 0
};

exports.help = {
  name: "ping"
};
