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
    }
  if(!message.author.id === "758672982146809867") return message.reply("bunu sadece sahibim kullanabilir")

  if(!message.guild){
    var prefix = "?";
  } else {
  var prefix = db.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  };
  const sahipyarrakvar = new Discord.MessageEmbed()
    .setColor("#36393f")
    .setAuthor("🔥 EF&DA'in BOT SAHİBİ MENÜSÜ 🔥")
    .setTitle("🔥BUYUR SAHİP🔥")
    .setTimestamp()
    .setDescription(
      `> **${prefix}dm** : Bir Kşiye Dm Yoluyla Msj Atma\n> **${prefix}bakım** : Botu Bakım Moduna Sokar\n> **${prefix}ayrıl** : Yazılan Sunucudan Bot Çıkış Yapar\n> **${prefix}eval** : Eval Komut Test\n> **${prefix}avatar-ayarla** : Botun Resmini Değiştirirsiniz\n> **${prefix}komutlar** : Komutların Sayısı Ve komutlar\n> **${prefix}bot-restart** : Bota Restart Atarsınız\n> **${prefix}kaç-cm** : Kaç Santim\n> **${prefix}fçık** : Fake Veri Tabanlı Çıkış\n> **${prefix}fgir** : Fake Veri Tabanlı Giriş\n> **${prefix}sönmezreis** : Sönmez Reis Küfürlü\n`
    )
    .setImage(
      ""
    );
  message.channel.send(sahipyarrakvar);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sahip", "s", "sahip-menüsü"],
  permLevel: 4
};

exports.help = {
  name: "sahipmenüsü",
  category: "kullanıcı",
  description: "Menü2 Menüsü.",
  usage: "?sahip-menüsü"
};
//log verdi la