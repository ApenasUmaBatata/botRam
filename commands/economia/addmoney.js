const Discord = require("discord.js"); // Puxando a livraria Discord.js
const db = require("quick.db"); // Puxando a Database *Instale utilizando: npm i quick.db

module.exports = {
  config: {
    name: "addmoney",
    aliases: ["addcoin", "+dinheiro"]
  },
  run: async (bot, message, args, tools) => {
    //await message.react("✅");

    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply(`você precisa da permissão \`ADMINISTRADOR\`.`);

    let membro = message.mentions.users.first() || message.author; // caso ele não mencione ninguém, vai ser pra si mesmo
    var conta = await db.get(`money_${membro.id}`); // puxando o sistema que criamos para definir a quantia que o usuário possui

    var quantia = args[0]; // criando uma variável para saber quanto o usuário deseja adicionar
    if (isNaN(quantia)) return message.channel.send(`isso não é um número!`); // caso o que ele escreva não seja número
    if (!quantia)
      return message.channel.send(`escreva o quanto quer adicionar!`); // caso ele não escreva nada
    if (quantia <= 0)
      return message.reply(`a quantia deve ser maior que zero!`); // caso o que ele bote, seja menor que zero

    // puxando o membro que iremos enviar

    message.channel.send(
      `${message.author.username} adicionou **🔆 ${quantia}** moedas sagradas para **${membro.username}**!`
    );
    db.add(`money_${membro.id}`, args[0]); // removendo da database, a quantia
  }
};
