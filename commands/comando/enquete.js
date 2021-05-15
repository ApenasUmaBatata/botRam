const Discord = require("discord.js");

module.exports = {
  config: {
    name: "enquete",
    aliases: ["Enquete"]
  },
  run: async (message, args) => {
    //await message.react("✅");

    // var canal = client.channels.get('692026509841662073')

    var sugestao = args.slice(0).join(" "); //puxando os argumentos para sugestão
    if (!args.join(" ")) return message.reply("Escreva algo!"); //se a pessoa nao escrever nada o bot irá mandar essa mensagem

    let embed = new Discord.MessageEmbed() //criando uma embed
      .setTitle(`ENQUETE`)
      .setColor("RANDOM")
      .setDescription(`${sugestao}`)
      .setFooter(`Clique em um emoji para deixar sua opinião!`)
    message.channel.send(embed).then(function(msg) {
      msg.react("<:CyclopsYesPillow:805298824725528586>");
      msg.react("<:CyclopsNoPillow:805298794714365952>"); //enviando a mensagem e reagindo na mensagem com emojis do servidor
    });
    message.delete(); //apagando a mensagem do autor
  }
};
