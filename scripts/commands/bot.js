const axios = require('axios');

module.exports = {
    config: {
      name: "bot",
      version: "1.0.0",
      permission: 0,
      credits: "MOHAMMAD-BADOL",//**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **//
      description: "bot-hi-hlw",
      prefix: false,
      category: "talk",
      usages: "hi",
      cooldowns: 5,
    },

  handleReply: async function ({ api, event, handleReply }) {
    try {
    const apis = await axios.get('https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json')
const n = apis.data.api
      const response = await axios.get(`${n}/sim?type=ask&ask=${encodeURIComponent(event.body)}`);
      console.log(response.data);
      const result = response.data.data.msg;

      
      api.sendMessage(result, event.threadID, (error, info) => {
        if (error) {
          console.error('Error replying to user:', error);
          return api.sendMessage('An error occurred while processing your request. Please try again later.', event.threadID, event.messageID);
        }
        global.client.handleReply.push({
          type: 'reply',
          name: this.config.name,
          messageID: info.messageID,
          author: event.senderID,
          head: event.body
        });
      }, event.messageID);

    } catch (error) {
      console.error('Error in handleReply:', error);
      api.sendMessage('An error occurred while processing your request. Please try again later.', event.threadID, event.messageID);
    }
  },


  
  run: async function ({ api, event, args, Users }) {
    try {
      const msg = args.join(" ");
      if (!msg) {
        var tl = ["fuck you suna🍌", "মুরুব্বী মুরুব্বী  উহু উহু উহু😑", "হা বলো😒,কি করতে পারি😐😑?", "এতো ডাকছিস কোনো?গালি শুনবি নাকি? 🤬", "মেয়ে হলে বস মোহাম্মদ বাদল চৌধুরী এর সাথে প্রেম করো🙈??. ", "আরে Bolo আমার জান ,কেমন আসো?😚 ", "Bot বলে অসম্মান করচ্ছিছ,😰😿", "Hop bedi😾,Boss বল boss😼", "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু", "Bot না , জানু বল জানু 😘 ", "বার বার Disturb করেছিস কোনো😾,আমার বস মোহাম্মদ বাদল চৌধুরী এর এর সাথে ব্যাস্ত আসি😋", "আমি গরীব এর সাথে কথা বলি না😼😼", "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 ", "আরে আমি মজা করার mood এ নাই😒", "হা জানু , এইদিক এ আসো কিস দেই🤭 😘", "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣", "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 ", "আমাকে ডেকো না,আমি ব্যাস্ত আসি", "কি হলো ,মিস টিস করচ্ছিস নাকি🤣", "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏", "কালকে দেখা করিস তো একটু 😈", "হা বলো, শুনছি আমি 😏", "আর কত বার ডাকবি ,শুনছি তো", "বস মোহাম্মদ বাদল চৌধুরী কে Ummmmha দে 😒", "বলো কি করতে পারি তোমার জন্য", "আমি তো অন্ধ কিছু দেখি না🐸 😎", "Bot না জানু,বল 😌", "বলো জানু 🌚", "তোর কি চোখে পড়ে না আমি বস মোহাম্মদ বাদল চৌধুরী এর সাথে ব্যাস্ত আসি😒", "༊━━🦋নামাজি মানুষেরা সব থেকে বেশি সুন্দর হয়..!!😇🥀 🦋 কারণ.!! -অজুর পানির মত শ্রেষ্ঠ মেকআপ দুনিয়াতে নেই༊━ღ━༎🥰🥀 🥰-আলহামদুলিল্লাহ-🥰", "- শখের নারী  বিছানায় মু'তে..!🙃🥴", "-𝐈'𝐝 -তে সব 𝐖𝐨𝐰 𝐖𝐨𝐰 বুইড়া বেডি-🐸💦", "🥛-🍍👈 -লে খাহ্..!😒🥺", "- অনুমতি দিলে 𝚈𝚘𝚞𝚃𝚞𝚋𝚎-এ কল দিতাম..!😒", "~আমি মারা গেলে..!🙂 ~অনেক মানুষ বিরক্ত হওয়া থেকে বেঁচে  যাবে..!😅💔", "🍒---আমি সেই গল্পের বই-🙂 -যে বই সবাই পড়তে পারলেও-😌 -অর্থ বোঝার ক্ষমতা কারো নেই..!☺️🥀💔", "~কার জন্য এতো মায়া...!😌🥀 ~এই শহরে আপন বলতে...!😔🥀 ~শুধুই তো নিজের ছায়া...!😥🥀", "- কারেন্ট একদম বেডি'গো মতো- 🤧 -খালি ঢং করে আসে আবার চলে যায়-😤😾🔪", "- সানিলিওন  আফারে ধর্ষনের হুমকি দিয়ে আসলাম - 🤗 -আর 🫵তুমি য়ামারে খেয়ে দিবা সেই ভয় দেখাও ননসেন বেডি..!🥱😼", "- দুনিয়ার সবাই প্রেম করে.!🤧 -আর মানুষ আমার বস মোহাম্মদ বাদল চৌধুরী কে সন্দেহ করে.!🐸", "- আমার থেকে ভালো অনেক পাবা-🙂 -কিন্তু সব ভালো তে কি আর ভালোবাসা থাকে..!💔🥀", "- পুরুষকে সবচেয়ে বেশি কষ্ট দেয় তার শখের নারী...!🥺💔👈", "- তোমার লগে দেখা হবে আবার - 😌 -কোনো এক অচেনা গলির চিপায়..!😛🤣👈", "- থাপ্পড় চিনোস থাপ্পড়- 👋👋😡 -চিন্তা করিস না তরে মারমু না-🤗 -বস মোহাম্মদ বাদল চৌধুরী আমারে মারছে - 🥱 - উফফ সেই স্বাদ..!🥵🤤💦", "- অবহেলা করিস না-😑😪 - যখন নিজেকে বদলে ফেলবো -😌 - তখন আমার চেয়েও বেশি কষ্ট পাবি..!🙂💔", "- বন্ধুর সাথে ছেকা খাওয়া গান শুনতে শুনতে-🤧 -এখন আমিও বন্ধুর 𝙴𝚇 কে অনেক 𝙼𝙸𝚂𝚂 করি-🤕🥺", "-৯৯টাকায় ৯৯জিবি ৯৯বছর-☺️🐸 -অফারটি পেতে এখনই আমাকে প্রোপস করুন-🤗😂👈", "-প্রিয়-🥺 -তোমাকে না পেলে আমি সত্যি-😪 -আরেকজন কে-😼 -পটাতে বাধ্য হবো-😑🤧", "•-কিরে🫵 তরা নাকি  prem করস..😐🐸•আমারে একটা করাই দিলে কি হয়-🥺", "- যেই আইডির মায়ায় পড়ে ভুল্লি আমারে.!🥴- তুই কি যানিস সেই আইডিটাও আমি চালাইরে.!🙂"]
        var name = await Users.getNameUser(event.senderID);
        var badolbot = tl[Math.floor(Math.random() * tl.length)]
        return api.sendMessage({ 
              body: `❮ ${name} ❯\n\n${badolbot}`, 
              mentions: [{ tag: name, id: event.senderID }] }, event.threadID, (error, info) => {
          if (error) {
            return api.sendMessage('An error occurred while processing your request. Please try again later.', event.threadID, event.messageID);
          }

          global.client.handleReply.push({
            type: 'reply',
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            head: msg,
          });
        }, event.messageID);
    }
    
    const apis = await axios.get('https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json')
const n = apis.data.api

      const response = await axios.get(`${n}/sim?type=ask&ask=${encodeURIComponent(msg)}`);
      console.log(response.data);
      const replyMessage = response.data.data.msg;

      api.sendMessage({ body: replyMessage }, event.threadID, (error, info) => {
        if (error) {
          return api.sendMessage('An error occurred while processing your request. Please try again later.', event.threadID, event.messageID);
        }

        global.client.handleReply.push({
          type: 'reply',
          name: this.config.name,
          messageID: info.messageID,
          author: event.senderID,
          head: msg,
        });
      }, event.messageID);

    } catch (error) {
      console.log(error)
      api.sendMessage('An error has occurred, please try again later.', event.threadID, event.messageID);
    }
  }
};
