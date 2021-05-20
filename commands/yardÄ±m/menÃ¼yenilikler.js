const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if(!message.guild){
    var prefix = "?";
  } else {
  var prefix = db.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  };
  const yenilikler = new Discord.MessageEmbed()
    .setImage("https://s4.gifyu.com/images/standard-5024c3fec90018333.gif")
    .setColor("#36393f")
    .setTitle(
      `<:menu:820288234772889630> Prefix \`${prefix}\` Yenilikler EFDA <:bult:820288713493708841>`
    )
    .setFooter(`Ana menü için \n${prefix}yardım`)
    .setTimestamp()
    .setDescription(
      `\`\`\`bash\n "EFDA YENİLİKLER"\`\`\`\n\n**🍬 EFDA BOTUNA YENİ GELEN KOMUTLAR**\`\`\`fix\n${prefix}rol-oluştur : Size Belirttiğiniz Ad da ve renk de Rol Oluşturur\n\n${prefix}uyarı-ayar: Efda Çok Gelişmiş Uyarı Sistemi Uyarı Sistemi.\n\n${prefix}film : Size Film Komutlar Menüsünü Sunar.\n\n${prefix}iftar : Yazdığınız Şehrin İftar Saatini Gösterir.\n\n${prefix}resimli-hgbb : Belirlediğiniz Kanala Resimli Giren Veya Çıkan Kişinin Avatarını Atar(Oto Sayaçlı).\n\n${prefix}qr : Yazdığınız Link İ qr koda Dönüştürür.\n\n\`\`\``
    );
  message.channel.send(yenilikler);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yenilikler", "efday", "efda-yenilikler"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "efda-yenilikler",
  category: "kullanıcı",
  description: "Moderasyon Menüsü.",
  usage: "!moderasyon"
};
