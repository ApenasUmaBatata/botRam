const Discord = require("discord.js"); // puxando a livraria 'discord.js'
module.exports = {
config: {
  name: "kick",
  aliases: []
},
run: async (bot, message, args) => {
  await message.react("✅"); // setando as bases

  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply("Você precisa da permissão \`Administrador`"); // caso o membro não possua a permissão 'EXPULSAR_MEMBROS', vamos botar o erro

  let member = message.mentions.members.first(); // puxando um membro mencionavel
  if (!member) return message.reply("selecione um usuário válido!"); // caso o autor esqueça de mencionar um membro, vamos dar o erro
  if (!member.bannable)
    return message.reply("não é possível punir este usuário."); // caso o membro tenha um cargo acima do seu bot, ele não vai expulsar
  let reason = args.slice(1).join(" "); // puxando um motivo
  if (!reason) reason = "Nenhuma razão fornecida"; // caso nao haja, daremos com tal mensagem
  await member
    .kick(reason) // finalizando com o kick
    .catch(error =>
      message.reply(
        `${message.author}, não foi possível completar esta punição devido ao erro: ${error}`
      )
    ); // caso ocorra um erro no final, vamos filtrar e avisar qual foi

  let pEmbed = new Discord.MessageEmbed()
    .setAuthor(`Comando executado por: ${message.author.username}`, message.author.displayAvatarURL())
    .setTitle("EXPULSAMENTO")
    .addField("Usuário:", member.user.tag)
    .addField("Motivo:", reason)
    .setColor("DARK_RED");

  message.channel.send(pEmbed);
}
}
