const { Client, Collection } = require("discord.js");
require('dotenv').config();
const bot = new Client({ intents: 643, allowedMentions: { parse: ["users"], repliedUser: true }}); 

["aliases", "commands",].forEach(x => bot[x] = new Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

bot.login(process.env.TOKEN);