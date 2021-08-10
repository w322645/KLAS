const Discord = require('discord.js')
const talkedRecently = new Set();
    exports.run = async(client, message, args) => {
      
 if (talkedRecently.has(message.author.id)) {
           return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setTitle('UYARI !').setDescription(`\`5\` Saniye de Bir Kullanabilirsin - <@!${message.author.id}>`))
     .then(x => {x.delete({timeout: 3000})})
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
    }
        const codemarefiroller = new Discord.MessageEmbed()
        .setDescription(`
            **Sunucuda Toplam \`${message.guild.roles.cache.size}\` Adet Rol Var**
            **Rollerin Listesi;**
            \n
            ${message.guild.roles.cache.map(r => `${r}`).join('\n ')}
        `)
        .setColor('RANDOM')
        message.channel.send(codemarefiroller)
    } //CodeMareFi :)

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Roller','ROLLER'],
    permLevel: 1
}

exports.help = {
    name: 'roller'
}