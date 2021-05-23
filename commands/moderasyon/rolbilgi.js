const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const talkedRecently = new Set();

 if (talkedRecently.has(message.author.id)) {
           return message.channel.send(new MessageEmbed().setColor('#36393f').setTitle('UYARI !').setDescription(`\`5\` Saniye de Bir Kullanabilirsin - <@!${message.author.id}>`))
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
  if (!args[0]) return message.channel.send("**Lütfen Bir Rol Girin!**");
  let rol =
    message.mentions.roles.first() ||
    message.guild.roles.cache.get(args[0]) ||
    message.guild.roles.cache.find(
      r => r.name.toLowerCase() === args.join(" ").toLocaleLowerCase()
    );
  if (!rol) return message.channel.send("**Lütfen Geçerli Bir Rol Girin!**");

  const bahset = {
    false: "Hayır",
    true: "Evet"
  };

  let enes = new MessageEmbed()
    .setColor("#00ff00")
    .setAuthor("Rol Bilgi")
    .setThumbnail(message.guild.iconURL())
    .addField("**Rol ID**", `\`${rol.id}\``, true)
    .addField("**Rol İsmi**", rol.name, true)
    .addField("**Renk Kodu**", rol.hexColor)
    .addField("**Sahip Üyeler**", rol.members.size)
    .addField("**Poziyon**", rol.position)
    .addField("**Bahsedilebilir**", bahset[rol.mentionable])
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp();

  message.channel.send(enes);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rolbilgi"],
  permLevel: 2
};

exports.help = {
  name: "Rolbilgi",
  description: "Rol Hakkında Bilgi Verir.",
  usage: "rolbilgi"
};
