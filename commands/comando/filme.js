const Discord = require("discord.js");
module.exports = {
  config: {
    name: "sfilme",
    aliases: ["sjogo", "jogo", "filme"]
  },
  run: async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL(); //puxando a foto de perfil do bot

    if (!args[0]) {
      let eb = new Discord.MessageEmbed() //criando uma pequena embed
        .setThumbnail(bicon)
        .setDescription(
          `\`Passando pra avisar que voce usou o comando de modo incorreto! Uma sugestão de como usar:\` \n \`=========================== \` \n \`Ram sfilme bob_esponja moranguinho vovo_zona o_bom_dinossauro\` \n \`=========================== \` \n \`OBS-1: filmes que contenham nome composto, usar ao invés de "espaço" colocar _\` \n \`OBS-2: na troca de um filme para o outro usar "espaço"\` \n \`OBS-3: Limite máximo de 4 filmes!\``
        );//caso a pessoa nao coloque nada na mensagem (exemplo: Ram sfilme ) o bot ira retornar essa mensagem
      return message.channel.send(eb); //retornado a embed em caso de mensagem vazia

    }
    //pegando os arugmentos para sugestão do filme
    //OBS: quando o filme possui duplo argumento (os simpsons) usar _ no lugar do "espaço"
    var a1 = args[0];
    var a2 = args[1];
    var a3 = args[2];
    var a4 = args[3];

    // caso os argumentos a2 + estejam em branco, invez do bot mandar "undefined" ele irá mandar "nao selecionado"
    if (a2 === undefined) {
      a2 = "_não selecionado_"
    }
    if (a3 === undefined) {
      a3 = "_não selecionado_"
    }
    if (a4 === undefined) {
      a4 = "_não selecionado_"
    }
//criando uma embed para colocar os filmes listado
    let embed = new Discord.MessageEmbed()
      .setTitle(`Filmes/Jogos sugeridos:`)
      .setColor("RED")
      .setThumbnail(bicon)
      .setDescription(
        ` <:um1:809185254887784499>- ${a1} \n <:dois2:809185285086642208>- ${a2} \n <:tres3:809185310851989564>- ${a3} \n <:quatro4:809185331890618379>- ${a4} \n ||@everyone||`
      )
      .setFooter(`Clique em um emoji para deixar seu voto!`);
    message.channel.send(embed).then(function(msg) {
      msg.react("<:um1:809185254887784499>"); //enviando a embed e reagindo na mensagem com os emojis para votação
      msg.react("<:dois2:809185285086642208>");
      msg.react("<:tres3:809185310851989564>");
      msg.react("<:quatro4:809185331890618379>");
    });
    message.delete();//apagando a mensagem do autor
  }
};
