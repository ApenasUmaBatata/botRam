module.exports = async bot => {
  console.log("O bot acordou");

  let statuses = [
    { name: "Re:Zero-Starting Life in Another World", type: "WATCHING" },
    { name: "Minecraft", type: "PLAYING" },
    { name: "Labrinth", type: "LISTENING" },
  ];

  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity(status);
  }, 10000);
};
