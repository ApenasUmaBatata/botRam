const Discord = require("discord.js");
module.exports = {
  config: {
    name: "calculo",
    aliases: ["calc","conta"]
  },
  run: async (bot, message, args) => {
    let method = args[1];
    let numUm = Number(args[0]);
    let numDois = Number(args[2]);

    const operations = [
      "Soma: +",
      "Subtração: -",
      "Multiplicação: x",
      "Divisão: /"
    ].join("\n");

    if (method == undefined) {
      let bicon = bot.user.displayAvatarURL();
      let embed = new Discord.MessageEmbed()
        .setThumbnail(bicon)
        .setTitle(`Uma ajudinha para você!`)
        .setColor("PURPLE")
        .setDescription(`${operations}`);
      message.delete();
      return message.channel.send({ embeds: [embed] }).then(msg => {
        setTimeout(function() {
          msg.delete();
        }, 10000);
      });
    }

    if (!args[1] == undefined) {
      message.delete();
      return message.reply("Identifique o primeiro valor.").then(msg => {
        setTimeout(function() {
          msg.delete();
        }, 10000);
      });
    }

    if (!args[2] == undefined) {
      message.delete();
      return message.reply("Identifique o segundo valor.").then(msg => {
        setTimeout(function() {
          msg.delete();
        }, 10000);
      });
    }

    if (isNaN(numUm) | (numUm === "")) {
      message.delete();
      return message.reply("Número 1 não foi encontrado!").then(msg => {
        setTimeout(function() {
          msg.delete();
        }, 10000);
      });
    }
    if (isNaN(numDois) | (numDois === "")) {
      message.delete();
      return message.reply("Numero 2 nao foi encontrado!").then(msg => {
        setTimeout(function() {
          msg.delete();
        }, 10000);
      });
    }
    if (method === "+") {
      message.delete();
      let doMath = numUm + numDois;
      message.channel.send(`${numUm} + ${numDois} = ${doMath}`).then(msg => {
        setTimeout(function() {
          msg.delete();
        }, 10000);
      });
    }

    if (method === "-") {
      message.delete();
      let doMath = numUm - numDois;
      message.channel.send(`${numUm} - ${numDois} = ${doMath}`).then(msg => {
        setTimeout(function() {
          msg.delete();
        }, 10000);
      });
    }

    if (method === "x") {
      message.delete();
      let doMath = numUm * numDois;
      message.channel.send(`${numUm} x ${numDois} = ${doMath}`).then(msg => {
        setTimeout(function() {
          msg.delete();
        }, 10000);
      });
    }

    if (method === "/") {
      message.delete();
      let doMath = numUm / numDois;
      message.channel.send(`${numUm} / ${numDois} = ${doMath}`).then(msg => {
        setTimeout(function() {
          msg.delete();
        }, 10000);
      });
    }
  }
};
