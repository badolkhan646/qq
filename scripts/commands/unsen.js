module.exports.config = {
  name: "remove",
  version: "1.0.1",
  permssion: 0,
  credits: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★",
  prefix: 'awto',
  description: "Unsend Message",
  category: "user",
  usages: "unsend",
  cooldowns: 0
};

module.exports.languages = {
  "en": {
    "returnCant": "",
    "missingReply": "Reply to the message you want to unsend."
  }
}

module.exports.run = function({ api, event, getText }) {
  if (event.messageReply.senderID != api.getCurrentUserID()) return api.sendMessage(getText("returnCant"), event.threadID, event.messageID);
  if (event.type != "message_reply") return api.sendMessage(getText("missingReply"), event.threadID, event.messageID);
  return api.unsendMessage(event.messageReply.messageID);
}
