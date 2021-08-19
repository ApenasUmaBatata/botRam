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
          .addField(`Administração`, `\`limpar\`,\`kick\``)
          .addField(`Comandos gerais`, `\`ajuda\`,\`modouso\`,\`botinfo\`,\`enquete\`,\`filme\`,\`say\`,\`sorteio\`,\`svinfo\`,\`userinfo\``)
          .addField(`Entretenimento`, `\`ação\`,\`calculo\`,\`d6\`,\`d20\`,\`flip\`,\`rps\``)
          .setImage('https://data.whicdn.com/images/287575135/original.gif')
          .setFooter(`Digite ' ${pref}ajuda <CommandName>' para detalhes do comando!`, message.author.displayAvatarURL())
          .setColor("#ff00c3");
      message.delete();
      message.channel.send({ embeds: [embed] })
    }
    if (args[0] == "kick" ){
      message.delete();
      message.channel.send("```O bot irá expulsar a pessoa mencionada!```")
    }
    if (args[0] == "limpar" ){
      message.delete();
      message.channel.send("```O bot apaga a quantidade de mensagens solicitada!```")
    }
    if (args[0] == "ajuda" ){
      message.delete();
      message.channel.send("```O comando 'ajuda' lhe mostra todos os comandos disponíveis!```")
    }
    if (args[0] == "modouso" ){
      message.delete();
      message.channel.send("```O comando mostra a forma correta de usar os demais comandos!```")
    }
    if (args[0] == "botinfo" ){
      message.delete();
      message.channel.send("```Mostra algumas informações do bot!```")
    }
    if (args[0] == "enquete" ){
      message.delete();
      message.channel.send("```Cria uma enquete com até 4 opções!```")
    }
    if (args[0] == "filme" ){
      message.delete();
      message.channel.send("```Abre uma votação para filme, com até 4 opções!```")
    }
    if (args[0] == "say" ){
      message.delete();
      message.channel.send("```Escreva uma mensagem, e o bot irá mandar ela no chat por você!```")
    }
    if (args[0] == "sorteio" ){
      message.delete();
      message.channel.send("```Abre um sorteio!```")
    }
    if (args[0] == "svinfo" ){
      message.delete();
      message.channel.send("```Mostra algumas informações do servidor!```")
    }
    if (args[0] == "userinfo" ){
      message.delete();
      message.channel.send("```Mostra algumas informações suas ou de alguém mencionado!```")
    }
    if (args[0] == "ação" ){
      message.delete();
      message.channel.send("```Realiza uma ação em alguém mencionado!```")
    }
    if (args[0] == "calculo" ){
      message.delete();
      message.channel.send("```Realiza calculos por você!```")
    }
    if (args[0] == "d6" ){
      message.delete();
      message.channel.send("```Rola um dado de 6 lados!(vai passar por remodelação)```")
    }
    if (args[0] == "d20" ){
      message.delete();
      message.channel.send("```Rola um dado de 20 lados!(vai passar por remodelação)```")
    }
    if (args[0] == "flip" ){
      message.delete();
      message.channel.send("```Taca uma moeda para o alto!(vai passar por remodelação)```")
    }
    if (args[0] == "piada" ){
      message.delete();
      message.channel.send("```Conta uma piada para você!(vai passar por remodelação)```")
    }
    if (args[0] == "ppt" ){
      message.delete();
      message.channel.send("```Brinca de pedra, papel ou tesoura com o bot!```")
    }
    if (args[0] == "rolar" ){
      message.delete();
      message.channel.send("```Rola todos os dados de uma vez!(vai passar por remodelação)```")
    }
    }
}