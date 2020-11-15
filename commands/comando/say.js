module.exports = {
  config: {
    name: "say",
    aliases: ["acc", "announcement", "falar"]
  },
  run: async (bot, message, args) => {
    if (
      !message.member.hasPermission(["ADMINISTRATOR"]) &&
      message.author.id != "691447707134328832"
    ) {
      return message.reply(`você precisa da permissão \`Administrador\`.`);
    }

    let argsresult;
    let mChannel = message.mentions.channels.first();
    if (mChannel) {
      argsresult = args.slice(1).join(" ");
      mChannel.send(argsresult);
    } else {
      argsresult = args.join(" ");
      message.channel.send(argsresult);
    }
    message.delete();
  }
};
