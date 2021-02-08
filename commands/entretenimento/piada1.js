const Discord = require("discord.js");
module.exports = {
  config: {
    name: "piada",
    aliases: ["piadas", "fun"]
  },
  run: async (bot, message, args, member) => {
    //await message.react("✅");

    
    //let embeb = new Discord.MessageEmbed()
      //.setFooter(`Piada solicitada por: ${message.author.username}`, message.author.displayAvatarURL())
      //.setColor("RANDOM")
      //.setDescription(`${altstatus}`);

    message.channel.send(altstatus);
  }
};
