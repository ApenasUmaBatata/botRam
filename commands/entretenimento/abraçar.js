const Discord = require("discord.js");
module.exports = {
  config: {
    name: "abraçar",
    aliases: ["hug"]
  },
  run: async (bot, message, args) => {
    //await message.react("✅");
    if (!message.mentions.users.first()) //puxano a menção do autor
      return message.channel.send("Mencione alguém para receber seu carinhoso abraço!");//caso o autor nao mencione ninguem o bot mandara essa mensagem
      //criando uma variavel de opções  para os gifs de abraço
    var image = [
      "https://cdn.nekos.life/hug/hug_026.gif",
      "https://i.pinimg.com/originals/4d/89/d7/4d89d7f963b41a416ec8a55230dab31b.gif",
      "https://media.tenor.com/images/eed8d1a51f647b4be696879a0ad6f1f1/tenor.gif",
      "https://pa1.narvii.com/7002/0d18a2a7c78f4dad44fe1498573c206916d808a0r1-444-250_hq.gif",
      "https://media.giphy.com/media/l4FGpP4lxGGgK5CBW/giphy.gif",
      "https://media.giphy.com/media/gnXG2hODaCOru/giphy.gif",
      "https://media.giphy.com/media/EvYHHSntaIl5m/giphy.gif"
    ];

    let img = image[Math.floor(Math.random() * image.length)];//randomizando a variael de gifs para que caia um aleatorio cada vez que o comando for usado
    const embed = new Discord.MessageEmbed() //criando uma embed
    .setTitle(`OwO, ${message.author.username} Abraçou ${message.mentions.users.first().username}`)
    .setImage(`${img}`)
    message.channel.send(embed); //enviando a embed
  }
};
