const Discord = require("discord.js");
module.exports = {
  config: {
    name: "cargo",
    aliases: [""]
  },
  run: async (bot, message, args) => {
    let choices = [
      "verde",
      "azul",
      "vermelho",
      "rosa",
      "amarelo",
      "roxo",
      "preto",
      "branco"
    ].join("\n ");
    if (!args[0]) {
      let bicon = bot.user.displayAvatarURL();
      let eb = new Discord.MessageEmbed()
        .setThumbnail(bicon)
        .setDescription(`⠀\n\`Escolha uma das seguintes cores!\n ${choices}\``);
      message.delete();
      message.channel.send(eb).then(msg => {
        setTimeout(function() {
          msg.delete();
        }, 10000);
      });
    }
    if (
      message.member.roles.cache.some(r =>
        [
          "verde",
          "azul",
          "vermelho",
          "rosa",
          "amarelo",
          "roxo",
          "preto",
          "branco"
        ].includes(r.name)
      )
    ) {
      message.delete();
      return message.channel.send(`Você já possui cargo colorido`).then(msg => {
        setTimeout(function() {
          msg.delete();
        }, 5000);
      });
    } else {
      if (args[0].toLowerCase() == "verde") {
        let role = message.guild.roles.cache.find(r => r.name === "verde");
        if (role === undefined) {
          if (!message.member.hasPermission("MANAGE_ROLES")) {
            message.delete();
            return message.reply(`Você precisa da permissão \`Gerenciar Cargos\`.`).then(msg => {
                setTimeout(function() {
                  msg.delete();
                }, 5000);
              });
          }
          message.guild.roles.create({
            data: {
              name: "verde",
              color: "#43ec0a",
              permissions: [
                "ADD_REACTIONS",
                "VIEW_CHANNEL",
                "SEND_MESSAGES",
                "CONNECT",
                "SPEAK",
                "USE_VAD"
              ]
            }
          });
          message.delete();
          let bicon = bot.user.displayAvatarURL();
          let eb = new Discord.MessageEmbed()
            .setThumbnail(bicon)
            .setDescription(`⠀\n\`O cargo ${args[0]} não existia no servidor então eu tive de criar o cargo.\n Peço gentilmente que você dê o comando novamente!\``);
          return message.channel.send(eb).then(msg => {
            setTimeout(function() {
              msg.delete();
            }, 10000);
          });
        } else {
          message.delete();
          message.member.roles.add(role);
          let user = message.author.username;
          return message.channel.send(`${user} você pegou a cor ${args[0]}`).then(msg => {
              setTimeout(function() {
                msg.delete();
              }, 5000);
            });
        }
      }
      if (args[0].toLowerCase() == "azul") {
        let role = message.guild.roles.cache.find(r => r.name === "azul");
        if (role === undefined) {
          if (!message.member.hasPermission("MANAGE_ROLES")) {
            message.delete();
            return message.reply(`Você precisa da permissão \`Gerenciar Cargos\`.`).then(msg => {
                setTimeout(function() {
                  msg.delete();
                }, 5000);
              });
          }
          message.guild.roles.create({
            data: {
              name: "azul",
              color: "#1d6ec5",
              permissions: [
                "ADD_REACTIONS",
                "VIEW_CHANNEL",
                "SEND_MESSAGES",
                "CONNECT",
                "SPEAK",
                "USE_VAD"
              ]
            }
          });
          message.delete();
          let bicon = bot.user.displayAvatarURL();
          let eb = new Discord.MessageEmbed()
            .setThumbnail(bicon)
            .setDescription(`⠀\n\`O cargo ${args[0]} não existia no servidor então eu tive de criar o cargo.\n Peço gentilmente que você dê o comando novamente!\``);
          return message.channel.send(eb).then(msg => {
            setTimeout(function() {
              msg.delete();
            }, 10000);
          });
        } else {
          message.delete();
          message.member.roles.add(role);
          let user = message.author.username;
          return message.channel.send(`${user} você pegou a cor ${args[0]}`).then(msg => {
              setTimeout(function() {
                msg.delete();
              }, 5000);
            });
        }
      }
      if (args[0].toLowerCase() == "vermelho") {
        let role = message.guild.roles.cache.find(r => r.name === "vermelho");
        if (role === undefined) {
          if (!message.member.hasPermission("MANAGE_ROLES")) {
            message.delete();
            return message.reply(`Você precisa da permissão \`Gerenciar Cargos\`.`).then(msg => {
                setTimeout(function() {
                  msg.delete();
                }, 5000);
              });
          }
          message.guild.roles.create({
            data: {
              name: "vermelho",
              color: "#ec0a0a",
              permissions: [
                "ADD_REACTIONS",
                "VIEW_CHANNEL",
                "SEND_MESSAGES",
                "CONNECT",
                "SPEAK",
                "USE_VAD"
              ]
            }
          });
          message.delete();
          let bicon = bot.user.displayAvatarURL();
          let eb = new Discord.MessageEmbed()
            .setThumbnail(bicon)
            .setDescription(`⠀\n\`O cargo ${args[0]} não existia no servidor então eu tive de criar o cargo.\n Peço gentilmente que você dê o comando novamente!\``);
          return message.channel.send(eb).then(msg => {
            setTimeout(function() {
              msg.delete();
            }, 10000);
          });
        } else {
          message.delete();
          message.member.roles.add(role);
          let user = message.author.username;
          return message.channel.send(`${user} você pegou a cor ${args[0]}`).then(msg => {
              setTimeout(function() {
                msg.delete();
              }, 5000);
            });
        }
      }
      if (args[0].toLowerCase() == "rosa") {
        let role = message.guild.roles.cache.find(r => r.name === "rosa");
        if (role === undefined) {
          if (!message.member.hasPermission("MANAGE_ROLES")) {
            message.delete();
            return message.reply(`Você precisa da permissão \`Gerenciar Cargos\`.`).then(msg => {
                setTimeout(function() {
                  msg.delete();
                }, 5000);
              });
          }
          message.guild.roles.create({
            data: {
              name: "rosa",
              color: "#ff01e6",
              permissions: [
                "ADD_REACTIONS",
                "VIEW_CHANNEL",
                "SEND_MESSAGES",
                "CONNECT",
                "SPEAK",
                "USE_VAD"
              ]
            }
          });
          message.delete();
          let bicon = bot.user.displayAvatarURL();
          let eb = new Discord.MessageEmbed()
            .setThumbnail(bicon)
            .setDescription(`⠀\n\`O cargo ${args[0]} não existia no servidor então eu tive de criar o cargo.\n Peço gentilmente que você dê o comando novamente!\``);
          return message.channel.send(eb).then(msg => {
            setTimeout(function() {
              msg.delete();
            }, 10000);
          });
        } else {
          message.delete();
          message.member.roles.add(role);
          let user = message.author.username;
          return message.channel.send(`${user} você pegou a cor ${args[0]}`).then(msg => {
              setTimeout(function() {
                msg.delete();
              }, 5000);
            });
        }
      }
      if (args[0].toLowerCase() == "amarelo") {
        let role = message.guild.roles.cache.find(r => r.name === "amarelo");
        if (role === undefined) {
          if (!message.member.hasPermission("MANAGE_ROLES")) {
            message.delete();
            return message.reply(`Você precisa da permissão \`Gerenciar Cargos\`.`).then(msg => {
                setTimeout(function() {
                  msg.delete();
                }, 5000);
              });
          }
          message.guild.roles.create({
            data: {
              name: "amarelo",
              color: "#fcff00",
              permissions: [
                "ADD_REACTIONS",
                "VIEW_CHANNEL",
                "SEND_MESSAGES",
                "CONNECT",
                "SPEAK",
                "USE_VAD"
              ]
            }
          });
          message.delete();
          let bicon = bot.user.displayAvatarURL();
          let eb = new Discord.MessageEmbed()
            .setThumbnail(bicon)
            .setDescription(`⠀\n\`O cargo ${args[0]} não existia no servidor então eu tive de criar o cargo.\n Peço gentilmente que você dê o comando novamente!\``);
          return message.channel.send(eb).then(msg => {
            setTimeout(function() {
              msg.delete();
            }, 10000);
          });
        } else {
          message.delete();
          message.member.roles.add(role);
          let user = message.author.username;
          return message.channel.send(`${user} você pegou a cor ${args[0]}`).then(msg => {
              setTimeout(function() {
                msg.delete();
              }, 5000);
            });
        }
      }
      if (args[0].toLowerCase() == "roxo") {
        let role = message.guild.roles.cache.find(r => r.name === "roxo");
        if (role === undefined) {
          if (!message.member.hasPermission("MANAGE_ROLES")) {
            message.delete();
            return message.reply(`Você precisa da permissão \`Gerenciar Cargos\`.`).then(msg => {
                setTimeout(function() {
                  msg.delete();
                }, 5000);
              });
          }
          message.guild.roles.create({
            data: {
              name: "roxo",
              color: "#9d00fc",
              permissions: [
                "ADD_REACTIONS",
                "VIEW_CHANNEL",
                "SEND_MESSAGES",
                "CONNECT",
                "SPEAK",
                "USE_VAD"
              ]
            }
          });
          message.delete();
          let bicon = bot.user.displayAvatarURL();
          let eb = new Discord.MessageEmbed()
            .setThumbnail(bicon)
            .setDescription(`⠀\n\`O cargo ${args[0]} não existia no servidor então eu tive de criar o cargo.\n Peço gentilmente que você dê o comando novamente!\``);
          return message.channel.send(eb).then(msg => {
            setTimeout(function() {
              msg.delete();
            }, 10000);
          });
        } else {
          message.delete();
          message.member.roles.add(role);
          let user = message.author.username;
          return message.channel.send(`${user} você pegou a cor ${args[0]}`).then(msg => {
              setTimeout(function() {
                msg.delete();
              }, 5000);
            });
        }
      }
      if (args[0].toLowerCase() == "preto") {
        let role = message.guild.roles.cache.find(r => r.name === "preto");
        if (role === undefined) {
          if (!message.member.hasPermission("MANAGE_ROLES")) {
            message.delete();
            return message.reply(`Você precisa da permissão \`Gerenciar Cargos\`.`).then(msg => {
                setTimeout(function() {
                  msg.delete();
                }, 5000);
              });
          }
          message.guild.roles.create({
            data: {
              name: "preto",
              color: "#080808",
              permissions: [
                "ADD_REACTIONS",
                "VIEW_CHANNEL",
                "SEND_MESSAGES",
                "CONNECT",
                "SPEAK",
                "USE_VAD"
              ]
            }
          });
          message.delete();
          let bicon = bot.user.displayAvatarURL();
          let eb = new Discord.MessageEmbed()
            .setThumbnail(bicon)
            .setDescription(`⠀\n\`O cargo ${args[0]} não existia no servidor então eu tive de criar o cargo.\n Peço gentilmente que você dê o comando novamente!\``);
          return message.channel.send(eb).then(msg => {
            setTimeout(function() {
              msg.delete();
            }, 10000);
          });
        } else {
          message.delete();
          message.member.roles.add(role);
          let user = message.author.username;
          return message.channel.send(`${user} você pegou a cor ${args[0]}`).then(msg => {
              setTimeout(function() {
                msg.delete();
              }, 5000);
            });
        }
      }
      if (args[0].toLowerCase() == "branco") {
        let role = message.guild.roles.cache.find(r => r.name === "branco");
        if (role === undefined) {
          if (!message.member.hasPermission("MANAGE_ROLES")) {
            message.delete();
            return message.reply(`Você precisa da permissão \`Gerenciar Cargos\`.`).then(msg => {
                setTimeout(function() {
                  msg.delete();
                }, 5000);
              });
          }
          message.guild.roles.create({
            data: {
              name: "branco",
              color: "#ffffff",
              permissions: [
                "ADD_REACTIONS",
                "VIEW_CHANNEL",
                "SEND_MESSAGES",
                "CONNECT",
                "SPEAK",
                "USE_VAD"
              ]
            }
          });
          message.delete();
          let bicon = bot.user.displayAvatarURL();
          let eb = new Discord.MessageEmbed()
            .setThumbnail(bicon)
            .setDescription(`⠀\n\`O cargo ${args[0]} não existia no servidor então eu tive de criar o cargo.\n Peço gentilmente que você dê o comando novamente!\``);
          return message.channel.send(eb).then(msg => {
            setTimeout(function() {
              msg.delete();
            }, 10000);
          });
        } else {
          message.delete();
          message.member.roles.add(role);
          let user = message.author.username;
          return message.channel.send(`${user} você pegou a cor ${args[0]}`).then(msg => {
              setTimeout(function() {
                msg.delete();
              }, 5000);
            });
        }
      } else {
        let user = message.author.username;
        message.delete();
        message.channel.send(`${user} por favor inclua apenas as cores que estiverem na lista!`).then(msg => {
            setTimeout(function() {
              msg.delete();
            }, 2000);
          });
      }
    }
  }
};

/*          message.guild.roles.create({
            data: {
              name: "azul",
              color: "BLUE",
              permissions: 104324673
            }
          });  */
