const Discord = require("discord.js");
module.exports = {
  config: {
    name: "sfilme",
    aliases: [""]
  },
  run: async (bot, message, args) => {
    if (!args[0]) {
      return message.channel.send(``);
    }
    var a1 = args[0];
    var a2 = args[1];
    var a3 = args[2];
    var a4 = args[3];

    let embed = new Discord.MessageEmbed()
      .setTitle(`Filmes sugeridos:`)
      .setColor("RED")
      .setDescription(`${a1} \n ${a2} \n ${a3} \n ${a4}`)
      .setFooter(`Clique em um emoji para deixar sua opinião!`);
    message.channel.send(embed).then(function(msg) {
    msg.react("<:um:797245701578555474>");
    msg.react("<:dois:797246681384353802>");
      msg.react("<:dois:797246681384353802>");
      msg.react("<:dois:797246681384353802>");
    });
    message.delete();
  }
};
