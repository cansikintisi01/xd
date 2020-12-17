const Discord = require("discord.js");
const config = require("../config.js");
client = new Discord.Client();

exports.run = async (client, message, args) => {

  try {
    if (message.channel.id !== (config.kayitkanal))
      return message.channel.send("");
    if (!message.member.roles.cache.has(config.teyitci))
      return message.reply("Yetkin yok aga b"); 

    const piece =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]); //üyeyi çekiyoruz yani hem etiket hemde id ile olur.
 

    if (!piece)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(
            `Bir kullanıcı belirtmelisin. **Örnek: @Piece/424544845290536970**`
          )
          .setColor("RANDOM")
          .setTimestamp()
      );


    message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          `**__Kayıt İşlemi Başarılı__**\n\n🤠 Kayıt Edilen Kişi: ${piece}\n🤠 Kayıt Yapan Yetkili: ${message.author}\n🤠 Kayıt İşleminde Verilen Rol: <@&${config.kizRol}>\n🤠 Kayıt İşleminde Alınan Rol: <@&${config.kayitsiz}>`
        )
        .setColor("RANDOM")
        .setTimestamp()
    );
    
  
    await piece.roles.add(config.erkekRol); //eğer başka rolleriniz de varsa onları da ek olarak congif.json da belirtip alt satıra kopyalayıp yapın.
    await piece.roles.remove(config.kayitsiz);
    message.guild.channels.cache
      .get(config.kayitlog)
      
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
  } catch (e) {
    message.channel.send(`Kayıt Yetkim veya Rolüm Yok`);
  }
};
exports.config = {
  name: "e",
  guildOnly: true,
  aliases: ["erkek"]
};
