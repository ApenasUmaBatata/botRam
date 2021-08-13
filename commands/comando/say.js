const Discord = require("discord.js");

module.exports = {
  config: {
    name: "say",
    aliases: ["acc", "announcement", "falar"]
  },
  run: async (bot, message, args) => {
    if (!message.member.permissions.has(["ADMINISTRATOR"])) {
      return message.reply(`Esse comando é apenas para \`Administradores\`.`);
    }

    let argsresult; //criando a categoria do argumento
    let mChannel = message.mentions.channels.first(); //puxando um canal que o membro marcar (para assim a mensagem ser mandada no canal)
    if (mChannel) {
      argsresult = args.slice(1).join(" "); //puxando o argumento da pessoa
      mChannel.send(`${message.author} disse -> \`${argsresult}\``); //enviando o argumento no canal marcado pela pessoa
    } else {
      argsresult = args.join(" ");
      message.channel.send(`${message.author} disse -> \`${argsresult}\``); //se a pessoa nao tiver selecionado um canal, a mensagem sera enviada no canal que o autor escreveu
    }
    message.delete();
  }
};
