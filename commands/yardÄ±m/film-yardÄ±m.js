const Discord = require("discord.js");
const db = require("quick.db");
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
  if(!message.guild){
    var prefix = "?";
  } else {
  var prefix = db.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  };
  const film = new Discord.MessageEmbed()
    .setColor("#36393f")
    .setTitle('Film Yardım Komutları || EFDA')
    .setFooter(`Film Komutu Menüsü`)
    .setTimestamp()
    .addField('İyi Seyirler Dileriz...','||EFDA||\n\n')
    .addField(`${prefix}film-ara`, 'Yazdığınız Filim Hakkında Bilgi Verir', true)
    .addField(`${prefix}film-trendler`, 'Trend Listesindeki Filmleri Sıralar', true)
    .addField(`${prefix}film-rastgele`, 'Yazdığınız Türe Göre `(film/dizi)` Size Çeşitlerini Sunar', true)
  .setImage('https://brandslogos.com/wp-content/uploads/images/large/imdb-logo.png')
  message.channel.send(film);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['film','ımbd','filimler','dizi'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "filmler",
  category: "kullanıcı",
  description: "Moderasyon Menüsü.",
  usage: "!moderasyon"
};
