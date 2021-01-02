const Discord = require("discord.js");
const config = require("../../config.json");
const falas = require("../../falas.json");

module.exports = async (bot, message) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let responseObject = falas;
  if (responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }
  let prefix = config.prefix;
  if (
    message.content === "Ram" ||
    message.content === "<@!705547264537657465>"
  ) {
    let bicon = bot.user.displayAvatarURL();
    const embed = new Discord.MessageEmbed()
      .setThumbnail(bicon)
      .setFooter(message.author.username, message.author.displayAvatarURL())
      .setTitle("Você está perdido? Estou aqui para te ajudar!")
      .setColor("#9F7DD3")
      .setDescription(
        `Olá jovem guerreiro, estava em minha caminhada matinal e escutei por seus gritos, se estiver perdido use \`${prefix}ajuda\`. Lembrando, uma viagem pode ser muito perigosa se você estiver sozinho!`
      );
    message.channel.send(embed);
  }
  
  var args = message.content.substring(config.prefix.length).split(" ");
  if (!message.content.startsWith(config.prefix)) return;
  let cmd = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  let command = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
  if (command) {
    command.run(bot, message, args);
  } else {
    message.reply(`não reconheci esse comando 😣`);
  }
};

// if (!message.content.startsWith(config.prefix)) return;
