const Discord = require("discord.js");

module.exports = {
  config: {
    name: "filme",
    aliases: ["filmes"]
  },
  run: async (bot, message, args) => {
    if (
      !message.member.hasPermission(["ADMINISTRATOR"]) &&
      message.author.id != "691447707134328832"
    ) {
      return message.reply(`você precisa da permissão \`Administrador\`.`);
    }

    let argsresult;
    let mChannel = message.mentions.channels.first();
    if (mChannel) {
      argsresult = args.slice(1).join(" ");
      
      const embed = new Discord.MessageEmbed()
      .setDescription(`${argsresult}`)
      .setColor("RANDOM")
      mChannel.send(embed);
    } else {
      argsresult = args.join(" ");
      const embedd = new Discord.MessageEmbed()
      .setDescription(`${argsresult}`)
      .setColor("RANDOM")
      message.channel.send(embedd).then(function(msg) {
      msg.react(":one:");
      msg.react("👎");
    });
    }
    message.delete();
  }
};
