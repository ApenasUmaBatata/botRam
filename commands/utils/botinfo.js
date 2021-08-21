const Discord = require("discord.js");

module.exports = {
  config: {
    name: "botinfo",
    aliases: ["info", "on", "convite", "invite", "bot", "ping"]
  },
  run: async (bot, message, args) => {
    //await message.react("✅");

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
    uptime += `${horas}h ${minutos}m ${segundos}s`; // a finalização daquele espaco do comeco

    let inline = true;
    let bicon = bot.user.displayAvatarURL();
    let botembed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(bicon)
      .setImage('https://i.imgur.com/t8s41Lu.png')
      .setDescription("`Algumas informações sobre mim!`")
      .addField(`Informações gerais`, `\`Me chamo ${bot.user.username}, fui codificada por SrBatata#1001\``)
      .addField(`Informações adicionais`, `\`Atualmente tenho ${bot.commands.size} comandos, estou acordada á ${uptime}, me encontro em ${bot.guilds.cache.size} servidores\``)
      .addField(`Me convide`, `[Clicando aqui!](https://discord.com/api/oauth2/authorize?client_id=705547264537657465&permissions=8&scope=bot)`)
    //.addField(`__**Vote em mim**__`, `[Top.gg](https://top.gg/bot/705547264537657465)`);
    message.channel.send({ embeds: [botembed] });
  }
};
