const { MessageEmbed } = require("discord.js"); // puxando a livraria 'discord.js'
const { prefix } = require("../../../arquivosjson/config.json");
const { modouso } = require("../../../arquivosjson/importantes.json");

module.exports = {
  config: {
    name: "usage"
  },
  run: async (bot, message, args) => {
    if (!args[0]) {
      embed = new MessageEmbed()
        .setAuthor('Your help is here', bot.user.avatarURL())
        .addField(`Important`, `\`help\`,\`usage\``)
        .addField(`Administration`, `\`clean\`,\`kick\``, inline = true)
        .addField(`Genereal commands`, `\`enquete\`,\`filme\`,\`say\`,\`sorteio\`,\`user\``)
        .addField(`Entertainment`, `\`ação\`,\`calculo\`,\`d6\`,\`d20\`,\`rps\``)
        .setImage('https://data.whicdn.com/images/287575135/original.gif')
        .setFooter(`Enter ' ${prefix}usage <CommandName>' for more details of the command!`, message.author.avatarURL())
        .setColor("#ff00c3");
      message.reply({ embeds: [embed] });
    }
    if (args[0] == "help") {

      message.reply(`\`\`\`${prefix}${modouso.ingles.help}\`\`\``)
    }
  }
}