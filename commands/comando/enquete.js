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
    if (!args.join(" ")) return message.reply("Escreva algo!");
    let inline = true;

    let embed = new Discord.MessageEmbed()
      .setTitle(`ENQUETE`)
      .setColor("RANDOM")
      .setDescription(`${sugestao}`)
      .setFooter(`Clique em um emoji para deixar sua opinião!`)
    message.channel.send({ embed }).then(function(msg) {
      msg.react("<:like1:795044874515906602>");
      msg.react("<:dislike1:795044933605785600>");
    });
    message.delete();
  }
};
