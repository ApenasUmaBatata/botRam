const { MessageEmbed } = require("discord.js");

module.exports = {
  config: {
    name: "enquete"
  },
  run: async (bot, message, args) => {
    if (!message.member.permissions.has(["ADMINISTRATOR"])) {
      return message.reply(`Esse comando é apenas para \`Administradores\`.`);
    }

    let argsresult; //criando a categoria do argumento
    let mChannel = message.mentions.channels.first(); //puxando um canal que o membro marcar (para assim a mensagem ser mandada no canal)
    if (mChannel) {
      argsresult = args.slice(1).join(" "); //puxando o argumento da pessoa
      let embed = new MessageEmbed()
        .setTitle(`ENQUETE`)
        .setColor("RANDOM")
        .setDescription(argsresult)
        .setFooter(`Clique em um emoji para deixar sua opinião!`)
        .setAuthor(`Comando executado por: ${message.author.username}`, message.author.avatarURL())
      mChannel.send({ embeds: [embed] }).then(function (msg) {
        msg.react("<:CyclopsYesPillow:805298824725528586>");
        msg.react("<:CyclopsNoPillow:805298794714365952>");
      }); //enviando o argumento no canal marcado pela pessoa
    } else {
      argsresult = args.join(" ");
      let embed = new MessageEmbed()
        .setTitle(`ENQUETE`)
        .setColor("RANDOM")
        .setDescription(argsresult)
        .setFooter(`Clique em um emoji para deixar sua opinião!`)
        .setAuthor(`Comando executado por: ${message.author.username}`, message.author.avatarURL())
      message.channel.send({ embeds: [embed] }).then(function (msg) {
        msg.react("<:CyclopsYesPillow:805298824725528586>");
        msg.react("<:CyclopsNoPillow:805298794714365952>");
      }); //se a pessoa nao tiver selecionado um canal, a mensagem sera enviada no canal que o autor escreveu
    }
    message.delete();
  }
};
