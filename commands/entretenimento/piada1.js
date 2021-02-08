const Discord = require("discord.js");
const db = require
module.exports = {
  config: {
    name: "piada",
    aliases: ["piadas", "fun"]
  },
  run: async (bot, message, args, member) => {
      let entrada = db.get(`wcmessag_${member.guild.id}`);


    message.channel.send();
  }
};
