const Discord = require("discord.js");
const db = require("quick.db");
const client = new Discord.Client();
const ayarlar = require("../../config.json");
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
  var e = db.fetch(`prefix_${message.guild.id}`);
  if (e) {
    var p = e;
  }
  if (!e) {
    var p = "?";
  }
  let isim = args.slice(1).join(" ");
  let kullanici = message.mentions.users.first();
  if (!kullanici)
    return message.reply(new Discord.MessageEmbed().setTitle(":warning:").setColor("#36393f").setDescription(
      ` Lütfen bir kullanıcı giriniz! \nDoğru Kullanım; \`${p}isimdeğiştir @${client.user.username}#${client.user.discriminator} <yeni isim>\``
    ));
  if (!isim)
    return message.reply(new Discord.MessageEmbed().setColor("#36393f").setTitle(":warning:").setDescription(`Lütfen bir kullanıcı adı giriniz! \nDoğru Kullanım; \`${p}isimdeğiştir @${client.user.username}#${client.user.discriminator} <yeni isim>\``
    ));
  if (isim.length > 32)
    return message.reply(new Discord.MessageEmbed().setColor("#36393f").setDescription(
      `:warning: Lütfen \`32\` karakteri Geçmeyecek Şekilde Bir İsim Giriniz!`
    ));
  if (!message.guild.member(kullanici).bannable)
    return message.reply(
      new Discord.MessageEmbed()
        .setColor("#36393f")
        .setTimestamp()
        .setFooter("İsim Değiştirilemedi")
        .setTitle("UYARI <a:YanpSnennleGif:814802754672656404>")
        .setDescription(
          `${kullanici}\` Kişisinin Rolü Senden Üstte Veya Benim Yetkimin En Üste Oludğundan Emin ol\``
        )
    );

  message.guild.members.cache.get(kullanici.id).setNickname(`${isim}`);
  message.channel.send(
    `\`${kullanici.username}\` adlı kişinin kullanıcı adı \`${isim}\` olarak başarıyla değiştirildi. :white_check_mark:`
  );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: "isim-değiştir",
  description: "İstediğiniz kişiyi uyarır.",
  usage: "kapat"
};