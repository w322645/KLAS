const Discord = require('discord.js');
  const talkedRecently = new Set();
exports.run = (bot, message) => {



 if (talkedRecently.has(message.author.id)) {
           return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setTitle('UYARI !').setDescription(`\`5\` Saniye de Bir Kullanabilirsin - <@!${message.author.id}>`))
     .then(x => {x.delete({timeout: 3000})})
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
    }
  var args = message.content.split(' ').slice(1).join(' ');
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('❌Bunun için gerekli iznin yok');
  if (!args) return message.reply("Kanalın açıklamasına ne yazmam gerek!")
  message.channel.setTopic(`${args}`)
  .then(newChannel => message.channel.send(`Bu kanalın yeni konusu ***${args}***`))
  .catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kaçıklama","kanala"],
  permLevel: 0
};

exports.help = {
  name: 'kanalaçıklama',
  description: '**Bulunduğunuz** kanalın konusunu/açıklamasını değiştirir. ',
  usage: 'kanalkonusudeğiş yeni kanal ismi'
};