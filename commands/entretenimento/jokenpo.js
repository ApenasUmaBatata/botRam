module.exports = {
  config: {
    name: "ppd",
    aliases: ["jokenpo"]
  },
  run: async (bot, message, args) => {
    await message.react("✅");

    const player = ["🗻|pedra", "🧻|papel", "✂️|tesoura"];
    let target = message.mentions.users.first() || bot.user.username;

    message.channel.send(
      `__Boa sorte, e que os jogos comecem__ \n${
        message.author
      } você tirou \`${
        player[Math.floor(Math.random() * player.length)]
      }\` e ${target} tirou \`${
        player[Math.floor(Math.random() * player.length)]
      }\``
    );
  }
};
