const Discord = require("discord.js"); // puxando a livraria 'discord.js'
const config = require("../../config.json");

module.exports = {
  config: {
    name: "ajuda",
    aliases: ["help", "a"],
  },
  run: async (bot, message, args) => {
    const pref = config.prefix
    if (!args[0]) {
      let inline = true;
      let bicon = bot.user.displayAvatarURL();
      embed = new Discord.MessageEmbed()
          .setAuthor('Sua ajuda chegou', bicon)
          .addField(`Importantes`, `\`ajuda\`,\`modouso\``,inline)
          .addField(`Administração`, `\`limpar\`,\`kick\``,inline)
          .addField(`Comandos gerais`, `\`botinfo\`,\`enquete\`,\`filme\`,\`say\`,\`sorteio\`,\`svinfo\`,\`userinfo\``)
          .addField(`Entretenimento`, `\`ação\`,\`calculo\`,\`d6\`,\`d20\`,\`flip\`,\`rps\``)
          .setImage('https://data.whicdn.com/images/287575135/original.gif')
          .setFooter(`Digite ' ${pref}ajuda <CommandName>' para detalhes do comando!`, message.author.displayAvatarURL())
          .setColor("#ff00c3");
      embed2 = new Discord.MessageEmbed()
          .setDescription(`utilize \`${pref}modouso\` para ver a forma correta de cada comando!`)
      message.reply({ embeds: [embed, embed2] });
      //message.reply({ embeds: [embed] })
    }
    if (args[0] == "ajuda" ){
       
      message.reply("```O comando 'ajuda' lhe mostra todos os comandos disponíveis!```")
    }
    if (args[0] == "modouso" ){
       
      message.reply("```O comando mostra a forma correta de usar os demais comandos!```")
    }
    if (args[0] == "kick" ){
       
      message.reply("```O bot irá expulsar a pessoa mencionada!```")
    }
    if (args[0] == "limpar" ){
       
      message.reply("```O bot apaga a quantidade de mensagens solicitada!```")
    }
    if (args[0] == "botinfo" ){
       
      message.reply("```Mostra algumas informações do bot!```")
    }
    if (args[0] == "enquete" ){
       
      message.reply("```Cria uma enquete com até 4 opções!```")
    }
    if (args[0] == "filme" ){
       
      message.reply("```Abre uma votação para filme, com até 4 opções!```")
    }
    if (args[0] == "say" ){
       
      message.reply("```Escreva uma mensagem, e o bot irá mandar ela no chat por você!```")
    }
    if (args[0] == "sorteio" ){
       
      message.reply("```Abre um sorteio!```")
    }
    if (args[0] == "svinfo" ){
       
      message.reply("```Mostra algumas informações do servidor!```")
    }
    if (args[0] == "userinfo" ){
       
      message.reply("```Mostra algumas informações suas ou de alguém mencionado!```")
    }
    if (args[0] == "ação" ){
       
      message.reply("```Realiza uma ação em alguém mencionado!```")
    }
    if (args[0] == "calculo" ){
       
      message.reply("```Realiza calculos por você!```")
    }
    if (args[0] == "d6" ){
       
      message.reply("```Rola um dado de 6 lados!(vai passar por remodelação)```")
    }
    if (args[0] == "d20" ){
       
      message.reply("```Rola um dado de 20 lados!(vai passar por remodelação)```")
    }
    if (args[0] == "flip" ){
       
      message.reply("```Taca uma moeda para o alto!(vai passar por remodelação)```")
    }
    if (args[0] == "piada" ){
       
      message.reply("```Conta uma piada para você!(vai passar por remodelação)```")
    }
    if (args[0] == "ppt" ){
       
      message.reply("```Brinca de pedra, papel ou tesoura com o bot!```")
    }
    if (args[0] == "rolar" ){
       
      message.reply("```Rola todos os dados de uma vez!(vai passar por remodelação)```")
    }
    }
}