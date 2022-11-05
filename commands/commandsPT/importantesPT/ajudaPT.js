const { MessageEmbed } = require("discord.js"); // puxando a livraria 'discord.js'
const { prefix } = require("../../../arquivosjson/config.json");
const { ajuda } = require("../../../arquivosjson/importantes.json");

module.exports = {
  config: {
    name: "ajuda",
  },
  run: async (bot, message, args) => {
    //const pref = config.prefix
    if (!args[0]) {
      //essa parte daria para mudar usando um banco de dados e definindo o bot em portugues ou ingles
      ptBR = new MessageEmbed() //enviando em portugues
        .setAuthor("Sua ajuda chegou", bot.user.avatarURL())
        .addField(`Importantes`, `\`ajuda\`,\`modouso\``, (inline = true))
        .addField(`Administração`, `\`limpar\`,\`expulsar\``, (inline = true))
        .addField(
          `Comandos gerais`,
          `\`botinfo\`,\`enquete\`,\`filme\`,\`falar\`,\`sorteio\`,\`svinfo\`,\`membro\``
        )
        .addField(
          `Entretenimento`,
          `\`ação\`,\`calculo\`,\`d6\`,\`d20\`,\`moeda\`,\`jokenpo\``
        )
        .setImage("https://data.whicdn.com/images/287575135/original.gif")
        .setFooter(
          `Digite ' ${prefix}ajuda <CommandName>' para detalhes do comando!`,
          message.author.avatarURL()
        )
        .setColor("#ff00c3");
      ptBr = new MessageEmbed().setDescription(
        `Digite \`${prefix}uso\` para ver a forma correta de cada comando!`
      );

      message.reply({ embeds: [ptBR, ptBr] });
      //message.reply({ embeds: [embed] })
    }
    if (args[0] == "ajuda") {
      message.reply(`\`\`\`${ajuda.pt.ajuda}\`\`\``);
    }
    if (args[0] == "modouso") {
      message.reply(`\`\`\`${ajuda.pt.modouso}\`\`\``);
    }
    if (args[0] == "expulsar") {
      message.reply("```O bot irá expulsar a pessoa mencionada!```");
    }
    if (args[0] == "limpar") {
      message.reply("```O bot apaga a quantidade de mensagens solicitada!```");
    }
    if (args[0] == "botinfo") {
      message.reply("```Mostra algumas informações do bot!```");
    }
    if (args[0] == "enquete") {
      message.reply("```Cria uma enquete!```");
    }
    if (args[0] == "filme") {
      message.reply("```Abre uma votação para filme, com até 4 opções!```");
    }
    if (args[0] == "falar") {
      message.reply(
        "```Escreva uma mensagem, e o bot irá mandar ela no chat por você!```"
      );
    }
    if (args[0] == "sorteio") {
      message.reply("```Abre um sorteio!```");
    }
    if (args[0] == "svinfo") {
      message.reply("```Mostra algumas informações do servidor!```");
    }
    if (args[0] == "membro") {
      message.reply(
        "```Mostra algumas informações suas ou de alguém mencionado!```"
      );
    }
    if (args[0] == "ação") {
      message.reply("```Realiza uma ação em alguém mencionado!```");
    }
    if (args[0] == "calculo") {
      message.reply("```Realiza calculos por você!```");
    }
    if (args[0] == "d6") {
      message.reply(
        "```Rola um dado de 6 lados!(vai passar por remodelação)```"
      );
    }
    if (args[0] == "d20") {
      message.reply(
        "```Rola um dado de 20 lados!(vai passar por remodelação)```"
      );
    }
    if (args[0] == "moeda") {
      message.reply(
        "```Taca uma moeda para o alto!(vai passar por remodelação)```"
      );
    }
    if (args[0] == "piada") {
      message.reply(
        "```Conta uma piada para você!(vai passar por remodelação)```"
      );
    }
    if (args[0] == "jokenpo") {
      message.reply("```Brinca de pedra, papel ou tesoura com o bot!```");
    }
    if (args[0] == "rolar") {
      message.reply(
        "```Rola todos os dados de uma vez!(vai passar por remodelação)```"
      );
    }
  },
};
