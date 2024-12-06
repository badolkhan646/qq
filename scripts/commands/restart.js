module.exports.config = {
  name: "resed",
  version: "7.0.0",
  permission: 2,
  credits: "MOHAMMAD-BADOL",//**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **//
  prefix: false,
  description: "restart bot system",
  category: "admin",
  usages: "restart",
  cooldowns: 5,
  dependencies: {
    "process": ""
  }
};
module.exports.run = async function({ api, event, args, Threads, Users, Currencies, models }) {
  const process = require("process");
  const { threadID, messageID } = event;
  api.sendMessage(`restar ${global.config.BOTNAME} ｢⏳｣ ,`, threadID, ()=> process.exit(1));
}
