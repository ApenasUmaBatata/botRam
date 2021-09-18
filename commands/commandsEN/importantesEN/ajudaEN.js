const { MessageEmbed } = require("discord.js"); // puxando a livraria 'discord.js'
const { prefix } = require("../../../arquivosjson/config.json");

module.exports = {
  config: {
    name: "help",
  },
  run: async (bot, message, args) => {
    //const pref = config.prefix
    if (!args[0]) {
      enUS = new MessageEmbed() //enviando em ingles
        .setAuthor('Your help is here', bot.user.avatarURL())
        .addField(`Important`, `\`help\`,\`usage\``, inline = true)
        .addField(`Administration`, `\`clean\`,\`kick\``, inline = true)
        .addField(`Genereal commands`, `\`botinfo\`,\`enquete\`,\`filme\`,\`say\`,\`sorteio\`,\`svinfo\`,\`userinfo\``)
        .addField(`Entertainment`, `\`ação\`,\`calculo\`,\`d6\`,\`d20\`,\`flip\`,\`rps\``)
        .setImage('https://data.whicdn.com/images/287575135/original.gif')
        .setFooter(`Enter ' ${prefix}help <CommandName>' for more details of the command!`, message.author.avatarURL())
        .setColor("#ff00c3");
      enUs = new MessageEmbed()
        .setDescription(`Enter \`${prefix}usage\` to see the correct shape of each command!`)
      message.reply({ embeds: [enUS, enUs] })
    }
    if (args[0] == "help") {

      message.reply("```O comando 'ajuda' lhe mostra todos os comandos disponíveis!```")
    }
    if (args[0] == "usage") {

      message.reply("```O comando mostra a forma correta de usar os demais comandos!```")
    }
    if (args[0] == "kick") {

      message.reply("```O bot irá expulsar a pessoa mencionada!```")
    }
    if (args[0] == "clean") {

      message.reply("```O bot apaga a quantidade de mensagens solicitada!```")
    }
    if (args[0] == "botinfo") {

      message.reply("```Mostra algumas informações do bot!```")
    }
    if (args[0] == "enquete") {

      message.reply("```Cria uma enquete com até 4 opções!```")
    }
    if (args[0] == "filme") {

      message.reply("```Abre uma votação para filme, com até 4 opções!```")
    }
    if (args[0] == "say") {

      message.reply("```Escreva uma mensagem, e o bot irá mandar ela no chat por você!```")
    }
    if (args[0] == "giveaway") {

      message.reply("```Abre um sorteio!```")
    }
    if (args[0] == "svinfo") {

      message.reply("```Mostra algumas informações do servidor!```")
    }
    if (args[0] == "userinfo") {

      message.reply("```Mostra algumas informações suas ou de alguém mencionado!```")
    }
    if (args[0] == "ação") {

      message.reply("```Realiza uma ação em alguém mencionado!```")
    }
    if (args[0] == "calculo") {

      message.reply("```Realiza calculos por você!```")
    }
    if (args[0] == "d6") {

      message.reply("```Rola um dado de 6 lados!(vai passar por remodelação)```")
    }
    if (args[0] == "d20") {

      message.reply("```Rola um dado de 20 lados!(vai passar por remodelação)```")
    }
    if (args[0] == "flip") {

      message.reply("```Taca uma moeda para o alto!(vai passar por remodelação)```")
    }
    if (args[0] == "piada") {

      message.reply("```Conta uma piada para você!(vai passar por remodelação)```")
    }
    if (args[0] == "ppt") {

      message.reply("```Brinca de pedra, papel ou tesoura com o bot!```")
    }
    if (args[0] == "rolar") {

      message.reply("```Rola todos os dados de uma vez!(vai passar por remodelação)```")
    }
  }
}