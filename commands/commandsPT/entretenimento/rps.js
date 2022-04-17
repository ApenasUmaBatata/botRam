const { prefix } = require("../../../arquivosjson/config.json");
const { modouso } = require("../../../arquivosjson/importantes.json");

module.exports = {
  config: {
    name: "jokenpo",
  },
  run: async (bot, message, args) => {
    //se a pessoa deixar o argumento 0 em branco a seguinte mensagem será enviada
    if (!args[0]) {
      return message.reply(`\`\`\`Modo correto: ${prefix}${modouso.pt.jokenpo}\`\`\``);
    }
    let choices = ["pedra", "papel", "tesoura"]; //criando uma lista com as possiveiss escolhas

    // se o argumento incluir uma das escolhas o bot irá terminar o comando
    if (choices.includes(args[0].toLowerCase())) {
      let escolhas = choices[Math.floor(Math.random() * choices.length)]; //aleatorizando a resposta do bot
      if (escolhas == "pedra") {
        if (args[0].toLowerCase() == "pedra") {
          return message.channel.send("empate eu tambem tirei pedra");
        }
        if (args[0].toLowerCase() == "papel") {
          return message.channel.send("voce ganhou eu tirei pedra");
        }
        if (args[0].toLowerCase() == "tesoura") {
          return message.channel.send("eu ganhei eu tirei pedra");
        }
      } //se a escolha do autor for pedra o bot ira responder com uma das 3 alternativas (sendo pedra a alternativa de empate)
      if (escolhas == "papel") {
        if (args[0].toLowerCase() == "pedra") {
          return message.channel.send("eu ganhei eu tirei papel");
        }
        if (args[0].toLowerCase() == "papel") {
          return message.channel.send("empate eu tambem tirei papel");
        }
        if (args[0].toLowerCase() == "tesoura") {
          return message.channel.send("voce ganhou eu tirei papel");
        }
      } //se a escolha do autor for papel o bot ira responder com uma das 3 alternativas (sendo papel a alternativa de empate)
      if (escolhas == "tesoura") {
        if (args[0].toLowerCase() == "pedra") {
          return message.channel.send("voce ganhou eu tirei tesoura");
        }
        if (args[0].toLowerCase() == "papel") {
          return message.channel.send("eu ganhei eu tirei tesoura");
        }
        if (args[0].toLowerCase() == "tesoura") {
          return message.channel.send("empate eu tambem tirei tesoura");
        }
      } //se a escolha do autor for tesoura o bot ira responder com uma das 3 alternativas (sendo tesoura a alternativa de empate)
    } else {
      return message.channel.send(
        "Por favor inclua apenas pedra, papel ou tesoura!"
      ); //se a mensagem conter algo a mais alem de pedra/papel/tesoura o bot ira mandar a mensagem
    }
  },
};
