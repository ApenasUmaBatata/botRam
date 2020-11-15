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
      `Olá ${message.author} você jogou a moeda e caiu em: \n ${altstatus}`
    );
  }
};
