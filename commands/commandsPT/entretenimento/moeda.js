module.exports = {
  config: {
    name: "flip",
    aliases: ["moeda"]
  },
  run: async (bot, message, args) => {
    //await message.react("✅");

    var list = ["cara", "coroa"]; //criando uma lista com as opções de queda

    let altstatus = list[Math.floor(Math.random() * list.length)]; //fazendo os itens da lista se randomizarem

    message.reply(`${message.author.username} sua moeda caiu em ...`).then(message => {
      setTimeout(function () {
        message.edit(`${altstatus}`); //enviando a mensagem e em 5 segundos fazendo ela editar para o resultado
      }, 5000);
    });
  }
};
