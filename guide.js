module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Choru And John Arida",
  description: "prefix text",
  commandCategory: "Hình ảnh",
  usages: "noprefix",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = require('axios');
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Manila").format("HH:mm:ss || D/MM/YYYY");
//getPrefix
const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
const words = ["waifu", "neko", "shinobu", "cuddle", "hug", "pat", "blush", "smile", "happy", "cringe"];
//words para sa api
const imggg = await axios.get(`https://api.waifu.pics/sfw/${words[Math.floor(Math.random() * words.length)]}`);
const img1 = imggg.data.url;
//wag muna na galawim nasa baba yung taas sa puro link imgur yan nalang sa mga picture
var callback = () => api.sendMessage({body:`Yo! I'm Here, What Can I Do For You?\nUse ${prefix}help For List Of Commands\n[ ${gio} ]`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));
return request(encodeURI(img1)).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
}
