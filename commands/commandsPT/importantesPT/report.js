const {MessageEmbed} = require("discord.js");

module.exports = {
    config: {
      name: "reportar"
    },
    run: async (bot, message, args) => {

  // var canal = client.channels.get('692026509841662073')

  var reportar = args.slice(0).join(" ");
  if (!args.join(" ")) return message.reply("Descreva o erro!");
    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`O membro \`${message.author.username}\` de \`${message.guild.name}\` fez o seguinte report -> \`${reportar}\``)
      .setColor("RANDOM")
    bot.channels.cache.get("878083440141013012").send({ embeds:[embed] })
    const embed2 = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`Seu problema -> \`${reportar}\``)
      .setColor("RANDOM")
    message.reply({embeds: [embed2]})
    message.reply(`Sua report foi enviado para ${bot.channels.cache.get("878083440141013012")}! :mailbox_with_no_mail:`);
}
}
