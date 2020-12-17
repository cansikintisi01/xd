const Discord = require("discord.js");
const config = require("../config.js");
module.exports = async client => {
  client.user.setPresence({activity: { type: "STREAMING", url:"https://www.twitch.tv/adal", name: `Anan` },status: "idle"});
};
