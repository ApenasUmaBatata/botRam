const Discord = require("discord.js");
const config = require("../../config.json");

module.exports = async (bot, guild, message) => {

    const prefix = config.prefix
    bot.users.fetch(guild.ownerId, false).then(user => {
        user.send(`Obrigado por me convidar para ${guild.name}. \n Utilize ${prefix}ajuda para ver meus comandos!`)
    })
//------------------------------------------------------------------
    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`Fui adicionada em \`${guild.name}\``)
        .setColor("RANDOM")
        .setFooter(`Fui adicionada dia `)
        .setTimestamp();
        bot.channels.cache.get("878108271439904818").send({ embeds:[embed] })

}