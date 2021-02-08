const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  config: {
    name: "addpiada",
    aliases: ["apiada"]
  },
  run: async (bot, message, args, member) => {
  
  let bicon = bot.user.displayAvatarURL();
    if (!args[0]) {
      let eb = new Discord.MessageEmbed()
        .setThumbnail(bicon)
        .setDescription(
          `\`Passando pra avisar que voce usou o comando de modo incorreto! Uma sugestão de como usar:\` \n`
        );
      return message.channel.send(eb);
    }
    
    var ar = args.slice(1).join(" ");
    
    db.add(`frase_${message.guild.id}`, ar);
    
    

  }
}
