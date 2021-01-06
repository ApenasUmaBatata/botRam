const Discord = require('discord.js');
module.exports = {
  config: {
    name: "cargo",
    aliases: [""]
  },
run: async (bot, message, args) => {
        if (!args[0]){
           return message.channel.send(`⠀\n Porfavor inclua sua escolha (pedra, papel ou tesoura)!\n Modo de uso: Ram jokenpo papel `)
        }
        let choices = ['azul', 'verde', 'vermelho'];
        if (choices.includes((args[0]).toLowerCase())){
                if (args[0].toLowerCase() == "azul" ){
                let role = message.guild.roles.cache.find(r => r.name === "azul")
                member.roles.add(role)
                    return message.channel.send('empate eu tambem tirei pedra')
                    }
        } else {
            return message.channel.send('Porfavor inclua apenas pedra, papel ou tesoura!')
        }
    }
}