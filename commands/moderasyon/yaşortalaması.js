const Discord = require("discord.js")
const config = require("../../config")

module.exports.run = async (client, message, args) => {
    let yas8 = message.guild.members.cache.filter(x=> x.displayName.includes("8")).size; 
let yas9 = message.guild.members.cache.filter(x=> x.displayName.includes("9")).size;
let yas10 = message.guild.members.cache.filter(x=> x.displayName.includes("10")).size;
let yas11 = message.guild.members.cache.filter(x=> x.displayName.includes("11")).size;    
let yas12 = message.guild.members.cache.filter(x=> x.displayName.includes("12")).size;
let yas13 = message.guild.members.cache.filter(x=> x.displayName.includes("13")).size;
let yas14 = message.guild.members.cache.filter(x=> x.displayName.includes("14")).size;
let yas15 = message.guild.members.cache.filter(x=> x.displayName.includes("15")).size;
let yas18 = message.guild.members.cache.filter(x=> x.displayName.includes("18")).size;
let yas19 = message.guild.members.cache.filter(x=> x.displayName.includes("19")).size;
let yas20 = message.guild.members.cache.filter(x=> x.displayName.includes("20")).size;
let yas16 = message.guild.members.cache.filter(x=> x.displayName.includes("16")).size;
let yas17 = message.guild.members.cache.filter(x=> x.displayName.includes("17")).size;


let embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(message.guild.name, message.guild.iconURL({ dymaic: true}))
.setDescription(`Sunucudaki Yaş Ortalaması;







\`8 Yaş:\` **${yas8}** Kişi
\`9 Yaş:\` **${yas9}** Kişi
\`10 Yaş:\` **${yas10}** Kişi
\`11 Yaş:\` **${yas11}** Kişi
\`12 Yaş:\` **${yas12}** Kişi
\`13 Yaş:\` **${yas13}** Kişi
\`14 Yaş:\` **${yas14}** Kişi
\`15 Yaş:\` **${yas15}** Kişi
\`16 Yaş:\` **${yas16}** Kişi
\`17 Yaş:\` **${yas17}** Kişi
\`18 Yaş:\` **${yas18}** Kişi
\`19 Yaş:\` **${yas19}** Kişi
\`20 Yaş:\` **${yas20}** Kişi`)
.setThumbnail(message.guild.iconURL({ dymaic: true}))
message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["yaş-ortalaması"],
    permLevel: 2,
  }
  
  exports.help = {
    name: 'yaşortalaması'
    
  }  