const {MessageEmbed} = require("discord.js");

module.exports = {
    config: {
      name: "sugestão",
      aliases: ["sugestao"]
    },
    run: async (bot, message, args) => {

  // var canal = client.channels.get('692026509841662073')

  var sugestao = args.slice(0).join(" ");
  if (!args.join(" ")) return message.reply("Escreva sua sugestão!");
    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`O membro \`${message.author.username}\` de \`${message.guild.name}\` deu a seguinte sugestão -> \`${sugestao}\``)
      .setColor("RANDOM")
    bot.channels.cache.get("878089287072108545").send({ embeds:[embed] })
    const embed2 = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`Sua sugestão -> \`${sugestao}\``)
      .setColor("RANDOM")
    message.reply({embeds: [embed2]})
    message.reply(`Sua sugestão foi enviada para ${bot.channels.cache.get("878089287072108545")}! :mailbox_with_no_mail:`);
}
}
