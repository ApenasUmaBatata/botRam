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
  
    let imgs = [
    "https://static.wikia.nocookie.net/deathbattlefanon/images/e/e3/Ram_Re_Zero.png/revision/latest?cb=20170112190506",
    "https://static.wikia.nocookie.net/rezero/images/4/45/Ram_ep.30.png/revision/latest?cb=20200810070232",
    "https://media.comicbook.com/2020/07/rezero-starting-life-in-another-world-rem-ram-1229637-1280x0.jpeg",
    "http://pm1.narvii.com/6522/6932a3c71f7a32a9802af2ab83516ddf5faa63f3_00.jpg",
    "https://www.animeunited.com.br/oomtumtu/2020/07/ramrezero.jpg",
    "https://i.pinimg.com/originals/96/9f/d2/969fd2a9333b5a0e14cf3c55bb508dbb.png",
    "https://static.wikia.nocookie.net/deathbattlefanon/images/e/e3/Ram_Re_Zero.png/revision/latest?cb=20170112190506",
    "https://steamuserimages-a.akamaihd.net/ugc/85975227917811427/7A51148B9F34C017613B95DFA091AA2E0FEC8664/",
    "https://pm1.narvii.com/7096/7ea9a26bdd1fc97459e790e543c18636c3607c3fr1-736-736v2_hq.jpg",
  ];

  setInterval(function() {
    let img = imgs[Math.floor(Math.random() * imgs.length)];
    bot.user.setAvatar(img);
  }, 600000);
};
