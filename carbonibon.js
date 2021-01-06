const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.js");
const moment = require("moment");
require("moment-duration-format");
moment.locale("tr");
const fs = require("fs");
require("./util/Loader.js")(client);

client.komutlar = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  console.log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    console.log(`${props.config.name} komutu yüklendi.`);
    console.log(`aga b`);
    client.komutlar.set(props.config.name, props);
    props.config.aliases.forEach(alias => {
      client.aliases.set(alias, props.config.name);
    });
  });
});

client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.cache.find(
    channel => channel.name === "kanal ismi"
  );
  if (!channel) return;

  const images = [
    "https://media1.tenor.com/images/917ceb2a2644d05710ce26fe5d8ce0b2/tenor.gif",
    "https://media.tenor.com/images/9d537a52a9ef11665de49ec42bcda959/tenor.gif",
    "https://thumbs.gfycat.com/AnguishedUntriedGavial-small.gif",
    "https://media.tenor.com/images/2b44cf1731182a6d196bfd6ac9c443ab/tenor.gif"
  ];
  const image = images[Math.floor(Math.random() * images.length)];

  const yazılar = [
    "OOO Sen mi Geldein Hoş Geldin",
    "Umarım Pizza Getirmişsindir",
    "Abimiz Geldi Kaçın Aq",
    "Neden Geldin :d?"
  ];
  const yazıxd = yazılar[Math.floor(Math.random() * yazılar.length)];

  const joinembed = new Discord.MessageEmbed()
    .setDescription(
      `**__Öncelikle Carbonistan Sunucumuza Hoş Geldin!__** \n \n **• ${member} ${yazıxd} \n • Seninle Birlikte** **Üye sayımız:** \`${
        member.guild.memberCount
      }\`**kişi daha oldu!** \n • **<@&${
        config.teyitci
      }> rolünde ki arkadaşlar senin ile ilgilenecektir.** \n • **Hesap Durumu:** \`${moment(
        member.user.createdAt
      ).format("DD/MM/YYYY | HH:mm:ss")}\``
    )
    .setImage(image)
    .setColor("#FF0000");

  channel.send(joinembed);
});

client.on("guildMemberAdd", async miaf => {
  client.guilds.cache
    .get("config.sunucuid")
    .channels.cache.get("config.kayitkanal")
    .send(`@here`)
    .catch(message => message.delete(1));
});

const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

client.login(config.token);
