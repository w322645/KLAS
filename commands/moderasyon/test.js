const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {
   

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**Yetkin yetersiz.**`).then(msg => { msg.delete({ timeout: 10000 })}).catch(console.error);


message.guild.fetchBans()
        .then(rbanlar => message.channel.send(`Sunucuda toplam \`${rbanlar.size}\` yasaklı kişi bulunmaktadır!`))
        .catch(console.error).then(x => x.delete({timeout: 5000}));
        
        
        const bans = new Map();
  message.guild.fetchBans().then(g => {
    bans[g.id] = g;
    let banlist = `${bans[g.id]
      .map(ge => `\n (${ge.user.tag}) (${ge.user.id})`)
      .join("\n")}`;
              message.channel.send(new Discord.MessageEmbed()
        .setTitle('Sunucuda Banlanan Kişilerin isimleri')
        .setDescription(`(Banlananlar)[https://dummyimage.com/2000x500/33363c/ffffff&text=${banlist}]`))
    
    
    });
};


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases:['as'],
    permlevel: 0
};

exports.help = {
    name: "as"
};