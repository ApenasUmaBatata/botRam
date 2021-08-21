const diciojs = require('dicionario.js')

module.exports = {
  config: {
    name: "piada",
  aliases: [""]
  },
  run: async (bot, message, args) => {
  const piada = diciojs.piada()
  message.channel.send(`**Q:** ${piada.properties.pergunta}\n**R:** ${piada.properties.resposta}`)
}
}
