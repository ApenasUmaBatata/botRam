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
          .addField(`Entretenimento`, `\`ação\`,\`calculo\`,\`d6\`,\`d20\`,\`rps\``)
          .setImage('https://data.whicdn.com/images/287575135/original.gif')
          .setFooter(`Digite ' ${pref}modouso <CommandName>' para detalhes do comando!`, message.author.displayAvatarURL())
          .setColor("#ff00c3");
       
      message.reply({ embeds: [embed] });
    }
    if (args[0]  == "kick" ){
       
      message.reply("```Ram kick [@pessoa] [motivo]```")
    }
    if (args[0]  == "limpar" ){
       
      message.reply("```Ram limpar [quantidade, {max 100 mensagens}]```")
    }
    if (args[0]  == "ajuda" ){
       
      message.reply("```Ram ajuda e/ou Ram ajuda [Nome do comando]```")
    }
    if (args[0]  == "enquete" ){
       
      message.reply("```Ram enquete [#canal] [mensagem] e/ou Ram enquete [mensagem]```")
    }
    if (args[0]  == "filme" ){
       
      message.reply("```Ram filme [filme 1] [filme 2] [filme 3] [filme 4]```")
    }
    if (args[0]  == "say" ){
       
      message.reply("```Ram say [#canal] [mensagem] e/ou Ram say [mensagem]```")
    }
    if (args[0]  == "sorteio" ){
       
      message.reply("```Ram sorteio [tempo m/h/d] [canal] [item]```")
    }
    if (args[0]  == "userinfo" ){
       
      message.reply("```Ram userinfo [@pessoa] e/ou Ram userinfo (para mostrar apenas informações suas)```")
    }
    if (args[0]  == "ação" ){
       
      message.reply("```Ram ação [nome da ação] [@pessoa]```")
    }
    if (args[0]  == "calculo" ){
       
      message.reply("```Ram calculo [Numero] [variavel do calculo +/-/x/'/'] [Numero]```")
    }
    if (args[0]  == "rps" ){
       
      message.reply("```Ram rps [pedra/papel/tesoura]```")
    }
    }
}