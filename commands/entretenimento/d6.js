module.exports = {
    config: {
      name: "d6",
      aliases: ["dado6"]
    },
    run: async (bot, message, args) => {
      await message.react("✅"); // setando a base
  
      // puxando um chao, com sistema randomico (de 6 a 1)
      var numero = Math.floor(Math.random() * 6) + 1;
  
      message.channel.send(`Você jogou o dado e... Ele caiu em: ${numero}`);
    }
  };
  