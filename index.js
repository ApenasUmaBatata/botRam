const { Client, Collection } = require("discord.js");

const bot = new Client();
bot.queue = new Map();

["aliases", "commands",].forEach(x => bot[x] = new Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

bot.login(process.env.TOKEN);