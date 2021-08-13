const Discord = require("discord.js");
module.exports = {
  config: {
    name: "servidores",
    aliases: ["sv"]
  },
  run: async (bot, message, args) => {
    const servers =`Estou em ${bot.guilds.cache.size} servidores \n` + bot.guilds.cache
        .sort((a, b) => b.memberCount - a.memberCount)
        .map(r => r)
        .map((r, i) => `[**${i + 1}**][_membros ${r.memberCount}_] - ${r.name}`)
        .join("\n");

    let embed = new Discord.MessageEmbed()
      .setColor("GOLD")
      .setDescription(`${servers}`);

    message.channel.send({ embeds: [embed] });
  }
};
