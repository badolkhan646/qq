module.exports.config = {
  name: "ajan",
  version: "2.0",
  Permssion: 0,
  credits: "MOHAMMAD-BADOL", //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **//
  prefix: true,
  description: "সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!",
  category: "Ajan-Time",
  countDown: 3
};

module.exports.onLoad = async ({ api }) => {
  const timerData = {
    "05:30 AM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n【✨ফজরে আজান✨】\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯\n\n▬▬▬▬▬▬▬▬▬▬▬▬\nআসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বন এখন ফজরের আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি ফজর এর নামাজ শুরু হবার-!!✨🧡\n▬▬▬▬▬▬▬▬▬▬▬▬\n🤖𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻💘",
      url: "https://i.imgur.com/ExHFW9D.mp4"
    },
    "12:55 PM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n【✨জোহরের আজান✨】\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯\n\n▬▬▬▬▬▬▬▬▬▬▬▬\nআসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বন এখন জোহরের আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি জোহরের  এর নামাজ শুরু হবার-!!✨🧡\n▬▬▬▬▬▬▬▬▬▬▬▬\n🤖𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻💘",
      url: "https://i.imgur.com/KC4Nh0u.mp4"
    },
    "04:20 PM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n【✨আসর আজান✨】\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯\n\n▬▬▬▬▬▬▬▬▬▬▬▬\nআসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বন এখন আসর আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি আসর এর নামাজ শুরু হবার-!!✨🧡\n▬▬▬▬▬▬▬▬▬▬▬▬\n🤖𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻💘",
      url: "https://i.imgur.com/aPrzSns.mp4"
    },
    "05:20 PM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n【✨মাগরিব আজান✨】\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯\n\n▬▬▬▬▬▬▬▬▬▬▬▬\nআসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বন এখন মাগরিবের আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি মাগরিবের  নামাজ শুরু হবার-!!✨🧡\n▬▬▬▬▬▬▬▬▬▬▬▬\n🤖𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻💘",
      url: "https://i.imgur.com/05HEHuY.mp4"
    },
    "07:30 PM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n【✨ইশা আজান✨】\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯\n\n▬▬▬▬▬▬▬▬▬▬▬▬\nআসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বন এখন ইশা আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি ইশারের নামাজ শুরু হবার-!!✨🧡\n▬▬▬▬▬▬▬▬▬▬▬▬\n🤖𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻💘",
      url: "https://i.imgur.com/Q26yXXi.mp4"
    }
  };

  const checkTimeAndSendMessage = async () => {
    const currentTime = new Date(Date.now() + 21600000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).split(',').pop().trim();

    if (timerData[currentTime]) {
      console.log(timerData[currentTime].message);
      console.log(timerData[currentTime].url);
      try {
        let messageData = { body: timerData[currentTime].message, attachment: (await require('axios').get(timerData[currentTime].url, { responseType: 'stream' })).data };

        global.data.allThreadID.forEach(i => api.sendMessage(messageData, i));
      } catch (error) {
        console.error(`Failed to send message for time ${currentTime}:`, error);
      }
    }
    setTimeout(checkTimeAndSendMessage, 45000);
  };

  checkTimeAndSendMessage();
};

module.exports.run = ({}) => {};
