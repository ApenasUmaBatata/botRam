const Discord = require("discord.js");

module.exports = {
  config: {
    name: "sorte",
    aliases: ["sorteio"]
  },
  run: async (bot, message, args) => {
    await message.react("✅");
    var list = [
      "Ganhou 24 moedas",
      "Ganhou 50 moedas",
      "Você foi sortudo e acabou da ganhar 1000 moedas",
      "Haha sifudeu otário ganhou um total de 0 moedas",
      "Parabéns você ganhou um diamante",
      "Parabéns você acabou de ganhar o ultra, mega, raro, master, espetacular, cargo secreto!",
      "nada",
      "nada",
      "vazio extremo",
      "nadica de nada",
      "um pedaço de queijo",
      "achou uma bala embaixo do sofá",
      "nada",
      "vento"
    ];

    let altstatus = list[Math.floor(Math.random() * list.length)];
    if (
      altstatus ===
      "Parabéns você acabou de ganhar o ultra, mega, raro, master, espetacular, cargo secreto!"
    ) {
      message.member.roles.add("702385209043320833");
    }

    message.channel.send(
      `Olá ${message.author} vamos ver se você está com sorte:\n ${altstatus}`
    );
  }
};
