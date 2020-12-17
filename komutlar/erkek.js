const Discord = require("discord.js");
const config = require("../config.json");
const client = new Discord.Client();
exports.run = async (client, message, args) => {
  if (message.channel.id !== "788715224843812864")
    return message.channel.send("");
  if (!message.member.roles.has("788715223560355879"))
    return message.channel.send(
      "Bu komutu kullanabilmek için <@&788715223560355879> Yetkisine sahip olmalısın"
    );
  let user = message.mentions.users.first();
  let reason = args.slice(1).join("");
  if (message.mentions.users.size < 1)
    return message.reply("Lütfen kayıt etmek istediğiniz üyeyi etiketle");
  if (user.id === message.author.id)
    return message.reply("Kendinimi kayıt edecen slk? :D");
  let kimlik =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.get(args[0]);

  if (!kimlik) return message.reply("**?ETİKET?**");
  let kayıt = message.guild.member(user);

  kayıt.addRole("788715223560355873");
  kayıt.removeRole("788715223363616804");

  const ky = message.channel.send();

  const kayit = new Discord.RichEmbed()
    .setColor(0x00ae86)
    .setTimestamp()
    .addField("Eylem:", "Kayıt")
    .addField("Kullanıcı:", `${user}(${user.id})`)
    .addField("Cinsiyet:", `ÇOCUK ADAM`)
    .addField(
      "Yetkili:",
      `${message.author.username}#${message.author.discriminator}`
    );
  client.channels.cache.get("788715224550735930").send(kayit);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["erkek", "e"],
  permLevel: 0
};

exports.help = {
  name: "e",
  description: "erkek ",
  usage: "erkek"
};
