const { MessageEmbed } = require("discord.js");
const ms = require("ms");

module.exports = {
  config: {
    name: "give",
    aliases: ["giveaway", "sorteio"]
  },
  run: async (bot, message, args) => {
    //await message.react("✅");

    if (
      !message.member.hasPermission("ADMINISTRATOR") &&
      message.author.id != "691447707134328832"
    ) {
      return message.reply(
        `você precisa da permissão \`Gerenciar Mensagens\`.`
      );
      //seu codigo
    }
    if (!args[0]) return message.channel.send(`Você não especificou o tempo!`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `Você nâo usou o tempo de forma correta \n **d = dia** \n **h = hora** \n **m = minuto**`
      );
    if (isNaN(args[0][0])) return message.channel.send(`Isso não é um número!`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `Você não setou um canal para que ocorra o sorteio!`
      );
    let prize = args.slice(2).join(" ");
    if (!prize)
      return message.channel.send(
        `Falha, nenhum item para sorteio encontrado!`
      );
    message.channel.send(`*Sorteio criado em ${channel}*`);
    let Embed = new MessageEmbed()
      .setTitle(`Novo sorteio encontrado!`)
      .setDescription(
        `O membro: ${message.author} \n Está sorteando: **${prize}**`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Não houve pessoas suficientes para realizar o sorteio!`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter(u => !u.bot)
        .random();
      channel.send(`O ganhador do \`${prize}\` foi ${winner}`);
    }, ms(args[0]));
  }
};
