module.exports.config = {
  name: "bible",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "John Arida",
  usages: "[help]",
  description: "Bible Verses",
  commandCategory: "text",
    cooldowns: 2,
};
module.exports.run = async function ({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs"];
const witu = await axios.get(`https://raw.githubusercontent.com/johnarida08/johnarida_api/main/bible-pics`);
const brrt = witu.data.author;
  if (this.config.credits != brrt) {
        console.log('\x1b[33m[ WARN ]\x1b[37m » Change credits to your mothers dick, bitch:))'+ global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"');
        return api.sendMessage('[ WARN ] Detect bot operator ' , event.threadID, event.messageID);
      }
const lolk = witu.data.img[Math.floor(Math.random()*5)];
const ros = await axios.get(`https://beta.ourmanna.com/api/v1/get?format=json&order=daily`);
const name1 = ros.data.verse.details.reference;
const text1 = ros.data.verse.details.text;
const res = await axios.get(`https://beta.ourmanna.com/api/v1/get?format=json&order=random`);
const name = res.data.verse.details.reference;
const text = res.data.verse.details.text;
var pist = () => api.sendMessage({body: `Bible Verse Of The Day!\n\n"${text1}"\n\n- ${name1}`, attachment: fs.createReadStream(__dirname + "/cache/bible.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/bible.jpg"));
const john = args.join(" ")
if (john == "daily")
  return request(encodeURI(lolk)).pipe(fs.createWriteStream(__dirname+"/cache/bible.jpg")).on("close",() => pist());
if (john == "help")
return api.sendMessage(`Don't Know Where To Go?\n\n${global.config.PREFIX}bible - »Random bible verses«\n${global.config.PREFIX}bible daily - »The verse of the day«\n${global.config.PREFIX}bible [text] - »Search a verse that you want«`, event.threadID, event.messageID);
var pist2 = () => api.sendMessage({body:`"${text}"\n\n- ${name}`, attachment: fs.createReadStream(__dirname + "/cache/bible.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/bible.jpg")); 
if (!john)
  return request(encodeURI(lolk)).pipe(fs.createWriteStream(__dirname+"/cache/bible.jpg")).on("close",() => pist2()); 
const ris = await axios.get(`https://bible-api.com/${john}`);
const name2 = ris.data.reference;
const text2 = ris.data.text;
var pist3 = () => api.sendMessage({body:`Bible Verse That You Search..\n\n========\n     ${text2}- ${name2}\n\n=================`, attachment: fs.createReadStream(__dirname + "/cache/bible.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/bible.jpg"));
  return request(encodeURI(lolk)).pipe(fs.createWriteStream(__dirname+"/cache/bible.jpg")).on("close",() => pist3())
}
