const Discord = require("discord.js"); // puxando a livraria 'discord.js'
const config = require("../../config.json");

module.exports = {
  config: {
    name: "moduso",
    aliases: ["modo_de_uso","modouso"],
  },
  run: async (bot, message, args) => {
    const pref = config.prefix
    if (!args[0]) {
      let bicon = bot.user.displayAvatarURL();
      embed = new Discord.MessageEmbed()
          .setAuthor('Sua ajuda chegou', bicon)
          .addField(`Administração`, `\`limpar\`,\`kick\``)
          .addField(`Comandos gerais`, `\`ajuda\`,\`enquete\`,\`filme\`,\`say\`,\`sorteio\`,\`userinfo\``)
          .addField(`Entretenimento`, `\`abraçar\`,\`calculo\`,\`d6\`,\`d20\`,\`rps\``)
          .setImage('https://data.whicdn.com/images/287575135/original.gif')
          .setFooter(`Digite ' ${pref}modouso <CommandName>' para detalhes do comando!`, message.author.displayAvatarURL())
          .setColor("#ff00c3");
      message.delete();
      message.channel.send({ embeds: [embed] });
    }
    if (args[0]  == "kick" ){
      message.delete();
      message.channel.send("```Ram kick [@pessoa] [motivo]```")
    }
    if (args[0]  == "limpar" ){
      message.delete();
      message.channel.send("```Ram limpar [quantidade, max 100 mensagens]```")
    }
    if (args[0]  == "ajuda" ){
      message.delete();
      message.channel.send("```Ram ajuda e/ou Ram ajuda [Nome do comando]```")
    }
    if (args[0]  == "enquete" ){
      message.delete();
      message.channel.send("```Ram enquete [#canal] [mensagem] e/ou Ram enquete [mensagem]```")
    }
    if (args[0]  == "filme" ){
      message.delete();
      message.channel.send("```Ram filme [filme 1] [filme 2] [filme 3] [filme 4]```")
    }
    if (args[0]  == "say" ){
      message.delete();
      message.channel.send("```Ram say [#canal] [mensagem] e/ou Ram say [mensagem]```")
    }
    if (args[0]  == "sorteio" ){
      message.delete();
      message.channel.send("```Ram sorteio [tempo m/h/d] [canal] [item]```")
    }
    if (args[0]  == "userinfo" ){
      message.delete();
      message.channel.send("```Ram userinfo [@pessoa] e/ou Ram userinfo (para mostrar apenas informações suas)```")
    }
    if (args[0]  == "abraçar" ){
      message.delete();
      message.channel.send("```Ram abraçar [@pessoa]```")
    }
    if (args[0]  == "calculo" ){
      message.delete();
      message.channel.send("```Ram calculo [Numero] [variavel do calculo +/-/x/'/'] [Numero]```")
    }
    if (args[0]  == "rps" ){
      message.delete();
      message.channel.send("```Ram rps [pedra/papel/tesoura]```")
    }
    }
}