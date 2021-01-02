module.exports = {
  config: {
    name: "d20",
    aliases: ["teste"]
  },
  run: async (bot, message, args) => {
    await message.react("✅"); // setando a base

    // puxando um chao, com sistema randomico (de 6 a 1)
    var numero = Math.floor(Math.random() * 20) + 1;

    message.channel
      .send(`Você jogou o dado e...`)
      .then(message => {
        message.edit(`teste 1`);
      }, 3000)
      .then(message => {
        setTimeout(function() {
          message.edit(`teste 2`);
        }, 3000).then(message => {
          setTimeout(function() {
            message.edit(`teste 3`);
          }, 3000).then(message => {
            setTimeout(function() {
              message.edit(`teste 4`);
            }, 3000).then(message => {
              setTimeout(function() {
                message.edit(`teste 5`);
              }, 3000).then(message => {
                setTimeout(function() {
                  message.edit(`teste 6`);
                }, 3000);
              });
            });
          });
        });
      });
  }
};
