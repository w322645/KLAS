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
let yas21 = message.guild.members.cache.filter(x=> x.displayName.includes("21")).size;
let yas22 = message.guild.members.cache.filter(x=> x.displayName.includes("22")).size;
let yas23 = message.guild.members.cache.filter(x=> x.displayName.includes("23")).size;
let yas24 = message.guild.members.cache.filter(x=> x.displayName.includes("24")).size;
let yas25 = message.guild.members.cache.filter(x=> x.displayName.includes("25")).size;
let yas26 = message.guild.members.cache.filter(x=> x.displayName.includes("26")).size;
let yas27 = message.guild.members.cache.filter(x=> x.displayName.includes("27")).size;
let yas28 = message.guild.members.cache.filter(x=> x.displayName.includes("28")).size;
let yas29 = message.guild.members.cache.filter(x=> x.displayName.includes("29")).size;
let yas30 = message.guild.members.cache.filter(x=> x.displayName.includes("30")).size;


let embed = new Discord.MessageEmbed()
.setColor('#36393f')
.setAuthor(message.guild.name, message.guild.iconURL({ dymaic: true}))
.setDescription(`Sunucudaki Ya?? Ortalamas??;
\`8 Ya??:\` **${yas8}** Ki??i
\`9 Ya??:\` **${yas9}** Ki??i
\`10 Ya??:\` **${yas10}** Ki??i
\`11 Ya??:\` **${yas11}** Ki??i
\`12 Ya??:\` **${yas12}** Ki??i
\`13 Ya??:\` **${yas13}** Ki??i
\`14 Ya??:\` **${yas14}** Ki??i
\`15 Ya??:\` **${yas15}** Ki??i
\`16 Ya??:\` **${yas16}** Ki??i
\`17 Ya??:\` **${yas17}** Ki??i
\`18 Ya??:\` **${yas18}** Ki??i
\`19 Ya??:\` **${yas19}** Ki??i
\`20 Ya??:\` **${yas20}** Ki??i
\`21 Ya??:\` **${yas21}** Ki??i
\`22 Ya??:\` **${yas22}** Ki??i
\`23 Ya??:\` **${yas23}** Ki??i
\`24 Ya??:\` **${yas24}** Ki??i
\`25 Ya??:\` **${yas25}** Ki??i
\`26 Ya??:\` **${yas26}** Ki??i
\`27 Ya??:\` **${yas27}** Ki??i
\`28 Ya??:\` **${yas28}** Ki??i
\`29 Ya??:\` **${yas29}** Ki??i
\`30 Ya??:\` **${yas30}** Ki??i
`)
.setThumbnail(message.guild.iconURL({ dymaic: true}))
message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["ya??-ortalamas??"],
    permLevel: 2,
  }
  
  exports.help = {
    name: 'ya??ortalamas??'
    
  }  