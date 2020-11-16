module.exports = {
  config: {
    name: "limpar",
    aliases: ["clean", "c"]
  },
  run: async (bot, message, args) => {
    await message.react("✅"); // setando as bases

    if (
      !message.member.hasPermission("MANAGE_MESSAGES") &&
      message.author.id != "691447707134328832"
    ) {
      return message.reply(
        `Você precisa da permissão \`Gerenciar Mensagens\`.`
      );
      //seu codigo
    } // caso o autor não possua a permissão 'GERENCIAR_MENSAGENS', vamos avisar para ele
    let clean = args.slice(0).join(" "); // puxando uma quantidade de numero, partindo dos argumentos zero
    // caso o membro bote um numero menor que 2, ou maior que 100, pediremos um numero acima
    if (clean < 1 || clean > 100)
      return message.reply(`escreva um número de: \`1 à 100\`!`);
    // caso o membro não escreva um numero
    if (args.length === 0)
      return message.reply(`escreva um número de: \`1 à 100\`!`);
    try {
      // utilizando a function 'try', traduzindo: tentar
      message.channel.bulkDelete(clean); // tentaremos deletar a quantia que o membro pediu
      // enviando uma embed
      const embed = {
        title: `Um Anão acabou de roubar as mensagens!`,
        description: `Ele levou um total de \`${clean}\` mensagens.`,
        color: `RANDOM`,
        image: {
          url: "http://49.media.tumblr.com/tumblr_lpa3tsw0gt1qhq9wyo4_r1_500.gif"
        },
        footer: {
          text: `Responsável: ${message.author.username}`
        }
      };

      message.channel.send({ embed });
      message.delete();
    } catch (e) {
      // procurando um erro
      console.log(e); // caso consiga encontrar, daremos o erro
    }
  }
};
