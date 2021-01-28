const Discord = require("discord.js");
module.exports = {
  config: {
    name: "sfilme",
    aliases: [""]
  },
  run: async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL();

    if (!args[0]) {
      let eb = new Discord.MessageEmbed()
        .setThumbnail(bicon)
        .setDescription(
          `\`Passando pra avisar que voce usou o comando de modo incorreto! Uma sugestão de como usar:\` \n \`=========================== \` \n \`Ram sfilme bob-esponja moranguinho vovo-zona o-bom-dinossauro\` \n \`=========================== \` \n \`OBS-1: filmes que contenham nome composto, usar ao invés de "espaço" colocar -\` \n \`OBS-2: na troca de um filme para o outro usar "espaço"\` \n \`OBS-3: Limite máximo de 4 filmes!\``
        );
      return message.channel.send(eb);

    }
    var a1 = args[0];
    var a2 = args[1];
    var a3 = args[2];
    var a4 = args[3];
    if (a2=== undefined) {
      a2 = "oi"
    }
    if (a3=== undefined) {
      a3 = "oi"
    }
    if (a4=== undefined) {
      a4 = "oi"
    }
    let embed = new Discord.MessageEmbed()
      .setTitle(`Filmes sugeridos:`)
      .setColor("RED")
      .setDescription(
        ` <:um:797245701578555474>- ${a1} \n <:dois:797246681384353802>- ${a2} \n <:tres:797248664011669504>- ${a3} \n <:quatro:797279343855796244>- ${a4}`
      )
      .setFooter(`Clique em um emoji para deixar sua opinião!`);
    message.channel.send(embed).then(function(msg) {
      msg.react("<:um:797245701578555474>");
      msg.react("<:dois:797246681384353802>");
      msg.react("<:tres:797248664011669504>");
      msg.react("<:quatro:797279343855796244>");
    });
    message.delete();
  }
};
