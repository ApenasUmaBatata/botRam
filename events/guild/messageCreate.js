const Discord = require("discord.js");
const config = require("../../config.json");

module.exports = async (bot, message) => {
// se o author for bot ou a mensagem for DM o bot nao responderá
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  //caso o membro escreva Bom dia/tarde/noite no chat o bot irá responder------------
  if (message.content.toLowerCase() == 'bom dia') {
    const aut = message.author;
  message.channel.send(`Bom dia ${aut}`);
}
  if (message.content.toLowerCase() == 'boa tarde') {
    const aut = message.author;
  message.channel.send(`Boa tarde ${aut}`);
}
  if (message.content.toLowerCase() == 'boa noite') {
    const aut = message.author;
  message.channel.send(`Boa noite ${aut}`);
  }
 //------------------------------------

  let prefix = config.prefix; //puxando prefixo do bot
  //se o bot for marcado @Ram ou a palavra Ram for escrita ela respondera com uma mensagem
  if (message.content === "Ram" || message.content === "<@!705547264537657465>") {
    let bicon = bot.user.displayAvatarURL();
    const embed = new Discord.MessageEmbed()//criando uma embed
      .setThumbnail(bicon)
      .setFooter(message.author.username, message.author.displayAvatarURL())
      .setTitle("Você está perdido? Estou aqui para te ajudar!")
      .setColor("#9F7DD3")
      .setDescription(`Olá jovem guerreiro, estava em minha caminhada matinal e escutei por seus gritos, se estiver perdido use \`${prefix}ajuda\`. Lembrando, uma viagem pode ser muito perigosa se você estiver sozinho!`);
    message.channel.send({ embeds: [embed] });//enviando embed de resposta sobre a marcação dela
  }

  //se o comando nao existir na lista do bot, ele ira enviar uma mensagem aleatoria falando que nao existe o comando
  const frases = [
    `Não reconheci esse comando, de uma olhada em \`${prefix}ajuda\`!`,
    `Esse comando pode não existir, de um olhada em \`${prefix}ajuda\`!`,
  ]
  let fras = frases[Math.floor(Math.random() * frases.length)]

  //puxando o prefixo para quando uma mensagem for mandada com ele e com comando existente, o bot irá esponder a menssagem com o comando
  var args = message.content.substring(config.prefix.length).split(" ");
  if (!message.content.startsWith(config.prefix)) return;
  let cmd = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  let command = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
  if (command) {
    command.run(bot, message, args);
    const ebd = new Discord.MessageEmbed()//criando uma embed
      .setDescription(`\`${message.author.username}#${message.author.discriminator}\` executou \`${cmd}\` em \`${message.guild.name}\``)
      .setFooter(`Executado dia `)
      .setTimestamp()
    bot.channels.cache.get("878417697233338418").send({embeds: [ebd]})
  } else {
    message.channel.send(`${fras}`);
  }
};

// if (!message.content.startsWith(config.prefix)) return;
