const Discord = require("discord.js");
module.exports = {
  config: {
    name: "abraçar",
    aliases: ["hug"]
  },
  run: async (bot, message, args, tools) => {
    await message.react("✅");
    if (!message.mentions.users.first())
      return message.channel.send("Mencione alguem para receber seu abraço!");


    var image = [
      "https://cdn.nekos.life/hug/hug_026.gif",
      "https://i.pinimg.com/originals/4d/89/d7/4d89d7f963b41a416ec8a55230dab31b.gif",
      "https://media.tenor.com/images/eed8d1a51f647b4be696879a0ad6f1f1/tenor.gif",
      "https://pa1.narvii.com/7002/0d18a2a7c78f4dad44fe1498573c206916d808a0r1-444-250_hq.gif"
      
      
    ];

    let img = image[Math.floor(Math.random() * image.length)];

    const embed = new Discord.MessageEmbed()
    .setTitle(`OwO, ${message.author.username} Abraçou ${message.mentions.users.first().username}`)
    .setColor("#94E7C1")
    .setImage(`${img}`)
 

    message.channel.send(embed);
  }
};
