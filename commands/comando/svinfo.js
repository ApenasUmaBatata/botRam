const Discord = require("discord.js");
module.exports = {
  config: {
    name: "svinfo",
    aliases: ["serverinfo"]
  },
  run: async (bot, message, args) => {
    await message.react("✅");

    let inline = true;
    let sicon = message.guild.iconURL();
    let serverembed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(sicon)
      .addField("Nome da guilda", message.guild.name, inline)
      .addField("Dono", message.guild.owner, inline)
      .addField("Região", message.guild.region, inline)
      .addField("Membros", `👥 ${message.guild.memberCount}`, inline)
      .addField("Roles", message.guild.roles.cache.size, inline)
      .addField("Canais", message.guild.channels.cache.size, inline);

    message.channel.send(serverembed);
  }
};
