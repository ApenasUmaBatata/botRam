const Discord = require("discord.js");
module.exports = {
  config: {
    name: "cargo",
    aliases: [""]
  },
  run: async (bot, message, args) => {
    let choices = [
      "verde",
      " azul",
      " vermelho",
      " rosa",
      " amarelo",
      " roxo",
      " preto",
      " branco"
    ];
    if (!args[0]) {
      return message.channel.send(`Por favor escolha uma cor! ${choices}`);
    }

    const user = message.author.username;
    const cor = args[0];
      if (args[0].toLowerCase() == "verde") {
        let role = message.guild.roles.cache.find(r => r.name === "verde");
        message.member.roles.add(role);
        message.delete();
        return message.channel.send(`${user} voce ganhou a cor ${cor}!`);
      }
      if (args[0].toLowerCase() == "azul") {
        let role = message.guild.roles.cache.find(r => r.name === "azul");
        message.member.roles.add(role);
        message.delete();
        return message.channel.send(`${user} voce ganhou a cor ${cor}!`);
      }
      if (args[0].toLowerCase() == "vermelho") {
        let role = message.guild.roles.cache.find(r => r.name === "vermelho");
        message.member.roles.add(role);
        message.delete();
        return message.channel.send(`${user} voce ganhou a cor ${cor}!`);
      }
      if (args[0].toLowerCase() == "rosa") {
        let role = message.guild.roles.cache.find(r => r.name === "rosa");
        message.member.roles.add(role);
        message.delete();
        return message.channel.send(`${user} voce ganhou a cor ${cor}!`);
      }
      if (args[0].toLowerCase() == "amarelo") {
        let role = message.guild.roles.cache.find(r => r.name === "amarelo");
        message.member.roles.add(role);
        message.delete();
        return message.channel.send(`${user} voce ganhou a cor ${cor}!`);
      }
      if (args[0].toLowerCase() == "roxo") {
        let role = message.guild.roles.cache.find(r => r.name === "roxo");
        message.member.roles.add(role);
        message.delete();
        return message.channel.send(`${user} voce ganhou a cor ${cor}!`);
      }
      if (args[0].toLowerCase() == "preto") {
        let role = message.guild.roles.cache.find(r => r.name === "preto");
        message.member.roles.add(role);
        message.delete();
        return message.channel.send(`${user} voce ganhou a cor ${cor}!`);
      }
      if (args[0].toLowerCase() == "branco") {
        let role = message.guild.roles.cache.find(r => r.name === "branco");
        message.member.roles.add(role);
        message.delete();
        return message.channel.send(`${user} voce ganhou a cor ${cor}!`);
      }
     else {
      message.delete();
      return message.channel.send(
        `${user} por favor inclua apenas as cores que estiver na lista!`
      );
    }
  }
};
