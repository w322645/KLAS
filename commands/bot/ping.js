const Discord = require("discord.js");
const data = require("quick.db");
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
   if (talkedRecently.has(message.author.id)) {
           return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setTitle('UYARI !').setDescription(`\`5\` Saniye de Bir Kullanabilirsin - <@!${message.author.id}>`))
     .then(x => {x.delete({timeout: 3000})})
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }

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
