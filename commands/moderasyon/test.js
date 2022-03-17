const hastebin = require('hastebin-gen');

exports.run = (client, msg, args) => {

    const bans = new Map();
    msg.guild.fetchBans().then(g => {
      bans[g.id] = g;
      let banlist = `${bans[g.id]
        .map(ge => `\n (${ge.user.tag}) (${ge.user.id})`)
        .join("\n")}`;


	    let haste = (banlist)
        let type = (banlist)

        hastebin(haste, type).then(r => {
            var link = `${r}`
            msg.channel.send(`:white_check_mark: Tamamdır ben halletim buyur linkin :[Banlananlar](${link})`);
        }).catch(console.error);

    });

    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'TEST',
  description: 'Hastebin çevirir.',
  usage: 'hastebin [komut]'
};