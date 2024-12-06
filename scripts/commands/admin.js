module.exports.config = {
  name: "admin",
  version: "1.0.0",
  permission: 0,
  credits: "MOHAMMAD-BADOL", //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **//
  prefix: true,
  description: "",
  category: "prefix",
  usages: "",
  cooldowns: 5,
  dependencies: 
{
  "request":"",
  "fs-extra":"",
  "axios":""
}
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
  hours = Math.floor(time / (60 * 60)),
  minutes = Math.floor((time % (60 * 60)) / 60),
  seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");

var callback = () => api.sendMessage({body:`
╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 𝐁𝐎𝐓-𝐎𝐖𝐍𝐄𝐑: 𝐌𝐁𝐂-𝐊𝟏𝐍𝐆-𝟎𝟎𝟕\n├‣ 𝐍𝐚𝐦𝐞: 𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃-𝐁𝐀𝐃𝐎𝐋 \n├‣ 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: মোহাম্মদ বাদল চৌধুরী \n├‣ 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧: 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧 \n├‣ 𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐊𝐡𝐮𝐥𝐧𝐚 \n├‣ 𝐆𝐞𝐧𝐝𝐞𝐫: 𝐌𝐚𝐥𝐞 \n├‣ 𝐀𝐠𝐞: 𝟏𝟖+ \n├‣ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩:  𝐒𝐢𝐧𝐠𝐥𝐞 \n├‣ 𝐖𝐨𝐫𝐤: 𝐉𝐨𝐛 🚘🚙🛻🚚🚛 \n├‣ 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦: t.me/M9H4MM4D_B4D9L \n├‣ 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: https://m.me/MBC.K1NG.007 \n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕╭──╯`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
  fs.unlinkSync(__dirname + "/cache/1.png"));  
    return request(encodeURI(`https://graph.facebook.com/100001381266797/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
 };