const Discord = require('discord.js');
const db = require('quick.db')
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
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setDescription(":no_entry: Yeterli yetkiniz yok"));
    let kullanici = args[0];
    if (!kullanici) return message.channel.send(new Discord.MessageEmbed().setImage("https://s3.gifyu.com/images/ezgif.com-gif-maker-17ce77b310641726e.gif").setColor("#36393f").setDescription('**<:okeys:820285379298328607> Banını Sorgulayacağım Kişinin İd ini Girmen Gerek ** \n\n Nasıl İd Alındığını Bilmiyosan Buyur ⬇️ '));
    message.guild.fetchBans()
        .then(bans => {
            if (!bans.has(kullanici)) {
                return message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle(`Bu kullanıcı banlanmamış.`));
            }
        })
    message.guild.fetchBan(kullanici).then(({ user, reason }) => {
        message.channel.send(new Discord.MessageEmbed().setColor("#36393f").setTitle("BAN SORGULAMA").setDescription(`${user.tag} Adlı Kullanıcının Ban Nedeni: __**${reason}**__`));

    })
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bansor'],
    permLevel: 0
};

exports.help = {
    name: 'bansorgulama',
    description: 'Ban sorgulama yaparsınız',
    usage: 'bansorgulama'
};