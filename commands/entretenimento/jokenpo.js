module.exports = {
  config: {
    name: "ppt",
    aliases: ["jokenpo"]
  },
  run: async (bot, message, args) => {
    //await message.react("✅");

    const player = ["🗻|pedra", "🧻|papel", "✂️|tesoura"];
    let target = message.mentions.users.first() || bot.user.username;
    let us = message.author.username

    message.channel.send(
      `__Boa sorte, e que os jogos comecem__`).then(message => {
        setTimeout(function() {
          message.edit(`${us} você tirou \`${player[Math.floor(Math.random() * player.length)]}\` e ${target} tirou \`${player[Math.floor(Math.random() * player.length)]}\``);
        }, 5000);
      });
  }
};
