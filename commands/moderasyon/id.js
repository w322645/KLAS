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
  if (!message.member.hasPermission("MANAGE_NICKNAMES"))
    return message.channel.send(
      "❌ Üzgünüz, Kullanıcı İsimlerini Yönet yetkisine sahip değilsiniz.."
    );
  let kişi = message.mentions.members.first() || message.author;
  message.channel.send(
    `**İstediğiniz Kişinin ID Numarası:** ||**${kişi.id}**||`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["id"],
  permlevel: 0
};

exports.help = {
  name: "id",
  description: "Birisinin İD Sini Alırsınız",
  usage: "!id"
};
