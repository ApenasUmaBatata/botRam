const {MessageEmbed} = require("discord.js");
const {prefix} = require("../../arquivosjson/config.json");

module.exports = async (bot, message, args) => {
  //caso o membro escreva Bom dia/tarde/noite no chat o bot irá responder------------
  if (message.content.toLowerCase() == 'bom dia') {
    const aut = message.author;
  message.reply(`Bom dia ${aut}`);
}
  if (message.content.toLowerCase() == 'boa tarde') {
    const aut = message.author;
  message.reply(`Boa tarde ${aut}`);
}
  if (message.content.toLowerCase() == 'boa noite') {
    const aut = message.author;
  message.reply(`Boa noite ${aut}`);
  }

 //------------------------------------

  //se o bot for marcado @Ram ou a palavra Ram for escrita ela respondera com uma mensagem
  if (message.mentions.has(bot.user.id)) {
    const embed = new MessageEmbed()//criando uma embed
      .setAuthor(`Você está perdido? Estou aqui para te ajudar!`, bot.user.avatarURL())
      .setFooter(message.author.username, message.author.avatarURL())
      .setColor("#9F7DD3")
      .setDescription(`Olá jovem guerreiro, estava em minha caminhada matinal e escutei por seus gritos, se estiver perdido use \`${prefix}ajuda\`. Lembrando, uma viagem pode ser muito perigosa se você estiver sozinho!`);
    message.reply({ embeds: [embed] });//enviando embed de resposta sobre a marcação dela
  }

  //se o comando nao existir na lista do bot, ele ira enviar uma mensagem aleatoria falando que nao existe o comando
  const frases = [
    `Não reconheci esse comando, de uma olhada em \`${prefix}ajuda\`!`,
    `Esse comando pode não existir, de um olhada em \`${prefix}ajuda\`!`,
  ]
  let fras = frases[Math.floor(Math.random() * frases.length)]

  //puxando o prefixo para quando uma mensagem for mandada com ele e com comando existente, o bot irá esponder a menssagem com o comando
  var args = message.content.substring(prefix.length).split(" ");
  let cmd = args.shift().toLowerCase();
  if (message.author.bot || !message.guild || !message.content.startsWith(prefix)) return; // se o author for bot ou a mensagem for DM o bot nao responderá
  let command = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
  if (command) {
    command.run(bot, message, args);
    const ebd = new MessageEmbed()//criando uma embed
      .setDescription(`\`${message.author.username}#${message.author.discriminator}\` executou \`${cmd}\` em \`${message.guild.name}\``)
      .setFooter(`Executado dia `)
      .setTimestamp()
    bot.channels.cache.get("878417697233338418").send({embeds: [ebd]}) //enviando uma embed no canal setado sempre que um comando for executado
    /**const random = Math.floor(Math.random() * (10 - 1) + 1); // Um sistema randômico
    if (random === 2) {
      embd = new MessageEmbed()
          .setDescription(`só um teste`)
      message.reply({ embeds: [embd] });
    }**/
  } else {
    message.reply(`${fras}`);
  }
};

// if (!message.content.startsWith(config.prefix)) return;
