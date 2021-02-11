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
    ]; //criando uma lista de escolhas de cargos pra mandar em lista no chat 
    if (!args[0]) {
      return message.channel.send(`Por favor escolha uma cor! ${choices}`);
    }
    // se o a pessoa nao escolher nenhuma cor, ou o comando estiver vazio (exemplo: Ram cargo )o bot ira responder com a mensagem a cima

    const user = message.author.username; //puxando o username do altor para mandar junto a mensagem
    const cor = args[0]; //puxando o argumento da cor (vermelho e afins)
      if (args[0].toLowerCase() == "verde") {
        let role = message.guild.roles.cache.find(r => r.name === "verde"); //procurando o cargo na lista de cargos do servidor (o cargo tem que ser criado no servidor)
        message.member.roles.add(role); //setando o cargo escolhido
        message.delete(); //apagando a mensagem do autor
        return message.channel.send(`${user} voce ganhou a cor ${cor}!`); //mandando no chat a cor que a pessoa escolheu
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
      //se na mensagem conter algo que nao tenha em "choices" o bot irá responder com a seguinte mensagem
     else {
      message.delete();
      return message.channel.send(
        `${user} por favor inclua apenas as cores que estiver na lista!`
      );
    }
  }
};
