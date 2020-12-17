const Discord = require("discord.js")
const client = new Discord.Client();
const config = require("./config.js")
const moment = require('moment')
require("moment-duration-format")
  moment.locale("tr")
const fs = require("fs");                                        // serendia squad ❤ Piece ❤ Miaf 
require('./util/Loader.js')(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  console.log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    console.log(`${props.config.name} komutu yüklendi.`);
    console.log(`Bu altyapı Serendia Squad sunucusunda sizler için paylaşıldı.`)
    client.commands.set(props.config.name, props);
    props.config.aliases.forEach(alias => {
      client.aliases.set(alias, props.config.name);
    });
  });                                                                     // serendia squad ❤ Piece ❤ Miaf 
});

client.on('guildMemberAdd', async miaf => {

  const serendia = config.sunucuid

  const piece = config.kayitKanal;

  client.guilds.cache.get(serendia).channels.cache.get(piece).send(`
  
  • ${miaf} sunucumuza hoş geldin. Seninle beraber **${miaf.guild.memberCount}** kişiye ulaştık :tada: 
  
  • Hesabınızın kuruluş tarihi: **${moment(miaf.user.createdAt).format('DD/MM/YYYY | HH:mm:ss')}**

  • Sesli odalara girerek kaydınızı yaptırabilirsiniz. <@&${config.teyitci}> sizinle ilgilenecektir.

  `)
});

// Piece&Miaf sevgilerle.

client.login(config.token)
