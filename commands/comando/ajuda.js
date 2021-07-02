const Discord = require("discord.js"); // puxando a livraria 'discord.js'
const config = require("../../config.json");

module.exports = {
  config: {
    name: "ajuda",
    aliases: ["help"],
  },
  run: async (bot, message, args) => {
    const pref = config.prefix
    if (!args[0]) {
      let bicon = bot.user.displayAvatarURL();
      embed = new Discord.MessageEmbed()
          .setAuthor('Sua ajuda chegou', bicon)
          .addField(`Administração`, `\`Limpar\`,\`Kick\``)
          .addField(`Comandos gerais`, `\`Ajuda\`,\`botinfo\`,\`enquete\`,\`filme\`,\`say\`,\`sorteio\`,\`svinfo\`,\`userinfo\``)
          .addField(`Entretenimento`, `\`abraçar\`,\`calculo\`,\`d6\`,\`d20\`,\`flip\`,\`rps\``)
          .setImage('https://data.whicdn.com/images/287575135/original.gif')
          .setFooter(`Digite ' ${pref}ajuda <CommandName>' para detalhes do comando!`, message.author.displayAvatarURL())
          .setColor("#ff00c3");
      message.delete();
      message.channel.send(embed)
    }
    if (args[0].toLowerCase() == "kick" ){
      message.delete();
      message.channel.send("```O bot irá expular a pessoa mencionada!```")
    }
    if (args[0].toLowerCase() == "limpar" ){
      message.delete();
      message.channel.send("```O bot apaga a quantida de mensagens solicitada!```")
    }
    if (args[0].toLowerCase() == "ajuda" ){
      message.delete();
      message.channel.send("```O comando ajuda lhe mostra todos os comandos disponíveis!```")
    }
    if (args[0].toLowerCase() == "botinfo" ){
      message.delete();
      message.channel.send("```Mostra algumas informações do bot!```")
    }
    if (args[0].toLowerCase() == "enquete" ){
      message.delete();
      message.channel.send("```Cria uma enquete com até 4 opções!```")
    }
    if (args[0].toLowerCase() == "filme" ){
      message.delete();
      message.channel.send("```Abre uma votação para filme, com até 4 opções!```")
    }
    if (args[0].toLowerCase() == "say" ){
      message.delete();
      message.channel.send("```Escreva uma mensagem, e o bot irá mandar ela no chat por você!```")
    }
    if (args[0].toLowerCase() == "sorteio" ){
      message.delete();
      message.channel.send("```Abre um sorteio!```")
    }
    if (args[0].toLowerCase() == "svinfo" ){
      message.delete();
      message.channel.send("```Mostra algumas informações do servidor!```")
    }
    if (args[0].toLowerCase() == "userinfo" ){
      message.delete();
      message.channel.send("```Mostra algumas informações suas ou de alguém mencionado!```")
    }
    if (args[0].toLowerCase() == "abraçar" ){
      message.delete();
      message.channel.send("```Abraça alguém mencionado!```")
    }
    if (args[0].toLowerCase() == "calculo" ){
      message.delete();
      message.channel.send("```Realiza calculos por você!```")
    }
    if (args[0].toLowerCase() == "d6" ){
      message.delete();
      message.channel.send("```Rola um dado de 6 lados!(vai passar por remodelação)```")
    }
    if (args[0].toLowerCase() == "d20" ){
      message.delete();
      message.channel.send("```Rola um dado de 20 lados!(vai passar por remodelação)```")
    }
    if (args[0].toLowerCase() == "flip" ){
      message.delete();
      message.channel.send("```Taca uma moeda para o alto!(vai passar por remodelação)```")
    }
    if (args[0].toLowerCase() == "piada" ){
      message.delete();
      message.channel.send("```Conta uma piada para você!(vai passar por remodelação)```")
    }
    if (args[0].toLowerCase() == "ppt" ){
      message.delete();
      message.channel.send("```Brinca de pedra, papeu ou tesoura com o bot!```")
    }
    if (args[0].toLowerCase() == "rolar" ){
      message.delete();
      message.channel.send("```Rola todos os dados de uma vez!(vai passar por remodelação)```")
    }
    }
}