const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const talkedRecently = new Set();

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
  var args = message.content.split(' ').slice(1).join(' ');
  if(!message.member.hasPermission("MANAGE_NICKNAMES")) return (message.channel.send("❌ Üzgünüz, Yönetici yetkisine sahip değilsiniz.."));

  if (!args) return message.reply("**Kanalın adını ne yapmam gerektiğini söylemelisin.**");
   message.channel.setName(`${args}`)
  .then(newChannel => message.channel.send(`Bu kanalın yeni ismi ***#${args}***`))
  .catch(console.error);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kanalisimdeğiş','kanaladıdeğiştir','kanaladıdeğiş','kanalismideğiştir','kanalınismideğiştir','kanalisminideğiş','kanalınisminideğiş'],
  permLevel: 0
};

exports.help = {
  name: 'kanalismideğiş',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kanalismideğiş'
};