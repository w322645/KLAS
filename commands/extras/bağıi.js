const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

	const kıllıam = new Discord.MessageEmbed()
	.setTitle("`EFDA BAĞIŞ`")
	.setDescription('\`\`\`bashEfda Bota Bağış Yapmak İçin Aşağıdaki Yerler Kullanabilir Ve Bize Maddi Açıdan Destek Olabilirsiniz. \n Bu Davranışınız İçin Sizlere Minnetarız Çok Teşekkür Ederiz \n Unutmayınız Siz Yoksanız Biz Bir Hiç Siz Varsanız Biz Sizin İçin Varız :)\`\`\` \n\n **EFDA Sunar**')
	.addField(`Papara İban`,`Yakında Eklenicek`)
	.addField(`İninal İban`,`Yakında Eklenicek`)
	.addField(`Akbank İban`,`Yakında Eklenicek`)
	.addField(`Diğer Kartlar İban`,`Daha Sonra Yakında Eklenicek`)
	.addField(`Diğer Kartlar İban`,`Daha Sonra Yakında Eklenicek`)
	.addField(`Diğer Kartlar İban`,`Daha Sonra Yakında Eklenicek`)
	.addField(`Diğer Kartlar İban`,`Daha Sonra Yakında Eklenicek`)
	message.channel.send(kıllıam);
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["EFDA","efda","para","money","support"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "bağış",
  category: "kullanıcı",
  description: "bağış",
  usage: "!efda"
};
