const { MessageEmbed } = require("discord.js"); // puxando a livraria 'discord.js'
const { prefix } = require("../../../arquivosjson/config.json");
const { modouso } = require("../../../arquivosjson/importantes.json");

module.exports = {
  config: {
    name: "modouso",
    aliases: ["uso"]
  },
  run: async (bot, message, args) => {
    if (!args[0]) {
      embed = new MessageEmbed()
        .setAuthor('Sua ajuda chegou', bot.user.avatarURL())
        .addField(`Administração`, `\`limpar\`,\`expulsar\``)
        .addField(`Comandos gerais`, `\`ajuda\`,\`enquete\`,\`filme\`,\`falar\`,\`sorteio\`,\`usuario\``)
        .addField(`Entretenimento`, `\`ação\`,\`calculo\`,\`d6\`,\`d20\`,\`jokenpo\``)
        .setImage('https://data.whicdn.com/images/287575135/original.gif')
        .setFooter(`Digite ' ${prefix}modouso <CommandName>' para detalhes do comando!`, message.author.avatarURL())
        .setColor("#ff00c3");
      message.reply({ embeds: [embed] });
    }
    if (args[0] == "kick") {

      message.reply(`\`\`\`${prefix}${modouso.pt.kick}\`\`\``)
    }
    if (args[0] == "limpar") {

      message.reply(`\`\`\`${prefix}${modouso.pt.limpar}\`\`\``)
    }
    if (args[0] == "ajuda") {

      message.reply(`\`\`\`${prefix}${modouso.pt.ajuda}\`\`\``)
    }
    if (args[0] == "enquete") {
      message.reply(`\`\`\`${prefix}${modouso.pt.enquete}\`\`\``)
    }
    if (args[0] == "filme") {

      message.reply(`\`\`\`${prefix}${modouso.pt.filme}\`\`\``)
    }
    if (args[0] == "say") {

      message.reply(`\`\`\`${prefix}${modouso.pt.say}\`\`\``)
    }
    if (args[0] == "sorteio") {

      message.reply(`\`\`\`${prefix}${modouso.pt.sorteio}\`\`\``)
    }
    if (args[0] == "userinfo") {

      message.reply(`\`\`\`${prefix}${modouso.pt.userinfo}\`\`\``)
    }
    if (args[0] == "ação") {

      message.reply(`\`\`\`${prefix}${modouso.pt.ação}\`\`\``)
    }
    if (args[0] == "calculo") {

      message.reply(`\`\`\`${prefix}${modouso.pt.calculo}\`\`\``)
    }
    if (args[0] == "rps") {

      message.reply(`\`\`\`${prefix}${modouso.pt.kick}\`\`\``)
    }
  }
}