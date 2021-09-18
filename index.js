const { Client, Collection, Intents } = require("discord.js");
require('dotenv').config();
const bot = new Client({
    allowedMentions: { parse: ["users"], repliedUser: true },
    intents: [
        643,
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
});

["aliases", "commands",].forEach(x => bot[x] = new Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

bot.login(process.env.TOKEN);