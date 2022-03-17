const hastebin = require('hastebin-gen');

exports.run = (client, msg, args) => {

  
  let guild = msg.channel.guild

    const bans = new Map();
    msg.guild.fetchBans().then(g => {
      bans[g.id] = g;
      let banlist = `${bans[g.id]
        .map(ge => `\n (${ge.user.tag}) (${ge.user.id})`)
        .join("\n")}`;


	    let haste = (`${guild.name}\n\n\n` + banlist)
        let type = (bans)

        hastebin(haste, type).then(r => {
            var link = `${r}`
            msg.channel.send(`:white_check_mark: Aşağıdaki Linkten Banlayanlara Bakarm :[Banlananlar](${link})`);
        }).catch(console.error);

    });

    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'banlist',
  description: 'Hastebin çevirir.',
  usage: 'hastebin [komut]'
};