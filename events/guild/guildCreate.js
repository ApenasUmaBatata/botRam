const Discord = require("discord.js");
module.exports = async (bot, guild, message) => {
    /**const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    console.log(`${bot.user.username}` + ` has entered ` + `${guild.name}.`)
    bot.channels.cache.get(channel).send(`Thanks for invite me!nnType **c!help** to see a full list of available commands!`).catch(console.error)
    console.log()
    guild.author.send("Thanks for inviting my bot");**/
//------------------------------------------------------------------
    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`Fui adicionada em \`${guild.name}\``)
        .setColor("RANDOM")
    bot.channels.cache.get("878108271439904818").send({ embeds:[embed] })

}