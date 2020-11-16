const db = require("quick.db"); // Puxando a nossa Database *Instale utilizando: npm i quick.db --save
const Discord = require("discord.js"); // puxando a livraria Discord.js

module.exports = {
  config: {
    name: "apostar",
    aliases: ["aposta", "sorte"]
  },
  run: async (bot, message, args, tools) => {
    await message.react("✅");

    var money = await db.get(`money_${message.author.id}`); // Puxando da Database, a quantia de 'money' do usuário

    var numeroaposta = parseInt(args[0]); // Definindo uma variável para o número que o usuário vai apostar
    if (!numeroaposta)
      return message.reply("escreva a quantia que deseja apostar!"); // Caso o usuário não escreva nada
    if (isNaN(numeroaposta))
      return message.reply("isso não é um número :thinking:"); // Caso ele não coloque um número

    if (numeroaposta > money) {
      // Caso o número que o usuário deseja apostar seja maior que o que ele possui na database
      return message.channel.send(`:x: Você não possui **R$ ${numeroaposta}**`);
    }

    if (message.content.includes("-")) {
      // Caso o usuário tente botar um - (menos) no número (isso pode gerar um bug, que mesmo ele perdendo, irá ganhar, pois menos + menos é mais (+))
      return message.reply(`hmmmm, quer abusar safadenho?`);
    }
    var random = Math.floor(Math.random() * (5 - 2) + 2); // Um sistema randômico
    if (random === 3) {
      // caso esse sistema caia em 3, o usuário terá ganhado

      message.channel.send(
        `Você apostou **🔆 ${numeroaposta}** moedas sagradas e **GANHOU**!`
      ); // fazendo uma conta, puxando o 'money' que o usuário tinha no começo mais o que ele ganhou
      db.add(`money_${message.author.id}`, numeroaposta); // adicionando na conta do usuário o que ele apostou
    } else {
      // caso o número randômico não caia em três (3)

      message.channel.send(
        `Você apostou **🔆 ${numeroaposta}** moedas sagradas e **PERDEU**!`
      ); // fazendo uma conta, puxando o 'money' que ele começou menos o que ele perdeu na aposta
      db.subtract(`money_${message.author.id}`, numeroaposta); // removendo o que ele apostou
    }
  }
};
