module.exports = {
    config: {
      name: "d6",
      aliases: ["dado6"]
    },
    run: async (message) => {
      //await message.react("✅");
  
      // puxando um numero randomico que pode cair de 1 a 6 (como um dado de 6 lados)
      var numero = Math.floor(Math.random() * 6) + 1;
  
      message.channel.send(`Você jogou o dado e... Ele caiu em: ${numero}`); //enviando a mensagem com o resultado
    }
  };
  