module.exports = {
  config: {
    name: "d20",
    aliases: ["dado20"]
  },
  run: async (message) => {
    //await message.react("✅");

    // puxando um numero randomico que pode cair de 1 a 20 (como um dado de 20 lados)
    var numero = Math.floor(Math.random() * 20) + 1;

    message.channel.send(`Você jogou o dado e...`).then(message => {
      setTimeout(function() {
        message.edit(`⠀\n Ele caiu em: ${numero}`); //enviando a mensagem e em 3 segundos editando para o resultado
      }, 3000);
    });
  }
};
