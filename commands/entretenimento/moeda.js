module.exports = {
  config: {
    name: "flip",
    aliases: ["moeda"]
  },
  run: async (bot, message, args) => {
    await message.react("✅");

    var list = ["cara", "coroa"];

    let altstatus = list[Math.floor(Math.random() * list.length)];

    message.channel.send(
      `Olá ${message.author.username} você jogou a moeda e caiu em: \n ${altstatus}`
    ).then(message => {
      setTimeout(function() {
        message.edit(`⠀\n Ele caiu em:`);
      }, 5000);
    });
  }
};
