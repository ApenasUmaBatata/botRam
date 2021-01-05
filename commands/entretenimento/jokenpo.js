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
      function getResult(me, target) {
        if ((me === "🗻|pedra" && target === "✂️|tesoura") ||
            (me === "🧻|papel" && target === "🗻|pedra") ||
            (me === "✂️|tesoura" && target === "🧻|papel")) {
                return "You won!";
        } else if (me === target) {
            return "It's a tie!";
        } else {
            return "You lost!";
        }
    }
  }
};
