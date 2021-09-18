const { readdirSync } = require("fs");

module.exports = bot => {
  const load = dirs => {
    const commands = readdirSync(`./commands/commandsPT/${dirs}/`).filter(d =>
      d.endsWith(".js")
    );
    for (let file of commands) {
      let pull = require(`../commands/commandsPT/${dirs}/${file}`);
      bot.commands.set(pull.config.name, pull);
      if (pull.config.aliases)
        pull.config.aliases.forEach(a => bot.aliases.set(a, pull.config.name));
    }
  };
  ["comando", "entretenimento", "administraçãoPT", "rpg", "importantesPT", "utils"].forEach(x => load(x));
  const loa = dirs => {
    const commands = readdirSync(`./commands/commandsEN/${dirs}/`).filter(d =>
      d.endsWith(".js")
    );
    for (let file of commands) {
      let pul = require(`../commands/commandsEN/${dirs}/${file}`);
      bot.commands.set(pul.config.name, pul);
      if (pul.config.aliases)
        pul.config.aliases.forEach(a => bot.aliases.set(a, pul.config.name));
    }
  };
  ["importantesEN", "administraçãoEN"].forEach(x => loa(x));
};
