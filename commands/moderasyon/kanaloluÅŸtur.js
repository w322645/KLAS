const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const talkedRecently = new Set();

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
  let kanal = args.slice(0).join(" ");
  let guild = message.guild;
  if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.reply(
      new Discord.MessageEmbed()
        .setColor("#36393f")
        .setTitle("Bunun için gerekli iznin yok")
    );
  if (kanal.length < 1)
    return message.reply(
      new Discord.MessageEmbed()
        .setColor("#36393f")
        .setTitle(
          "<a:5430_Diamond:814532975948726272> Lütfen oluşturacağım kanalın adını yaz."
        )
    );
  message.delete();
  guild.channels.create(kanal, "text");
  message.channel.send(
    new Discord.MessageEmbed()
      .setColor("#36393f")
      .setTitle("<a:5430_Diamond:814532975948726272> Yazı Kanalı Oluşturuldu")
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yazı-kanal-aç", "kanal-oluştur"],
  permLevel: 3
};

exports.help = {
  name: "yazı-kanal-aç",
  description: "Bir ses kanalı açar",
  usage: "ses-kanal-aç [açmak istediğiniz kanalın adı]"
};
