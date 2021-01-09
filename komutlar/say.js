const Discord = require("discord.js");
const config = require("../config.js");
const Client = new Discord.Client();
exports.run = async (client, message, args) => {
  const sayembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(message.guild.name)
    .addField(
      "Erkek Sayısı;",
      message.guild.members.cache.filter(x =>
        x.roles.cache.has(config.erkekRol)
      ).size
    )
    .addField(
      "Kadın Sayısı;",
      message.guild.members.cache.filter(x =>
        x.roles.cache.has(config.kizRol)
      ).size
    )
    .addField("Toplam Üye Sayısı;", message.guild.memberCount)
    .addField(
      "Tagdaki Üyeler;",
      message.guild.members.cache.filter(x => x.user.username.includes("config.tag"))
        .size
    )
    .addField(
      "Boost Basan Sayısı;",
      message.guild.members.cache.filter(x =>
        x.roles.cache.has(config.boostrol)
      ).size
    )
    .setFooter(`Bu kadar yani`);
  message.reply(sayembed);
};
exports.config = {
  name: "say",
  guildOnly: true,
  aliases: []
};
