const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES"));
  let prefix = ayarlar.prefix;
  let rol = message.mentions.roles.first();
  if (!rol)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          `Bir Rol Belirt\nÖrnek Kullanım ${prefix}rolrengi @rol rolkodu\nRol Kodunun Başına # Koymayın
          
          Renk Kodlarını Nerden Bakıcam Derseniz
          
          [RENK KODLARI](http://www.abecem.net/web/renk.html)`
        )
        .setColor("#36393f")
    );
  let renk = args.slice(1).join(" ");
  if (!renk)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          `Bir Renk Kodu Belirtmelisin\n Örnek Kullanım: ${prefix}rolrengi @rol renkkodu\n Renk Kodunun başına # Koymayın
          
          Renk Kodlarını Nerden Bakıcam Derseniz
          
          [RENK KODLARI](http://www.abecem.net/web/renk.html)`
        )
        .setColor("#36393f")
    );
  message.guild.roles.cache.get(rol.id).setColor(renk);
  message.channel.send(
    new Discord.MessageEmbed()
    .setThumbnail(`https://dummyimage.com/600x600/${renk}/000000&text=rol%20rengi`)
      .setDescription(`Başarıyla Rol Rengi #${renk} Olarak Ayarlandı!`)
      .setColor(renk)
  );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rol-rengi",'rolrenk','rolrengi'],
  permLevel: 5,
}; 
exports.help = {
  name: "rr",
  description: "Rolun Rengini Değiştirir",
  usage: "rolrengi @rol renkkodu"
};