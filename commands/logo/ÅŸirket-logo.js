const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen metin girin.** <a:YanpSnennleGif:814802754672656404>`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/004c2685-d39c-42bf-8acb-dc55e352c88e/logo?v=4&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setColor("#27167A")
  .setImage(linqo)
  .setFooter('Şirket Logo Oluşturuldu')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['globe','şirket-logo'],
    permLevel: 0
}

exports.help = {
    name: 'grsdsadsensadsad',
    description: 'Yasdadsğasdasdsdsınız yazıyı bannera çevirir.',
    usage: 'gresdendsaaasddassyazı>'
}