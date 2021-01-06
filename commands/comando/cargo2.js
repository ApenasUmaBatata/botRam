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

    const user = message.author.username;
    const cor = args[0];
    let choices = [
      "verde",
      "azul",
      "vermelho",
      "rosa",
      "amarelo",
      "roxo",
      "preto",
      "branco"
    ];
    if (choices.includes(args[0].toLowerCase())) {
      if (args[0].toLowerCase() == "verde") {
        let role = message.guild.roles.cache.find(r => r.name === "verde");
        message.member.roles.add(role);
        message.delete();
        return message.channel.send(`${user} voce ganhou a cor ${cor}`,1);
      }
      if (args[0].toLowerCase() == "azul") {
        let role = message.guild.roles.cache.find(r => r.name === "azul",2);
        message.member.roles.add(role);
        message.delete();
        return message.channel.send(`${user} voce ganhou a cor ${cor}`,3);
      }
      if (args[0].toLowerCase() == "vermelho") {
        let role = message.guild.roles.cache.find(r => r.name === "vermelho");
        message.member.roles.add(role);
        message.delete();
        return message.channel.send(`${user} voce ganhou a cor ${cor}`,4);
      }
      if (args[0].toLowerCase() == "rosa") {
        let role = message.guild.roles.cache.find(r => r.name === "rosa");
        message.member.roles.add(role);
        message.delete();
        return message.channel.send(`${user} voce ganhou a cor ${cor}`,5);
      }
      if (args[0].toLowerCase() == "amarelo") {
        let role = message.guild.roles.cache.find(r => r.name === "amarelo");
        message.member.roles.add(role);
        message.delete();
        return message.channel.send(`${user} voce ganhou a cor ${cor}`,6);
      }
      if (args[0].toLowerCase() == "roxo") {
        let role = message.guild.roles.cache.find(r => r.name === "roxo");
        message.member.roles.add(role);
        message.delete();
        return message.channel.send(`${user} voce ganhou a cor ${cor}`,7);
      }
      if (args[0].toLowerCase() == "preto") {
        let role = message.guild.roles.cache.find(r => r.name === "preto");
        message.member.roles.add(role);
        message.delete();
        return message.channel.send(`${user} voce ganhou a cor ${cor}`,8);
      }
      if (args[0].toLowerCase() == "branco") {
        let role = message.guild.roles.cache.find(r => r.name === "branco");
        message.member.roles.add(role);
        message.delete();
        return message.channel.send(`${user} voce ganhou a cor ${cor}`,9);
      }
    } else {
      message.delete();
      return message.channel.send(
        `Por favor ${user} inclua apenas as cores que estiver na lista!`
      );
    }
  }
};
