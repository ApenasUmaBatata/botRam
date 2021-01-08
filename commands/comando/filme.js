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
    
    var film = args.slice(0).join("1 \n 2")
    var a1 = args[0]
    var a2 = args[1]
    var a3 = args[2]
    var a4 = args[3]
    
    let embed = new Discord.MessageEmbed()
      .setTitle(`Filmes sugeridos:`)
      .setColor("RED")
      .setDescription(`${a1} ${a2} ${a3} ${a4}`)
      .setFooter(`Clique em um emoji para deixar sua opinião!`)
    message.channel.send(embed)
      //.then(function(msg) {
      //msg.react("<:like1:795044874515906602>");
      //msg.react("<:dislike1:795044933605785600>");
    //});
    message.delete();
    if (a2 === null) {
      return
    }
  }
}