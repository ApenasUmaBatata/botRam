module.exports = {
  config: {
    name: "flip",
    aliases: ["moeda"]
  },
  run: async (bot, message, args) => {
    await message.react("✅");

    var list = ["cara", "coroa"];

    let altstatus = list[Math.floor(Math.random() * list.length)];

    message.channel.send(`${message.author.username} sua moeda caiu em ...`).then(message => {
      setTimeout(function() {
        message.edit(`⠀\n ${altstatus}`);
      }, 5000);
    });
  }
};
