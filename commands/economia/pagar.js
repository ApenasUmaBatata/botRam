const Discord = require("discord.js"); // puxando a livraria discord.js
const db = require("quick.db"); // puxando o npm quick.db (uma database, para instalar, utilize: npm i quick.db)

module.exports = {
  config: {
    name: "sair",
    aliases: ["demitir", "demissão"]
  },
  run: async (bot, message, args, tools) => {
    await message.react("✅");
    
    const autor = message.author.username;

    let member = message.mentions.users.first() || message.author; // puxando um usuário para quem o autor irá pagar

    let money = db.get(`money_${message.author.id}`); // puxando o 'money' da database]
    if (!member) {
      // caso o autor não mencione um usuário
      return message.reply("mencione o usuário que deseja enviar");
    }

    if (member === message.author) {
      // caso o usuário que o autor mencione seja ele mesmo
      return message.reply(`mencione outro usuário!`);
    }

    if (!args[1]) {
      // caso ele não escreva a quantia
      return message.reply("escreva a quantia");
    }

    if (args[1] < 1) {
      // caso a quantia seja menor que um (1)
      return message.reply(`so é possivel pagamentos acima de **🔆 1** moeda sagrada`);
    }

    if (message.content.includes("-")) {
      // para que não ocorra um futuro abuso, pois menos com menos gera mais
      return message.reply(`você está tentando abusar?`);
    }

    if (isNaN(args[1])) {
      // caso o que o autor escreva não seja um número
      return message.channel.send(`isso não é um número :thinking:`);
    }

    if (money < args[1]) {
      // caso o autor não possua a quantia que ele deseja apostar
      return message.channel.send(`:x: Você não possui **🔆 ${args[1]}** moedas sagradas!`);
    }

    message.channel.send(
      `${autor} Pagou um total **🔆${args[1]}** moedas sagradas para **${
        member.username
      }**!`
    ); // avisando que pagou

    db.add(`money_${member.id}`, args[1]); // adicionando na database o 'money' do usuário
    db.subtract(`money_${message.author.id}`, args[1]); // removendo da database o 'money' do autor
  }
};
