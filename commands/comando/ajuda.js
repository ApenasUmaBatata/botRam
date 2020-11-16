const Discord = require("discord.js"); // puxando a livraria 'discord.js'
module.exports = {
  config: {
    name: "ajuda",
    aliases: ["comandos", "help"]
  },
  run: async (bot, message, args) => {
    await message.react("✅"); // setando a base
    // avisando sobre a embed de ajuda na DM
    const prefix = require("../../config.json");
    let inline = true;
    let embed = new Discord.MessageEmbed()
      .setTitle(`Eu escutei por um pedido de ajuda?`)
      .setColor("RED")
      .addField("💠|Comandos", `\`ajuda, user, sugestão...\``)
      .addField("🔅|Administração", `\`limpar, kick...\``)
      .addField("🌀|Entretenimento", `\`jokenpo, piada, d6/d20...\``);
    message.channel.send({ embed }).then(msg => {
      // evento para reagir a mensagem
      msg.react("💠").then(r => {
        msg.react("🔅").then(r => {
          msg.react("🌀").then(r => {
            msg.react("🔙").then(r => {});
          });
        });
      });
      // filtros de cada reação, para configurar a informação do autor
      const ComandosFilter = (reaction, user) =>
        reaction.emoji.name === "💠" && user.id === message.author.id;
      const AdministraçãoFilter = (reaction, user) =>
        reaction.emoji.name === "🔅" && user.id === message.author.id;

      const EntretenimentoFilter = (reaction, user) =>
        reaction.emoji.name === "🌀" && user.id === message.author.id;
      const BackFilter = (reaction, user) =>
        reaction.emoji.name === "🔙" && user.id === message.author.id;
      // coletores de cada reação, para ver confirmar tal membro
      const Comandos = msg.createReactionCollector(ComandosFilter);
      const Administração = msg.createReactionCollector(AdministraçãoFilter);
      const Entretenimento = msg.createReactionCollector(EntretenimentoFilter);
      const Back = msg.createReactionCollector(BackFilter);
      Comandos.on("collect", r2 => {
        // criando um evento, caso o membro clique nessa reação, e todos são iguais!
        embed = new Discord.MessageEmbed()
          .setTitle(`💠|Comandos | Prefixo = ${prefix}`)
          .addField(`\`ajuda\``, `Mostra os comandos disponíveis!`, inline)
          .addField(`\`botinfo\``, `Mostra as informações sobre o bot!`, inline)
          .addField(
            `\`svinfo\``,
            `Mostra as informações sobre o servidor!`,
            inline
          )
          .addField(
            `\`user\``,
            `Mostra as informações de um membro (marque alguem)!`,
            inline
          )
          .addField(`\`ping\``, `Mostra a conexão com o servidor!`, inline)
          .addField(`\`sorteio\``, `Faz um sorteio no servidor!`, inline)
          .addField(
            `\`sugestão\``,
            `Envie uma sugestão para o SrBatata#5199 adicionar no bot!`,
            inline
          )
          .addField(
            `\`bug\``,
            `Envie um problema encontrado no bot para o SrBatata#5199!`,
            inline
          )
          .addField(
            `\`painel\``,
            `Mostra as configurações ativas no servidor!`,
            inline
          )
          .setColor("RANDOM");
        msg.edit(embed);
      });
      Administração.on("collect", r2 => {
        embed = new Discord.MessageEmbed()
          .setTitle(`🔅|Administração | Prefixo = ${prefix}`)
          .addField(`\`limpar\``, `Limpa uma quantidade de mensagens!`, inline)
          .addField(`\`kick\``, `Expulsa um membro do grupo!`, inline)
          .addField(`\`Enquete\``, `Cria uma enquete no grupo!`, inline)
          .addField(`\`Sorteio\``, `Cria um sorteio no grupo!`, inline)
          .setColor("RANDOM");
        msg.edit(embed);
      });
      Entretenimento.on("collect", r2 => {
        embed = new Discord.MessageEmbed()
          .setTitle(`🌀|Entretenimento | Prefixo = ${prefix}`)
          .addField(`\`d6\``, `Rode o dado de 6 lados!`, inline)
          .addField(`\`d20\``, `Rode o dado de 20 lados!`, inline)
          .addField(`\`flip\``, `Jogue a moeda para cima!`, inline)
          .addField(`\`piada\``, `O bot lhe conta uma piada!`, inline)
          .addField(
            `\`jokenpo\``,
            `Brinca de pedra, papel e tesoura com o bot!`,
            inline
          )
          .addField(`\`abraçar\``, `Abraça alguém!`, inline)
          .addField(`\`atirar\``, `Atira em alguém!`, inline)
          .addField(`\`desviar\``, `Desvia do tiro de alguém!`, inline)
          .addField(`\`caçar\``, `Começa uma caçada contra alguém!`, inline)
          .addField(
            `\`ship\``,
            `Ve a chance que tem de um casal dar certo!`,
            inline
          )
          .addField(
            `\`conquista\``,
            `Cria uma conquista no estilo menescraft!`,
            inline
          )
          .setColor("RANDOM");
        msg.edit(embed);
      });
      Back.on("collect", r2 => {
        embed = new Discord.MessageEmbed()
          .setTitle(`Eu escutei por um pedido de ajuda?`)
          .setColor("RANDOM")
          .addField("💠|Comandos", `\`ajuda, user, ...\``)
          .addField("🔅|Administração", `\`limpar, kick...\``)
          .addField("🌀|Entretenimento", `\`jokenpo, piada, d6/d20...\``);
        msg.edit(embed);
      });
    });
  }
};
