const Discord = require("discord.js");
const config = require("../config.js");

exports.run = async (client, message, args) => {

  try {
    if (message.channel.id !== "788715224843812864")
      return message.channel.send("");
    if (!message.member.roles.cache.has("788715223560355879"))
      return message.channel.send(
        "Bu komutu kullanabilmek için <@&788715223560355879> Yetkisine sahip olmalısın"
      );

    const piece =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]); 

    if (!piece)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            `Bir kullanıcı belirtmelisin. **Örnek: @anan61**`
          )
          .setColor("RANDOM")
          .setTimestamp()
      );

    await piece.roles.add(config.erkekRol); 
    await piece.roles.remove(config.kayitsiz);
    const kayit = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .addField("Eylem:", "Kayıt")
      .addField("Kullanıcı:", `${piece}(${piece.id})`)
      .addField("Cinsiyet:", `ÇOCUK ADAM`)
      .addField(
        "Yetkili:",
        `${message.author.username}#${message.author.discriminator}`
      );
    client.channels.cache.get("788715224550735930").send(kayit);
  } catch (e) {
    
  }
};
exports.config = {
  name: "erkek",
  guildOnly: true,
  aliases: ["e"]
};
