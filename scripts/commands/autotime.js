module.exports.config = {
  name: "autotime",
  version: "2.0",
  Permssion: 0,
  credits: "MOHAMMAD-BADOL",//**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **//
  prefix : true,
  description: "সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!",
  category: "AutoTime",
  countDown: 3
};

module.exports.onLoad = async ({ api }) => {
  const timerData = {
    "12:00 PM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-দুপুর⏰ (𝟏𝟐:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
    },
"01:00 PM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-দুপুর⏰ (𝟎𝟏:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
    },
    "02:00 PM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-দুপুর⏰ (𝟎𝟐:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
    },
    "03:00 PM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-বিকাল⏰ (𝟎𝟑:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
    },
"04:00 PM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-বিকাল⏰ (𝟎𝟒:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
    },
"05:00 PM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-বিকাল⏰ (𝟎𝟓:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
    },
"06:00 PM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-সন্ধ্যা⏰ (𝟎𝟔:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
    },
"07:00 PM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-সন্ধ্যা⏰ (𝟎𝟕:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
    },
"08:00 PM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-রাত⏰ (𝟎𝟖:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
    },
"09:00 PM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-রাত⏰ (𝟎𝟗:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
    },
"10:00 PM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-রাত⏰ (𝟏𝟎:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
    },
"11:00 PM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-রাত⏰ (𝟏𝟏:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
    },
"12:00 AM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-রাত⏰ (𝟏𝟐:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
    },
"01:00 AM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-রাত⏰ (𝟎𝟏:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
    },
"02:00 AM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-রাত⏰ (𝟎𝟐:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
    },
"03:00 AM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-রাত⏰ (𝟎𝟑:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
    },
"04:00 AM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-ভোর⏰ (𝟎𝟒:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
    },
"05:00 AM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-ভোর⏰ (𝟎𝟓:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
    },
"06:00 AM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-সকাল⏰ (𝟎𝟔:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
    },
"07:00 AM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-সকাল⏰ (𝟎𝟕:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
    },
"08:00 AM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-সকাল⏰ (𝟎𝟖:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
    },
"09:00 AM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-সকাল⏰ (𝟎𝟗:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
    },
"10:00 AM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-সকাল⏰ (𝟏𝟎:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
    },
"11:00 AM": {
      message: "╭──╯𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╰──╮\n│▬▬▬▬▬▬▬▬▬▬▬▬\n├‣ 🔔-এখন-সময়-সকাল⏰ (𝟏𝟏:𝟎𝟎)\n├‣ 𝙱𝙾𝚃-𝙾𝚆𝙽𝙴𝚁: 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳-𝙱𝙰𝙳𝙾𝙻\n│▬▬▬▬▬▬▬▬▬▬▬▬\n╰──╮𝐌𝟏𝐌-𝐁𝟗𝐓___//𝟎𝟎𝟕╭──╯",
      url: "https://i.imgur.com/5GtdTKC.gif"
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
       let messageData = { body: timerData[currentTime].message,attachment:(await require('axios').get(timerData[currentTime].url, { responseType: 'stream' })).data };

        global.data.allThreadID.forEach(i => api.sendMessage(messageData, i));
      } catch (error) {
        console.error(`Failed to send message for time ${currentTime}:`, error);
      }
    }
    setTimeout(checkTimeAndSendMessage, 45000);
  };

  checkTimeAndSendMessage();
};

module.exports.run= ({}) => {};
