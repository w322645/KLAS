const Discord = require('discord.js');

exports.run = async(client, msg, args) => {
if (msg.channel.type !== "text") return;
  
const limit = args[0];
  
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription(`Yazma sınırını (süresini) kaç saniye olarak ayarlamak istediğinizi yazınız!`)
              .setColor("#36393f")
            msg.channel.send({embed: embed})
            return
          }
  
if (isNaN(limit)) {
  var s = new Discord.MessageEmbed()
  .setDescription("Yazma sınırını (süresini) kaç saniye olarak ayarlamak istediğinizi yazınız!")
  .setColor("#36393f")
  msg.channel.send({embed: s});
    return
}
  
if (limit > 120) {
  var x = new Discord.MessageEmbed()
  .setDescription("Yazma sınırı (süresi) limiti maksimum **120** saniye olabilir!")
  .setColor("#36393f")
  msg.channel.send({embed: x});
    return
}
    var e = new Discord.MessageEmbed()
    .setDescription(`Yazma sınırı (süresi) başarıyla **${limit}** saniye olarak ayarlanmıştır!`)
    .setThumbnail(`https://dummyimage.com/140x140/2f3136f/f2f2f2&text=Saniye%20${limit}`)
    .setColor("#36393f")
    msg.channel.send({embed: e})
  
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${msg.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
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