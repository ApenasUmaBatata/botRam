const {MessageEmbed} = require("discord.js");
const moment = require('moment')
module.exports = {
  config: {
    name: "svinfo",
    aliases: ["serverinfo", "servidor"]
  },
  run: async (bot, message) => {
    //await message.react("✅");

    let inline = true;
    let sicon = message.guild.iconURL();
    let serverembed = new MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(sicon)
      .addField("Nome do servidor", `${message.guild.name}`, inline)
      .addField("Dono", `${(await bot.users.fetch(message.guild.ownerId)).tag}`, inline)
      .addField("Existe desde", `${moment(message.guild.createdAt).format('L')}`, inline)
      .addField("Bosters", `<a:nitroboost:878466316313456650> ${message.guild.premiumSubscriptionCount}`,inline)
      .addField("Membros", `👥 ${message.guild.memberCount}`, inline)
      .addField("Cargos", `${message.guild.roles.cache.size}`, inline)
      .addField("Canais", `<:chat:878466292020043776> ${message.guild.channels.cache.size}`, inline);

    message.reply({ embeds: [serverembed] });
  }
};
