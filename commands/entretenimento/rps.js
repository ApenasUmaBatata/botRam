const Discord = require('discord.js');
module.exports = {
  config: {
    name: "rps",
    aliases: ["."]
  },
run: async (bot, message, args) => {
        if (!args[0]){
           return message.channel.send('Please include your choice')
        }
        let choices = ['rock', 'paper', 'scissors'];
        if (choices.includes((args[0]).toLowerCase())){
            let escolhas = choices[Math.floor(Math.random() * choices.length)];
            if (escolhas == choices){
                return message.channel.send('It was a tie , we both had '+ (args[0]).toLowerCase())    
            }
            if (escolhas == "rock"){
                if (args[0].toLowerCase()== "rock" ){
                    return message.channel.send('empate eu tambem tirei pedra')
                    }
                        if (args[0].toLowerCase()== "paper" ){
                            return message.channel.send('voce ganhou eu tirei pedra')
                        }
                            if (args[0].toLowerCase()== "scissors" ){
                                return message.channel.send('eu ganhei eu tirei pedra')
                            }
            }
            if (escolhas == "paper"){
                if (args[0].toLowerCase()== "rock" ){
                return message.channel.send('eu ganhei eu tirei papel')
                }
                    if (args[0].toLowerCase()== "paper" ){
                        return message.channel.send('empate eu tambem tirei papel')
                    }
                        if (args[0].toLowerCase()== "scissors" ){
                            return message.channel.send('voce ganhou eu tirei papel')
                        }
            }
            if (escolhas == "scissors"){
                if (args[0].toLowerCase()== "rock" ){
                return message.channel.send('voce ganhou eu tirei tesoura')
                }
                    if (args[0].toLowerCase()== "paper" ){
                        return message.channel.send('eu ganhei eu tirei tesoura')
                    }
                        if (args[0].toLowerCase()== "scissors" ){
                            return message.channel.send('empate eu tambem tirei tesoura')
                        }
            }
        } else {
            return message.channel.send('Please include either: Rock, Paper or Scissors!')
        }
    }
}