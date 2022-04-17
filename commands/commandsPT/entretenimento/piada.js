const diciojs = require("dicionario.js");

module.exports = {
  config: {
    name: "piada",
  },
  run: async (bot, message, args) => {
    const piada = diciojs.piada();
    message.reply(
      `**Q:** ${piada.properties.pergunta}\n**R:** ${piada.properties.resposta}`
    );
  },
};
