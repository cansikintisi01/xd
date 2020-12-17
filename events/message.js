const config = require("../config.js");
module.exports = message => {
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let komutlar = message.content.split(" ")[0].slice(config.prefix.length);
  let params = message.content.split(" ").slice(1);
  let cmd;
  if (client.komutlar.has(komutlar)) {
    cmd = client.komutlar.get(komutlar);
  } else if (client.aliases.has(komutlar)) {
    cmd = client.komutlar.get(client.aliases.get(komutlar));
  }
  if (cmd) {
    if (!message.guild) {
      if (cmd.config.guildOnly === true) {
        return;
      }
    }
    if (cmd.config.permLevel) {
      if (cmd.config.permLevel === "BOT_OWNER") {
        if (!config.geliştiriciler.includes(message.author.id)) {
          message.channel
            .send(
              `You need \`${cmd.config.permLevel}\` permission to use this komutlar.`
            )
            .then(msg => msg.delete({ timeout: 3000 }));
          return;
        }
      }
      if (!message.member.hasPermission(cmd.config.permLevel)) {
        message.channel
          .send(
            `You need \`${cmd.config.permLevel}\` permission to use this komutlar.`
          )
          .then(msg => msg.delete({ timeout: 3000 }));
        return;
      }
    }
    cmd.run(client, message, params);
  }
};
