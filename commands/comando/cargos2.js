const Discord = require("discord.js");
module.exports = {
  config: {
    name: "cargo2",
    aliases: [""]
  },
  run: async (bot, message, args) => {
    if (!args[0]) {
      return message.channel.send(`Por favor escolha uma cor!`);
    }
    const cor = args[0];
    let choices = ["verde", "azul", "vermelho", "rosa", "amarelo", "roxo", "preto", "branco"];
    let role = message.guild.roles.cache.find(r => r.name === "verde","azul","vermelho")
    if (choices.includes(args[0].toLowerCase())) {
      if (args[0].toLowerCase() == "verde") {
        message.member.roles.add(role);
        return message.channel.send(`Voce ganhou a cor ${cor}`);
      }
      if (args[0].toLowerCase() == "azul") {
        message.member.roles.add(role);
        return message.channel.send(`Voce ganhou a cor ${cor}`);
      }
      
    } else {
      return message.channel.send(
        "Por favor inclua apenas uma das cores que estiver na lista!"
      );
    }
  }
};
