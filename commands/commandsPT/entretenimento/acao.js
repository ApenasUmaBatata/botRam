const { MessageEmbed } = require("discord.js"); // puxando a livraria 'discord.js'
const { prefix } = require("../../../arquivosjson/config.json");

module.exports = {
  config: {
    name: "ação",
    aliases: ["acao"],
  },
  run: async (bot, message, args) => {
    if (!args[0]) {
      embed = new MessageEmbed()
        .setAuthor("Sua ajuda chegou", bot.user.avatarURL())
        .addField(`Ações`, `\`abraçar\`,\`tapa\``)
        .setImage("https://data.whicdn.com/images/287575135/original.gif")
        .setFooter(
          `Digite ' ${prefix}ação <CommandName> <Menção>' para que ocorra uma ação!`,
          message.author.avatarURL()
        )
        .setColor("#ff00c3");
      message.reply({ embeds: [embed] });
    }
    //Mencione alguém para que ocorra uma ação!
    if (args[0] == "abraçar") {
      if (!message.mentions.members.first()) {
        //puxando a menção do autor
        message.reply("Mencione alguém para que ocorra uma ação!");
      } else {
        //criando uma variavel de opções  para os gifs de abraço
        var image = [
          "https://cdn.nekos.life/hug/hug_026.gif",
          "https://i.pinimg.com/originals/4d/89/d7/4d89d7f963b41a416ec8a55230dab31b.gif",
          "https://media.tenor.com/images/eed8d1a51f647b4be696879a0ad6f1f1/tenor.gif",
          "https://pa1.narvii.com/7002/0d18a2a7c78f4dad44fe1498573c206916d808a0r1-444-250_hq.gif",
          "https://media.giphy.com/media/l4FGpP4lxGGgK5CBW/giphy.gif",
          "https://media.giphy.com/media/gnXG2hODaCOru/giphy.gif",
          "https://media.giphy.com/media/EvYHHSntaIl5m/giphy.gif",
        ];
        var fra = [
          "aqueceu o coração de",
          "deu uma mega abraço em",
          "abraçou",
          "deu um abraço em",
        ];
        let img = image[Math.floor(Math.random() * image.length)]; //randomizando a variael de gifs para que caia um aleatorio cada vez que o comando for usado
        let fr = fra[Math.floor(Math.random() * fra.length)]; //randomizando a variael de frases para que caia um aleatorio cada vez que o comando for usado
        const embed = new MessageEmbed() //criando uma embed
          .setDescription(
            `${message.author} ${fr} ${message.mentions.members.first()}`
          );
        const embed2 = new MessageEmbed() //criando uma embed
          .setImage(`${img}`);
        message.reply({ embeds: [embed, embed2] }); //enviando a embed
      }
    }
    if (args[0] == "tapa") {
      if (!message.mentions.members.first()) {
        //puxano a menção do autor
        message.reply("Mencione alguém para que ocorra uma ação!");
      } else {
        var image = [
          "https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-20.gif",
          "https://i.pinimg.com/originals/1c/8f/0f/1c8f0f43c75c11bf504b25340ddd912d.gif",
          "https://i.pinimg.com/originals/bc/ee/bf/bceebfa72d3a5933cb0e9cf319bb67ae.gif",
          "https://i.pinimg.com/originals/68/de/67/68de679cc20000570e8a7d9ed9218cd3.gif",
        ];
        var fra = ["deu um tapa em", "acertou com força o rosto de"];
        let img = image[Math.floor(Math.random() * image.length)];
        let fr = fra[Math.floor(Math.random() * fra.length)]; //randomizando a variael de gifs para que caia um aleatorio cada vez que o comando for usado
        const embed = new MessageEmbed() //criando uma embed
          .setDescription(
            `${message.author} ${fr} ${message.mentions.users.first()}`
          );
        const embed2 = new MessageEmbed() //criando uma embed
          .setImage(`${img}`);
        message.reply({ embeds: [embed, embed2] }); //enviando a embed
      }
    }
  },
};
