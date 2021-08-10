const Discord = require("discord.js");
const talkedRecently = new Set();

exports.run = async (client, message, args) => {


 if (talkedRecently.has(message.author.id)) {
           return message.channel.send(new Discord.MessageEmbed().setColor('#36393f').setTitle('UYARI !').setDescription(`\`5\` Saniye de Bir Kullanabilirsin - <@!${message.author.id}>`))
     .then(x => {x.delete({timeout: 3000})})
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
    }
  const bans = new Map();
  message.guild.fetchBans().then(g => {
    bans[g.id] = g;
    let banlist = `${bans[g.id]
      .map(ge => `\n (${ge.user.tag}) (${ge.user.id})`)
      .join("\n")}`;
    try {
      let noembed = new Discord.MessageEmbed()
        .setColor("#36393f")
        .setDescription(`Bu Sunucuda Yasaklı Kullanıcı Bulunmuyor.`)
        .setAuthor(
          message.guild.name,
          message.guild.iconURL()
            ? message.guild.iconURL()
            : "https://images-ext-2.discord.net/external/hHow2gpD0uyL8WnA8ynAHuPbzm_lE1lNAaxkLqDT0Fs/https/images-ext-1.discord.net/external/rBk_abKMsqAKoATjXbtyqKJt2bTXI_shMEemVpbNtFw/http/www.kalahandi.info/wp-content/uploads/2016/05/sorry-image-not-available.png"
        )
        .setFooter(
          "Bu komutu kullanan kullanıcı " + message.author.tag,
          message.author.avatarURL()
        );
      if (banlist.length === 0) return message.channel.send(noembed);
      const embed = new Discord.MessageEmbed()
        .setDescription(banlist)
        .setAuthor(
          message.guild.name,
          message.guild.iconURL()
            ? message.guild.iconURL()
            : "https://images-ext-2.discord.net/external/hHow2gpD0uyL8WnA8ynAHuPbzm_lE1lNAaxkLqDT0Fs/https/images-ext-1.discord.net/external/rBk_abKMsqAKoATjXbtyqKJt2bTXI_shMEemVpbNtFw/http/www.kalahandi.info/wp-content/uploads/2016/05/sorry-image-not-available.png"
        )
        .setFooter(
          "Bu komutu kullanan kullanıcı " + message.author.tag,
          message.author.avatarURL()
        )
        .setColor("#36393f");
      message.channel.send(embed);
    } catch (err) {
      const embed = new Discord.MessageEmbed()
        .addField(
          `Sunucuda Bulunan Yasaklılar`,
          "<:no:663378512417128449> Üzgünüm ama sunucunuzda fazla sayıda yasaklı kullanıcı bulunuyor Bu Yüzden gösteremiyorum. Discord buna izin vermiyor."
        )
        .setColor("#36393f")
        .setFooter(
          "Bu komutu kullanan kullanıcı " + message.author.tag,
          message.author.avatarURL()
        )
        .setTimestamp();
      message.channel.send(embed);
    }
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yasak-listesi"],
  permLevel: 2
};

exports.help = {
  name: "banlist",
  description: "Sunucudaki Yasaklı Kullanıcıları Gösterir.",
  usage: "banlist"
};
