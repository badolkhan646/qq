module.exports.config = {
    name: "namebot",
    version: "1.0.0",
    permission: 2,
    credits: "MOHAMMAD-BADOL", //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **//
    prefix: true,
    description: "Change the nickname of bot in the entire bot!",
    category: "System",
    usages: "[Nickname needs to be placed]",
    cooldowns: 2,
};

module.exports.run = async ({ event, api, global, args, Threads, client }) => {
    const custom = args.join(" "),
            allThread = await Threads.getAll(["threadID"]),
            idBot = api.getCurrentUserID();
    var threadError = [],
        count = 0;
    if (custom.length != 0) {
        for (const idThread of allThread) {
            api.changeNickname(custom, idThread.threadID, idBot, (err) => (err) ? threadError.push(idThread.threadID) : '');
            count+=1;
await new Promise(resolve => setTimeout(resolve, 500));
        }
return api.sendMessage(`Has changed the name successfully ${count} group`, event.threadID, () => {
if (threadError != 0) return api.sendMessage("[!] Cannot change the name at" + threadError.lenght + " Group",event.threadID, event.messageID)
        }, event.messageID);
    }
    else {
for (const idThread of allThread) {
const threadSetting = client.threadSetting.get(idThread.threadID) || {};
api.changeNickname(`[ ${(threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by CatalizCS and SpermLord" : global.config.BOTNAME}`, 
idThread.threadID, idBot, (err) => (err) ? threadError.push(idThread.threadID) : '');
            count+=1;
await new Promise(resolve => setTimeout(resolve, 500));
        }
 return api.sendMessage(`Has changed the name successfully ${count} group`, event.threadID, () => {
if (threadError != 0) return api.sendMessage("[!] Cannot change the name at " + threadError.length + " Group",event.threadID, event.messageID)
        }, event.messageID);
    }
}