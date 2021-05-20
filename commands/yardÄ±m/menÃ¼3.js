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
  const BABAMRB = new Discord.MessageEmbed()
    .setColor("#36393f")
    .setAuthor("🔥 EF&DA'in Özel Menüsüne hoşgeldin! 🔥")
    .setTitle(`:gem: Prefix \`${prefix}\` Özel Menü 3 EFDA`)//döviz
    .setTimestamp()
    .setDescription(
      `> **${prefix}film** : Size Film Komutlar Menüsünü Sunar .\n> **${prefix}iftar** : Yazdığınız Şehrin İftar Saatini Gösterir.\n> **${prefix}qr** : Yazdığınız Link İ qr koda Dönüştürür.\n> **${prefix}mcserver** : Yazdığınız İp ile Minecraft Server İstatistiklerini ve Sunucu Görünümünü Atar.\n> **${prefix}sarıl** : Etiketlediğiniz Kişiye Sarılırsınız.\n> **${prefix}çeviri** : Yazılan Kelimeyi Yazdığınız Dile Çevirir.\n> **${prefix}k-bilgi** : Etiketlenen Kişinin Yada Sizin Kullanıcı Bilginizi Atar.\n> **${prefix}yapımcı-hakkında** : Yapımcının Sosyal Hesapları Ve Hakkında Kısmı Gözükür.\n> **${prefix}şişe-çevirmece** : En Az 2 Kişiyle Şişe Çevirmece Oynarsınız.\n> **${prefix}adam-ölçer** : Adamlığınızı Ölçer.\n> **${prefix}tdk** : Kelime Anlamı Aratırsınız.\n> **${prefix}yak** : Yanan Hayaller İçin Yakarsınız\n> **${prefix}steam-oyun** : Yazdığınız Oyunun Steamde ki Fiyatını Ve bilgilerini Görürsünüz\n> **${prefix}afk** : Kendinizi Afk Durumuna Getirirsiniz\n> **${prefix}mcödül** : Minecraft Ödül png Atar\n> **${prefix}sunucubilgi** : Sunucu Bilgisini Atar\n> **${prefix}mcskin** : Minecraft ta Kullanıcı Ararsınız\n> **${prefix}reddit** : Reddit'de Kullanıcı Ararsınız\n> **${prefix}youtube-ara** : Youtube'de Kanal Ararsınız\n> **${prefix}yetkilerim** : Sunucudaki Yetkilerinize Bakarsınız\n> **${prefix}not** : 10 Hazneden Oluşan Bir Not Defterine Not Alırsınız\n> **${prefix}mayıntarlası** : Yazdığınız Kanalda Mayın Tarlası Oynarsınız\n> **${prefix}googleplay** : Google Playda Yazdığınız Şeyin Aratmasını Sağlar\n> **${prefix}oyunbilgi** : Yazdığınız Oyun Hakkında Bilgi Verir\n> **${prefix}gifara** : Gif Aratırsınız\n> **${prefix}dc** : Doğruluk Cesaretlik Oynarsınız\n> **${prefix}songörülme** : Etiketlenen Kişinin Son Görülmesini Atar\n> **${prefix}korona** : Kovid Bilgileri Gönderir\n> **${prefix}yaz** : Belirtiğiniz Yazıyı Yazar\n> **${prefix}token** : Botun Kontrol Tokenini Verir\n> **${prefix}iltifat** : Chat e Rastgele İltifat Eder\n> **${prefix}kasaaç** : Csgo Kasa Açarsınız\n> **${prefix}oy-ver** : Botu Oylarsınız\n> **${prefix}yapımcım** : Botun Sahibini Yani Bunu Yazan Beni Atar .d.\n> **${prefix}burak-reis** : Sohbete Burak Reis Sözü Atar.`
    )
    .setImage(
      "https://api.creavite.co/out/9b5f04a4-8250-4bae-b112-552815d12128_standard.gif"
    );
  message.channel.send(BABAMRB);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["m3", "menü3"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "menü3",
  category: "kullanıcı",
  description: "Menü2 Menüsü.",
  usage: "!menü"
};
