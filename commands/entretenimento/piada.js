const Discord = require("discord.js");
module.exports = {
  config: {
    name: "piada",
    aliases: ["piadas", "fun"]
  },
  run: async (bot, message, args, member) => {
    await message.react("✅");

    var list = [
      "``Por que a aranha é o animal mais carento do mundo?`` \n\n Porque ela é um ARAC_NEEDYOU_.",
      "``Por que o pinheiro não se perde na floresta?`` \n\n Porque ele tem _uma pinha_. \n (um mapinha).",
      "``Sabe como é a piada do pintinho caipira?`` \n\n _PIR_",
      "``O que o pagodeiro foi fazer na igreja?`` \n\n Foi cantar _PÁ GOD_.",
      "``Por que o Napoleão  era chamado sempre pras festas na frança?`` \n\n Porque ele era _BOM NA PARTY_.",
      "``O que aconteceu com os lápis quando souberam que o dono da faber castell morreu?`` \n\n Eles ficaram _DESAPONTADOS_.",
      "``A plantinha foi no hospital, mas não foi atendidda. Por quê?`` \n\n Porque lá só tinha médico de _PLANTÃO_.",
      "``Você conhece a piada do Pônei?`` \n\n _Pô nei eu_.",
      "``Qual é a fórmula da água benta?`` \n\n _H DEUS O_.",
      "``O que o pato falou pra pata?`` \n\n Vem _QUÁ_.",
      "``O que é o que é: maconha enrolada em jornal?`` \n\n _BASEADO EM FATOS REAIS_.",
      "``Por que a velhinha não usa relógio?`` \n\n Porque ela é _SEM HORA_. \n (senhora).",
      "``O que a vaca disse pro boi?`` \n\n _TE AMUUUUUUUUUU..._",
      "``Havia dois caminhões voando, um caiu. Porque o outro continuou voando?`` \n\n Porque era um _CAMINHÃO-PIPA_.",
      "``Por que a formiga tem quatro patas?`` \n\n Porque se tivesse cinco se chamaria _FIVEMIGA_.",
      "``Quando os americanos comeram carne pela primeira vez?`` \n\n Quando chegou Cristóvão _COM LOMBO_."
    ];

    let altstatus = list[Math.floor(Math.random() * list.length)];

    let embeb = new Discord.MessageEmbed()
      .setFooter(
        `Piada solicitada por: ${message.author.username}`,
        message.author.displayAvatarURL()
      )
      .setColor("RANDOM")
      .setDescription(`${altstatus}`);

    message.channel.send(embeb);
  }
};
