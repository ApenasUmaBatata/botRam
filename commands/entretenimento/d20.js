module.exports = {
  config: {
    name: "d20",
    aliases: ["dado20"]
  },
  run: async (bot, message, args) => {
    await message.react("✅"); // setando a base

    // puxando um chao, com sistema randomico (de 6 a 1)
    var numero = Math.floor(Math.random() * 20) + 1;

    message.channel
      .send(`Você jogou o dado e...`)
      .then(message => {
        setTimeout(function() {
          message.edit(`⠀\n Ele caiu em: ${numero}`);
        }, 5000);
      })
      .then(message => {
      setTimeout(function(){
        message.delete(10000);
      });
  });
  };