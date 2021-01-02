const Discord = require("discord.js");
module.exports = {
  config: {
    name: "botinfo",
    aliases: ["info", "on", "convite", "invite", "bot", "ping"]
  },
  run: async (bot, message, args) => {
    await message.react("✅");

    let dias = 0; // variavel para definir dias
    let week = 0; // variavel para definir semanas
    let uptime = ``; // dentro dessa variavel, ficará armazenado todas as informações que criaremos abaixo
    let totalSegundos = bot.uptime / 1000; // definindo o maximo de segundos, no caso 1000s
    let horas = Math.floor(totalSegundos / 3600); // definindo o maximo de horas, no caso 3600s
    totalSegundos %= 3600; // fazendo uma conta basica, dos segundos
    let minutos = Math.floor(totalSegundos / 60); // um minuto e 60s
    let segundos = Math.floor(totalSegundos % 60);
    if (horas > 23) {
      dias = dias + 1; // adicionando +1 dia na conta
      horas = 0;
    }
    if (dias == 7) {
      dias = 0; // zerando os dias
      week = week + 1; // adicionando uma semana
    }
    if (week > 0) {
      uptime += `${week} week, `;
    }
    if (minutos > 60) {
      minutos = 0; // e zera os segundos
    }
    uptime += `\`${horas}h ${minutos}m ${segundos}s\``; // a finalização daquele espaco do comeco

    const moment = require("moment");
    moment.locale("pt-BR");
    let inline = true;
    let bicon = bot.user.displayAvatarURL();
    let botembed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(bicon)
      .setDescription("`Algumas informações sobre mim!`")
      .addField("__Meu nome__", `**${bot.user.username}**`, inline)
      .addField("__Meu criador__", "SrBatata#5199", inline)
    //.addField("__Meu ping__", `*${parseInt(bot.ws.ping)}*`, inline)
    //.addField("__**Nasci dia**__",`${moment(bot.user.createdAt).format("L")}!`)
      .addField("__**Atualmente tenho**__", `${bot.commands.size} comandos`)
      .addField("__**Estou acordada à**__", `${uptime}`);
    //.addField(`__**Vote em mim**__`, `[Top.gg](https://top.gg/bot/705547264537657465)`);

    message.channel.send(botembed);
  }
};
