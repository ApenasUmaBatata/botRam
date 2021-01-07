module.exports = {
  config: {
    name: "teste",
    aliases: ["teste"]
  },
  run: async (bot, message, args) => {
    //await message.react("✅"); // setando a base

    // puxando um chao, com sistema randomico (de 6 a 1)

    message.channel.send(`Seus dados cairam em d6-`).then(msg => {
      setTimeout(function() {
        msg.edit("Seus dados cairam em 1").then(msg => {
          setTimeout(function() {
            msg
              .edit("Seus dados cairam em 1 \n Seus dados cairam em 2")
              .then(msg => {
                setTimeout(function() {
                  msg
                    .edit(
                      "Seus dados cairam em 1 \n Seus dados cairam em 2 \n Seus dados cairam em 3"
                    )
                    .then(msg => {
                      setTimeout(function() {
                        msg
                          .edit(
                            "Seus dados cairam em 1 \n Seus dados cairam em 2 \n Seus dados cairam em 3 \n Seus dados cairam em 4"
                          )
                          .then(msg => {
                            setTimeout(function() {
                              msg
                                .edit(
                                  "Seus dados cairam em 1 \n Seus dados cairam em 2 \n Seus dados cairam em 3 \n Seus dados cairam em 4 \n Seus dados cairam em 5"
                                )
                                .then(msg => {
                                  setTimeout(function() {
                                    msg
                                      .edit("Seus dados cairam em 1")
                                      .then(msg => {
                                        setTimeout(function() {
                                          msg
                                            .edit(
                                              "Seus dados cairam em 1 \n Seus dados cairam em 2"
                                            )
                                            .then(msg => {
                                              setTimeout(function() {
                                                msg
                                                  .edit(
                                                    "Seus dados cairam em 1"
                                                  )
                                                  .then(msg => {
                                                    setTimeout(function() {
                                                      msg
                                                        .edit(
                                                          "Seus dados cairam em 1 \n Seus dados cairam em 2"
                                                        )
                                                        .then(msg => {
                                                          setTimeout(
                                                            function() {
                                                              msg
                                                                .edit(
                                                                  "Seus dados cairam em 1"
                                                                )
                                                                .then(msg => {
                                                                  setTimeout(
                                                                    function() {
                                                                      msg
                                                                        .edit(
                                                                          "Seus dados cairam em 1 \n Seus dados cairam em 2"
                                                                        )
                                                                        .then(
                                                                          msg => {
                                                                            setTimeout(
                                                                              function() {
                                                                                msg
                                                                                  .edit(
                                                                                    "Seus dados cairam em 1"
                                                                                  )
                                                                                  .then(
                                                                                    msg => {
                                                                                      setTimeout(
                                                                                        function() {
                                                                                          msg.edit(
                                                                                            "Seus dados cairam em 1 \n Seus dados cairam em 2"
                                                                                          );
                                                                                        },
                                                                                        3000
                                                                                      );
                                                                                    }
                                                                                  );
                                                                              },
                                                                              3000
                                                                            );
                                                                          }
                                                                        );
                                                                    },
                                                                    3000
                                                                  );
                                                                });
                                                            },
                                                            3000
                                                          );
                                                        });
                                                    }, 3000);
                                                  });
                                              });
                                            });
                                        });
                                      });
                                  });
                                });
                            });
                          });
                      });
                    });
                });
              });
          });
        });
      });
    });
  }
};
