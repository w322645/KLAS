const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if(!message.author.id === "758672982146809867") return message.reply("bunu sadece sahibim kullanabilir")
  if (message.content === '?sahip') {
    message.react('808795266609446913'); // buraya istediğiniz emojinin ID'sini girin
}if (message.content === '?sahip') {
    message.react('808795288315625513'); // buraya istediğiniz emojinin ID'sini girin
}if (message.content === '?sahip') {
    message.react('808795252446068787'); // buraya istediğiniz emojinin ID'sini girin
}if (message.content === '?sahip') {
    message.react('808561597483581461'); // buraya istediğiniz emojinin ID'sini girin
}if (message.content === '?sahip') {
    message.react('808795267394437141'); // buraya istediğiniz emojinin ID'sini girin
}if (message.content === '?sahip') {
    message.react('808795266341011538'); // buraya istediğiniz emojinin ID'sini girin
}if (message.content === '?sahip') {
    message.react('808795267586719824'); // buraya istediğiniz emojinin ID'sini girin
}if (message.content === '?sahip') {
    message.react('808561586821267468'); // buraya istediğiniz emojinin ID'sini girin
}if (message.content === '?sahip') {
    message.react('808561900543410187'); // buraya istediğiniz emojinin ID'sini girin
}if (message.content === '?sahip') {
    message.react('808795273315876885'); // buraya istediğiniz emojinin ID'sini girin
}if (message.content === '?sahip') {
    message.react('808795277623427133'); // buraya istediğiniz emojinin ID'sini girin
}
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
      `> **${prefix}bakım** : Botu Bakım Moduna Sokar\n> **${prefix}ayrıl** : Yazılan Sunucudan Bot Çıkış Yapar\n> **${prefix}eval** : Eval Komut Test\n> **${prefix}avatar-ayarla** : Botun Resmini Değiştirirsiniz\n> **${prefix}komutlar** : Komutların Sayısı Ve komutlar\n> **${prefix}bot-restart** : Bota Restart Atarsınız\n> **${prefix}kaç-cm** : Kaç Santim\n> **${prefix}fçık** : Fake Veri Tabanlı Çıkış\n> **${prefix}fgir** : Fake Veri Tabanlı Giriş\n> **${prefix}sönmezreis** : Sönmez Reis Küfürlü\n`
    )
    .setImage(
      "https://api.creavite.co/out/9b5f04a4-8250-4bae-b112-552815d12128_standard.gif"
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