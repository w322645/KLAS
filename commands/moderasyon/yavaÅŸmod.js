const Discord = require("discord.js");
const qdb = require('quick.db');
  const talkedRecently = new Set();
exports.run = (client, msg, args) => {


 if (talkedRecently.has(msg.author.id)) {
           return msg.channel.send(new Discord.MessageEmbed().setColor('#36393f').setTitle('UYARI !').setDescription(`\`5\` Saniye de Bir Kullanabilirsin - <@!${msg.author.id}>`))
     .then(x => {x.delete({timeout: 3000})})
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
       msg.delete();
          // Removes the user from the set after a minute
          talkedRecently.delete(msg.author.id);
        }, 5000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }
    var e = qdb.fetch(`prefix_${msg.guild.id}`);
  if (e) {
    var prefix = e;
  }
  if (!e) {
    var prefix = "?";
  }
if (msg.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
if (limit > 120) return msg.channel.send("Süre Limiti Maksimum 120 Saniye Olabilir.");
var request = require('request');
request({
    url: `https://discordapp.com/api/v6/channels/${msg.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
});

if (limit == 0) return msg.channel.send(`Yavaşmod Kaldırıldı :ok_hand: \nTekrar Açabilmek İçin ${prefix}yavaşmod **<kaç saniye aralıkla yazılsın>**`);
return msg.channel.send(`Üyeler Bundan Sonra **${limit}** Saniye Aralıklarla Mesaj Gönderebilecek.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yavaş"],
  permLevel: 1
};

exports.help = {
  name: 'yavaşmod',
  description: 'İstediğiniz Odada Aralıklı Konuşma Ayarlar',
  usage: 'yavaşmod'
};