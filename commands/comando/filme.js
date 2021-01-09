const Discord = require("discord.js");
module.exports = {
  config: {
    name: "sfilme",
    aliases: [""]
  },
  run: async (bot, message, args) => {
    if (!args[0]) {
      let eb = new Discord.MessageEmbed()
        .setTitle(`Exemplo de uso:`)
        .setDescription(
          `Ram sfilme bob-esponja moranguinho vovo-zona o-bom-dinossauro \n \`OBS-1: filmes que contenham nome composto, usar ao invés de "espaço" colocar -\` \n \`OBS-2: na troca de um filme para o outro usar "espaço"\` \n \`OBS-3: Limite máximo de 4 filmes!\``
        );
      return message.channel.send(eb);
      ;
    }
    message.delete()
    
    var a1 = args[0];
    var a2 = args[1];
    var a3 = args[2];
    var a4 = args[3];

    let embed = new Discord.MessageEmbed()
      .setTitle(`Filmes sugeridos:`)
      .setColor("RED")
      .setDescription(
        ` <:um:797245701578555474>- ${a1} \n <:dois:797246681384353802>- ${a2} \n <:tres:797248664011669504>- ${a3} \n ${a4}`
      )
      .setFooter(`Clique em um emoji para deixar sua opinião!`);
    message.channel.send(embed).then(function(msg) {
      msg.react("<:um:797245701578555474>");
      msg.react("<:dois:797246681384353802>");
      msg.react("<:tres:797248664011669504>");
      msg.react("<:dois:797246681384353802>");
    });
    message.delete();
  }
};
