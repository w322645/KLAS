const Discord = require("discord.js");
const db = require("quick.db");
  const talkedRecently = new Set();
exports.run = async (client, message, args) => {



 if (talkedRecently.has(message.author.id)) {
           return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setTitle('UYARI !').setDescription(`\`5\` Saniye de Bir Kullanabilirsin - <@!${message.author.id}>`))
     .then(x => {x.delete({timeout: 3000})})
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
    }
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      "Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın"
    );

  let kanal = message.mentions.channels.first();
  if (message.content === '?ban-log') {
    message.react('814284144632397845'); // buraya istediğiniz emojinin ID'sini girin
}
  if (!kanal)
    return message.channel.send("```diff\n - BİR KANAL BELİRTMELİSİN\n```");

  db.set(`banlog_${message.guild.id}`, kanal.id);

  return message.channel.send(
    `Ban log kanalı <#${kanal.id}> Olarak ayarlandı!`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 0
};

exports.help = {
  name: "ban-log"
};
