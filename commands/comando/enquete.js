const Discord = require("discord.js");

module.exports = {
  config: {
    name: "enquete",
    aliases: ["Enquete"]
  },
  run: async (bot, message, args) => {
    await message.react("✅");

  // var canal = client.channels.get('692026509841662073')

  var sugestao = args.slice(0).join(" ");
  if(!args.join(" ")) return message.reply("Escreva algo!");
  
  let embed = new Discord.MessageEmbed()
  .setTitle(`ENQUETE`)
    .setColor("RANDOM")
  .setDescription(`:bust_in_silhouette: **Autor:** ${message.author}\n\n:inbox_tray: **Sugestão:** ${sugestao}`)
  .setFooter(`Clique em apenas um emoji para deixar sua opinião!`)




  message.channel.send({ embed })
    .then(function(msg) {
      msg.react("❎");
      msg.react("❌");
    });
  message.delete();
  }
};
