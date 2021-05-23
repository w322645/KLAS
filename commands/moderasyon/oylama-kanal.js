const Discord = require('discord.js')
const fs = require('fs');
const db = require('quick.db');
var ayarlar = require('../../config.json');
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
 if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Oylama kanalı ayarlamak için `Yönetici` yetkisine sahip olman gerek.')
     let oylamakanali = message.mentions.channels.first();
     if (!oylamakanali) return message.channel.send(':no_entry: Oylama kanalı ayarlamak için bir kanal etiketlemeniz gerekli. `-oylama-kanal #kanal`')
    db.set(`okanal_${message.guild.id}`, oylamakanali.id)
     message.channel.send(`Kanal ${oylamakanali} olarak ayarlandı!`)
     
   }
   

    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['oylamakanal'],
    permLevel: 2,
    kategori: "yetkili"
}

exports.help = {
    name: 'oylama-kanal',
    description: 'Oylama kanalını seçmenize yarar',
    usage: 'oylama-kanal'
}