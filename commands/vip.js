const Discord = require("discord.js");
const config = require('../config.js');
client = new Discord.Client();

exports.run = (client, message, args) => {

    const pieceVip = config.vip;

    if (!message.member.roles.cache.has(config.teyitci)) return message.reply('Yetersiz yetki!');  //eğer yetkisi yoksa dönüt mesajı attırıyoruz.

    let miaf = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!miaf) return message.channel.send(`Bir kullanıcı belirtmelisin. **Örnek: @Piece/424544845290536970**`)
    const piece = message.guild.member(miaf)

    const serendia = new Discord.MessageEmbed()
        .setDescription(`🎉 ${piece} adlı kişiye <@&${pieceVip}> rolü başarıyla verildi.`)
        .setColor("RANDOM")
        .setFooter("Serendia Squad - Kayıt Sistemi")

    const squad = new Discord.MessageEmbed()
        .setDescription(`🎉 ${piece} adlı kişiden <@&${pieceVip}> rolü başarıyla alındı.`)
        .setColor("RANDOM")
        .setFooter("Serendia Squad - Kayıt Sistemi")

    if (message.guild.member(piece).roles.cache.has(pieceVip.id)) {
        message.guild.member(piece).roles.remove(pieceVip).then(() => {
            message.channel.send(squad);
        });
    } else {
        message.guild.member(piece).roles.add(pieceVip).then(() => {
            message.channel.send(serendia);
        });
    }
}

exports.config = {
  name: "vip",
  guildOnly: true,
  aliases: ["v"],
};
