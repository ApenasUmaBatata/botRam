const Discord = require("discord.js");

module.exports = {
  config: {
    name: "enquete",
    aliases: ["Enquete"]
  },
  run: async (bot, message, args) => {
    if (!message.member.hasPermission(["ADMINISTRATOR"])) {
      return message.reply(`Esse comando é apenas para \`Administradores\`.`);
    }

    let argsresult; //criando a categoria do argumento
    let mChannel = message.mentions.channels.first(); //puxando um canal que o membro marcar (para assim a mensagem ser mandada no canal)
    if (mChannel) {
      argsresult = args.slice(1).join(" "); //puxando o argumento da pessoa
      let embed = new Discord.MessageEmbed()
        .setTitle(`ENQUETE`)
        .setColor("RANDOM")
        .setDescription(argsresult)
        .setFooter(`Clique em um emoji para deixar sua opinião!`);
      mChannel.send(embed).then(function(msg) {
        msg.react("<:CyclopsYesPillow:805298824725528586>");
        msg.react("<:CyclopsNoPillow:805298794714365952>");
      }); //enviando o argumento no canal marcado pela pessoa
    } else {
      argsresult = args.join(" ");
      let embed = new Discord.MessageEmbed()
        .setTitle(`ENQUETE`)
        .setColor("RANDOM")
        .setDescription(argsresult)
        .setFooter(`Clique em um emoji para deixar sua opinião!`);
      message.channel.send(embed).then(function(msg) {
        msg.react("<:CyclopsYesPillow:805298824725528586>");
        msg.react("<:CyclopsNoPillow:805298794714365952>");
      }); //se a pessoa nao tiver selecionado um canal, a mensagem sera enviada no canal que o autor escreveu
    }
    message.delete();
  }
};
