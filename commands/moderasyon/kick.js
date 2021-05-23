const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
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
  var e = db.fetch(`prefix_${message.guild.id}`);
  if (e) {
    var p = e;
  }
  if (!e) {
    var prefix = "?";
  }
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setTitle("Ne yazık ki bu komutu kullanmaya yetkin yok.")
      .setColor("#36393f");

    message.channel.send(embed);
    return;
  }

  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Lütfen atılacak kişiyi etiketleyiniz!")
        .setColor("#36393f")
        .setFooter(bot.user.username, bot.user.avatarURL())
    );
  }

  const embed = new Discord.MessageEmbed()
    .setColor("#36393f")
    .setDescription(`${u} Adlı şahsın sunucudan atılmasını onaylıyor musunuz?`)
    .setFooter(bot.user.username, bot.user.avatarURL());
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["☑️"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () =>
      sentEmbed.edit("```bash\n'İşlem Geçerliliği Sona Erdi !'\n```")
    );
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "☑️") {
        message.channel.send(
          new Discord.MessageEmbed()
            .setColor("#36393f")
            .setDescription(
              `**İşlem onaylandı!** __**${u}**__ **adlı şahıs sunucudan atıldı! <a:5495_tickmark:814532978747244585>**`
            )
        );

        message.guild.member(u).kick();
      }
    });
  });
};

module.exports.conf = {
  aliases: [],
  permLevel: 0,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "kick",
  description: "kick",
  usage: "kick"
};
