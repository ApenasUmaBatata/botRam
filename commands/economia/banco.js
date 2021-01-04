const db = require("quick.db"); // Puxando a nossa Database *Instale utilizando: npm i quick.db --save
const Discord = require("discord.js"); // Puxando a livraria Discord.js

module.exports = {
  config: {
    name: "banco",
    aliases: ["money", "saldo", "dinheiro", "carteira"]
  },
  run: async (bot, message, args, tools) => {
    //await message.react("✅");
    // puxando um usuário para mencionar, no caso, de quem queremos ver o 'money'
    let member = message.mentions.users.first() || message.author; // caso não mencione, será o autor

    var quantia = await db.get(`money_${member.id}`); // puxando a quantia de 'money' (nome que definimos) que possui registrado na db
    if (quantia === null) quantia = 0; // para não aparecer 'null' no código, caso o usuário não tenha nenhum 'money', vamos definir como zero (0)

    message.channel.send(
      `**${member.username}** tem **🔆${quantia}** moedas sagradas!`
    ); // mensagem mostrando a quantia de 'money'
  }
};
