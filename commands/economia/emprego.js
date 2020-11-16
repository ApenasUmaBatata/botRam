const db = require("quick.db"); // Puxando a nossa DataBase. *Instale utilizando: npm i quick.db --save
const Discord = require("discord.js"); // Puxando a livraria Discord.js

module.exports = {
  config: {
    name: "emprego",
    aliases: ["trabalhos"]
  },
  run: async (bot, message, args, tools) => {
    await message.react("✅");
    var emprego = await db.get(`trabaio_${message.author.id}`); // Puxando o 'trabaio', que iremos utilizar para definir na DB o trabalho dos usuários
    if (emprego === 1)
      return message.reply(`você já tem um emprego! 🐴 Domador`); 
    if (emprego === 2)
      return message.reply(`você já tem um emprego! 🏺 Artesão`); 
    if (emprego === 3)
      return message.reply(`você já tem um emprego! ⚔️ Ferreiro`); 
    if (emprego === 4)
      return message.reply(`você já tem um emprego! 🏹 Armeiro`);

    let embed = new Discord.MessageEmbed() // Criando uma embed
      .setDescription(
        `Nobre guerreiro para voce ter um emprego, primeiro deve escolher ele!\n\n🐴 = Domador\n🏺 = Artesão\n⚔️ = Ferreiro\n🏹 = Armeiro`
      )
      .setColor("RAMDOM");

    message.channel.send(embed).then(msg => {
      // definindo a função 'then' como 'msg'

      msg
        .react("🐴")
        .then(() => msg.react("🏺"))
        .then(() => msg.react("⚔️"))
        .then(() => msg.react("🏹")); // reagindo com dois emojis, referentes à cada emprego

      const filter = (reaction, user) => {
        // Criando um filtro para quem clicou no emoji
        return (
          ["🐴", "🏺", "⚔️", "🏹"].includes(reaction.emoji.name) &&
          user.id === message.author.id
        ); // caso o ID do usuário que clicou, seja igual ao do que puxou, iremos fazer a ação
      };
      msg
        .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] }) // retornnando com as reações
        .then(collected => {
          // mais uma função 'then', definida como 'collected'
          const reaction = collected.first();

          if (reaction.emoji.name === "🐴") {
            // Caso o usuário clique no emoji referente à Programador
            message.reply("Você adquiriu o emprego *Domador*");
            db.add(`trabaio_${message.author.id}`, 1); // iremos adicionar 1 (um) na DB, que iremos usar como Programador
          }
          if (reaction.emoji.name === "🏺") {
            // Agora, caso o usuário clique no outro emoji, referente à Designer
            message.reply("Você adquiriu o emprego *Artesão*");
            db.add(`trabaio_${message.author.id}`, 2); // iremos adicionar 2 (dois) na DB, que iremos definir como Designer
          }
          if (reaction.emoji.name === "⚔️") {
            // Agora, caso o usuário clique no outro emoji, referente à Designer
            message.reply("Você adquiriu o emprego *Ferreiro*");
            db.add(`trabaio_${message.author.id}`, 3); // iremos adicionar 2 (dois) na DB, que iremos definir como Designer
          }
          if (reaction.emoji.name === "🏹") {
            // Agora, caso o usuário clique no outro emoji, referente à Designer
            message.reply("Você adquiriu o emprego *Armeiro*");
            db.add(`trabaio_${message.author.id}`, 4); // iremos adicionar 2 (dois) na DB, que iremos definir como Designer
          }
        })
        .catch(collected => {
          // Lembra da 'then' collected? Pois é! Caso o usuário não clique em 30s, iremos declarar como cancelado
          message.reply("o tempo para escolher excedeu! Tente novamente mais tarde!");
        });
    });
  }
};
