module.exports = async bot => {
  console.log("O bot acordou");  
  
  let statuses = [
    { name: "Re:Zero-Starting Life in Another World", type: "WATCHING" },
    { name: "Junte-se a nós: discord.gg/PYtevP5NZn", type: "WATCHING" },
    { name: "discord.gg/PYtevP5NZn", type: "STREAMING" , url:"https://www.twitch.tv/srbatataoz"}
  ];

  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity(status);
  }, 10000);
};
