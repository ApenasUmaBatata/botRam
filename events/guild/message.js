const Discord = require("discord.js");
const config = require("../../config.json");
const falas = require("../../falas.json");

module.exports = async (bot, message) => {
// se o author for bot ou a mensagem for DM o bot nao responderá
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  
// puxando o arquivo falas para que o bot responda quando uma certa mensagem (escrita pela pessoa e programada no bot) seja respondia (exemplo: pessoa: oi bot: oi)
//OBS1: fazendo explicação aqui do arquivo falas.json, ao lado esquerdo é a mensagem do player (bom dia) ao lado direito a resposta do bot (bom dia amigos) assim para qualquer mensagem que voce colcoar lá
//OBS2: a mensagem enviada pelo autor devera ser igual a escrita no comando exemplo : comando paraleLePipedo autor: paraleLePipedo, essa mensagem nao precisam do uso de prefixo!
  let responseObject = falas;
  if (responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }

  let prefix = config.prefix; //puxando prefixo do bot

  //se o bot for marcado @Ram ela respondera com uma mensagem
  if (
    message.content === "Ram" ||
    message.content === "<@!705547264537657465>"
  ) {
    let bicon = bot.user.displayAvatarURL();
    const embed = new Discord.MessageEmbed()//criando uma embed
      .setThumbnail(bicon)
      .setFooter(message.author.username, message.author.displayAvatarURL())
      .setTitle("Você está perdido? Estou aqui para te ajudar!")
      .setColor("#9F7DD3")
      .setDescription(
        `Olá jovem guerreiro, estava em minha caminhada matinal e escutei por seus gritos, se estiver perdido use \`${prefix}ajuda\`. Lembrando, uma viagem pode ser muito perigosa se você estiver sozinho!`
      );
    message.channel.send(embed);//enviando embed de resposta sobre a marcação dela
  }

  //se o comando nao for existente na lita do bot, ele ira enviar uma mensagem aleatoria falando que nao existe o comando
  const frases = [
    `Não reconheci esse comando, de uma olhada em \`${prefix} comandos\`!`,
    `Esse comando pode não existir, de um olhada em \`${prefix} comandos\`!`,
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
  } else {
    message.channel.send(`${fras}`);
  }
};

// if (!message.content.startsWith(config.prefix)) return;
