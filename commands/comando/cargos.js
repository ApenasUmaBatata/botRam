const Discord = require("discord.js");
module.exports = {
  config: {
    name: "cargo",
    aliases: [""]
  },
  run: async (bot, message, args) => {
    if (!args[0]) {
      return message.channel.send(`⠀\n Porfavor escolha uma cor!`);
    }
    let choices = ["verde", "azul", "vermelho", "rosa"];
    if (choices.includes(args[0].toLowerCase())) {
      if (args[0].toLowerCase() == "verde") {
        let role = message.guild.roles.cache.find(r => r.name === "verde");
        message.member.roles.add(role);
        return message.channel.send("Voce ganhou a cor verde!");
      }
      if (args[0].toLowerCase() == "azul") {
        let role = message.guild.roles.cache.find(r => r.name === "azul");
        message.member.roles.add(role);
        return message.channel.send("Voce ganhou a cord azul!");
      }
      if (args[0].toLowerCase() == "vermelho") {
        let role = message.guild.roles.cache.find(r => r.name === "vermelho");
        message.member.roles.add(role);
        return message.channel.send("Voce ganhou a cor vermelho!");
      }
      if (args[0].toLowerCase() == "rosa") {
        let role = message.guild.roles.cache.find(r => r.name === "rosa");
        message.member.roles.add(role);
        return message.channel.send("Voce ganhou a cor rosa!");
      }
    } else {
      return message.channel.send(
        "Porfavor inclua apenas pedra, papel ou tesoura!"
      );
    }
  }
};
