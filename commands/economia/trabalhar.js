const db = require("quick.db"); // Puxando a DataBase. *Instale utilizando: npm i quick.db --save
const ms = require("parse-ms"); // Puxando a NPM parse-ms, que iremos utilizar para criar o timeout. *Instale utilizando: npm i parse-ms --save

module.exports = {
  config: {
    name: "trabalhar",
    aliases: ["work"]
  },
  run: async (bot, message, args, tools) => {
    await message.react("✅");

    // Lista funções de um Programador irá fazer
    const domador = ["Cavalos", "Robôs", "Cachorros", "Unicórnios"];
    // Lista funções de um Designer
    const artesão = [
      "Esculturas de argila",
      "Mesas de madeira",
      "Mesas de madeira rara",
      "Jarros de argila",
      "Jarros revestido de ouro"
    ];

    const ferreiro = [
      "Espadas de uma mão",
      "Espadas de jade",
      "Espadas rara",
      "Espadas revestida de ouro",
      "Escudos de jade"
    ];

    const armeiro = ["Arcos divino", "Espingardas sagrada"];

    const rep = ["reparou", "criou", "fundiu"];

    const quantidade = ["2", "3", "4"];

    let timeout = 7.2e+6; // Definindo um tempo para utilizar o comando, no caso desse, 5 horas (em milisegundos)
    let quantia = Math.floor(Math.random() * 50) + 10; // Definindo quanto o usuário pode ganhar
    let trabalho = await db.get(`work_${message.author.id}`); // Puxando da DataBase o 'work', que vai definir que o mesmo trabalhou

    if (trabalho !== null && timeout - (Date.now() - trabalho) > 0) {
      // Puxando o trabalho e iremos dar o timeout
      let time = ms(timeout - (Date.now() - trabalho)); // Definindo que 'time' será os tempos
      message.channel.send(
        `Você pode exercer trabalho novamente em: **${time.hours}h ${time.minutes}m!**`
      );
    } else {
      var emprego = await db.get(`trabaio_${message.author.id}`); // Puxando o 'trabaio', que utilizamos como emprego
      if (emprego === null) {
        // Caso o 'trabaio' do usuário seja 'null', ou seja, zero, iremos avisar que ele precisa de um emprego
        return message.channel.send(
          `para trabalhar, você precisa de um emprego! Utilize \`Ram emprego\`.`
        );
      } else {
      } // Caso o usuário seja um Programador, que definimos como Um (1)
      if (emprego === 1) {
        // Puxando a lista que criamos no início
        message.channel.send(
          `Hoje, você domou **${
            quantidade[Math.floor(Math.random() * quantidade.length)]
          }** **${
            domador[Math.floor(Math.random() * domador.length)]
          }** e por isso, recebeu: **🔆 ${quantia}** moedas sagradas`
        );
        db.add(`money_${message.author.id}`, quantia); // setando a 'quantia' de dinheiro por trabalhar hoje
        db.set(`work_${message.author.id}`, Date.now()); // Setando o timeout que criamos acima, no 'work', salvando na DataBase
      } // Caso o usuário seja um Programador, que definimos como Dois (2)
      if (emprego === 2) {
        // Puxando a lista que criamos no início
        message.channel.send(
          `Hoje, você criou **${
            quantidade[Math.floor(Math.random() * quantidade.length)]
          }** **${
            artesão[Math.floor(Math.random() * artesão.length)]
          }** e por isso, recebeu: **🔆 ${quantia}** moedas sagradas`
        );
        db.add(`money_${message.author.id}`, quantia); // setando a 'quantia' de dinheiro por trabalhar hoje
        db.set(`work_${message.author.id}`, Date.now()); // Setando o timeout que criamos acima, no 'work', salvando na DataBase
      }
      if (emprego === 3) {
        // Puxando a lista que criamos no início
        message.channel.send(
          `Hoje, você criou **${
            quantidade[Math.floor(Math.random() * quantidade.length)]
          }** **${
            ferreiro[Math.floor(Math.random() * ferreiro.length)]
          }** e por isso, recebeu: **🔆 ${quantia}** moedas sagradas`
        );
        db.add(`money_${message.author.id}`, quantia); // setando a 'quantia' de dinheiro por trabalhar hoje
        db.set(`work_${message.author.id}`, Date.now()); // Setando o timeout que criamos acima, no 'work', salvando na DataBase
      }
      if (emprego === 4) {
        // Puxando a lista que criamos no início
        message.channel.send(
          `Hoje, você ${rep[Math.floor(Math.random() * rep.length)]} **${
            quantidade[Math.floor(Math.random() * quantidade.length)]
          }** **${
            armeiro[Math.floor(Math.random() * armeiro.length)]
          }** e por isso, recebeu: **🔆 ${quantia}** moedas sagradas`
        );
        db.add(`money_${message.author.id}`, quantia); // setando a 'quantia' de dinheiro por trabalhar hoje
        db.set(`work_${message.author.id}`, Date.now()); // Setando o timeout que criamos acima, no 'work', salvando na DataBase
      }
    }
  }
};
