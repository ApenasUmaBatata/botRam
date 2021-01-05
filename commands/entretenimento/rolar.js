module.exports = {
    config: {
      name: "roll",
      aliases: ["rolar"]
    },
    run: async (bot, message, args) => {
      //await message.react("✅"); // setando a base
  
      // puxando um chao, com sistema randomico (de 6 a 1)
      var d6 = Math.floor(Math.random() * 6) + 1;
      var d20 = Math.floor(Math.random() * 20) + 1;

      var d100 = Math.floor(Math.random() * 100) + 1;
  
      message.channel.send(`Você jogou o dado e... Ele caiu em: ${numero}`);
    }
  };
  