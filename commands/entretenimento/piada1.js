const Discord = require("discord.js");
module.exports = {
  config: {
    name: "piada",
    aliases: ["piadas", "fun"]
  },
  run: async (bot, message, args, member) => {
    //await message.react("✅");

    message.channel.send();
  }
};
