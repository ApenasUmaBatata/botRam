const Discord = require('discord.js');
module.exports = {
  config: {
    name: "ppt",
    aliases: ["jokenpo", "rps"]
  },
run: async (bot, message, args) => {
        if (!args[0]){
           return message.channel.send(`⠀\n Porfavor inclua sua escolha (pedra, papel ou tesoura)!\n Modo de uso: Ram jokenpo papel `)
        }
        let choices = ['pedra', 'papel', 'tesoura'];
        if (choices.includes((args[0]).toLowerCase())){
            let escolhas = choices[Math.floor(Math.random() * choices.length)];            
            if (escolhas == "pedra"){
                if (args[0].toLowerCase() == "pedra" ){
                    return message.channel.send('empate eu tambem tirei pedra')
                    }
                        if (args[0].toLowerCase() == "papel" ){
                            return message.channel.send('voce ganhou eu tirei pedra')
                        }
                            if (args[0].toLowerCase() == "tesoura" ){
                                return message.channel.send('eu ganhei eu tirei pedra')
                            }
            }
            if (escolhas == "papel"){
                if (args[0].toLowerCase() == "pedra" ){
                return message.channel.send('eu ganhei eu tirei papel')
                }
                    if (args[0].toLowerCase() == "papel" ){
                        return message.channel.send('empate eu tambem tirei papel')
                    }
                        if (args[0].toLowerCase() == "tesoura" ){
                            return message.channel.send('voce ganhou eu tirei papel')
                        }
            }
            if (escolhas == "tesoura"){
                if (args[0].toLowerCase() == "pedra" ){
                return message.channel.send('voce ganhou eu tirei tesoura')
                }
                    if (args[0].toLowerCase() == "papel" ){
                        return message.channel.send('eu ganhei eu tirei tesoura')
                    }
                        if (args[0].toLowerCase() == "tesoura" ){
                            return message.channel.send('empate eu tambem tirei tesoura')
                        }
            }
        } else {
            return message.channel.send('Porfavor inclua apenas pedra, papel ou tesoura!')
        }
    }
}