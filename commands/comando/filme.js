const Discord = require("discord.js");
module.exports = {
  config: {
    name: "sfilme",
    aliases: [""]
  },
  run: async (bot, message, args) => {
    if (!args[0]){
           return message.channel.send(`⠀\n  `)
        }
    
    let embed = new Discord.MessageEmbed()
      .setTitle(`ENQUETE`)
      .setColor("GREEN")
      .setDescription(``)
      .setFooter(`Clique em um emoji para deixar sua opinião!`)
    message.channel.send(embed).then(function(msg) {
      msg.react("<:like1:795044874515906602>");
      msg.react("<:dislike1:795044933605785600>");
    });
    message.delete();
  }
}