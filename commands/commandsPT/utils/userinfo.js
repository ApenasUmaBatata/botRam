const { MessageEmbed } = require("discord.js");
module.exports = {
  config: {
    name: "userinfo",
    aliases: ["membroinfo", "memberinfo", "user", "usuario", "membro"]
  },
  run: async (bot, message, args) => {
    //await message.react("✅");
    let inline = true;
    //let presence = true;
    let picon = message.mentions.members.first() || message.member;
    //const status = {
    //online: "Online",
    //idle: "Idle",
    //dnd: "Não perturbe",
    //offline: "Offline/Invisible"};

    const member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;
    //let target = message.mentions.users.first() || message.author;

    if (member.user.bot === true) {
      bot = "Sim";
    } else {
      bot = "Não";
    }

    let embed = new MessageEmbed()
      //.setAuthor(member.user.username)
      .setThumbnail(picon.user.avatarURL())
      .setColor("RANDOM")
      .addField("Nome de usuário", `${member.user.tag}`, inline)
      .addField("Nickname", `${member.nickname !== null ? `${member.nickname}` : "Nenhum"}`, true)
      .addField("Bot", `${bot}`, inline, true)
      //.addField("Status", `${status[member.user.presence.status]}`, inline, true)
      //.addField("Jogando", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}`: "Não está jogando"}`, inline, true)
      .addField("Cargos", `${member.roles.cache
        .filter(r => r.id !== message.guild.id)
        .map(roles => `\`${roles.name}\``)
        .join(" **|** ") || "Não possui cargos"}`)
      .setFooter(`Informações sobre: ${member.user.username}`)
      .setTimestamp();

    message.reply({ embeds: [embed] });
  }
};
