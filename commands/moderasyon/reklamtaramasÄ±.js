const Discord = require('discord.js')
const ayarlar = require('../../config.json')
  const talkedRecently = new Set();
exports.run = (client, message, args) => {
  
 if (talkedRecently.has(message.author.id)) {
           return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setTitle('UYARI !').setDescription(`\`5\` Saniye de Bir Kullanabilirsin - <@!${message.author.id}>`))
     .then(x => {x.delete({timeout: 3000})})
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
    }
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);

    const members = message.guild.members.cache.filter(member => member.user.presence.activities && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.presence.activities.name));
    const memberss = message.guild.members.cache.filter(member => member.user.username && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.username));
    const embed = new Discord.MessageEmbed()
        .addField('📡 Oynuyor Mesajı Reklam Taraması', members.map(member => `📡 Reklam bulundu: ${member} - ${member.user.presence.activities.name}`).join("\n") || "Kimsenin ``Oynuyor Mesajı`` reklam içermiyor. 🎉")
        .addField('📡 Kullanıcı Adı Reklam Taraması', memberss.map(member => `📡 Reklam bulundu: ${member} - ${member.user.username}`).join("\n") || "Kimsenin ``Kullanıcı Adı`` reklam içermiyor. 🎉")
        .setColor("RANDOM")
    message.channel.send({embed})
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['reklamara', 'reklamara', 'reklamtaraması'],
    permLevel: 1
}

exports.help = {
    name: 'reklamtaraması',
  category: 'moderasyon',
    description: 'Kullanıcıların Oynuyor mesajındaki ve Kullanıcı adlarındaki reklamları tarar.',
    usage: 'reklam-taraması'
}