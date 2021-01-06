module.exports = {
    config: {
      name: "roll",
      aliases: ["rolar"]
    },
    run: async (bot, message, args) => {
      //await message.react("✅"); // setando a base
  
      // puxando um chao, com sistema randomico (de 6 a 1)
      var d6 = Math.floor(Math.random() * 6) + 1;
      var d20 = Math.floor(Math.random() * 20) + 1;
      var d100 = Math.floor(Math.random() * 100) + 1;
  
      message.channel.send(`Seus dados cairam em d6- ${d6} d20- ${d20} ${d100}`).then(msg => {
        msg.edit("Seus dados cairam em 1").then(msg => {
          msg.edit("Seus dados cairam em 1 \n Seus dados cairam em 2").then(msg => {
            msg.edit("Seus dados cairam em 1 \n Seus dados cairam em 2 \n Seus dados cairam em 3").then(msg => {
              msg.edit("Seus dados cairam em 1 \n Seus dados cairam em 2 \n Seus dados cairam em 3 \n Seus dados cairam em 4").then(msg => {
                msg.edit("Seus dados cairam em 1 \n Seus dados cairam em 2 \n Seus dados cairam em 3 \n Seus dados cairam em 4 \n Seus dados cairam em 5")
              })
            })
          })
        })
      });
    }
  };
  