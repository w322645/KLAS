const Discord = require("discord.js");
const qdb = require('quick.db');

exports.run = (client, msg, args) => {
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