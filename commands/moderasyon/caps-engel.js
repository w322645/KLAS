const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../../config.json')
//message
exports.run = async (client, message, args) => {
    var e = db.fetch(`prefix_${message.guild.id}`)
    if(e){
      var p = e
    }
    if(!e){
      var p = "?"
    }
    
   if (!args[0]) {
 message.channel.send(`**Örnek Kullanım:** ${p}capslock-engel aç/kapat`)
  }

  if(args[0] === 'aç') {
    db.set(`capslock_${message.guild.id}`, true)
    message.channel.send(`Capslock Engel Sistemi Aktif`)
  return
}

if (args[0] === 'kapat') {
  db.delete(`capslock_${message.guild.id}`)
message.channel.send(`Capslock Engel Sistemi Devre Dışı`)
return
}

  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['capsengel'],
  permLevel: 2
};
exports.help = {
  name: 'capslock-engel',
  description: 'capsengel',
  usage: 'capsengel'
};