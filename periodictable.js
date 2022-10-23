module.exports.config = {
	name: "periodictable",
	version: "2.0.0",
	hasPermssion: 0,
	credits: "John Arida",
	description: "Elements On The Periodic Table",
	commandCategory: "Science",
	usages: "[Element]/list",
	cooldowns: 2
};

module.exports.run = async ({ api, event, args }) => {
const axios = require('axios');
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const arida = await axios.get(`https://raw.githubusercontent.com/johnarida08/johnarida_api/main/periodictable`);
const txt = arida.data.data;
const tuts = arida.data.author;
if (this.config.credits != tuts) {
        console.log('\x1b[33m[ WARN ]\x1b[37m » Change credits to your mothers dick, bitch:))'+ global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"');
        return api.sendMessage('[ WARN ] Detect bot operator ' , event.threadID, event.messageID);
      }
const john = args.join(" ");
if (!john)
return api.sendMessage(`Add An Element Lmao\nFor Full List Of The Elements, Type\n「 ${global.config.PREFIX}periodictable list 」`, event.threadID, event.messageID);
if (john == "list")
return api.sendMessage(`╔══ ≪ °❈° ≫ ══╗\nElements On The Periodic Table\n╚══ ≪ °❈° ≫ ══╝${txt}✎ Format:\n「 ${global.config.PREFIX}periodicaltable [Element Name or Symbol  」`, event.threadID, event.messageID);
res = await axios.get(`https://api.popcat.xyz/periodic-table?element=${john}`).then(res => {
var name = res.data.name;
var symbol = res.data.symbol;
var atomicnum = res.data.atomic_number;
var atomicmass = res.data.atomic_mass;
var period = res.data.period;
var phase = res.data.phase;
var disco = res.data.discovered_by;
var summary = res.data.summary;
let callback = function () {
  api.sendMessage({
    body: `╔══ ≪ °❈° ≫ ══╗\nPeriodic Table Of ${name}\n╚══ ≪ °❈° ≫ ══╝\n\n» Name: ${name}\n» Symbol: ${symbol}\n» Atomic Number: ${atomicnum}\n» Atomic Mass: ${atomicmass}\n» Period: ${period}\n» Phase: ${phase}\n» Discovered By: ${disco}\n\n✎ Summary:\n「 ${summary} 」`,
    attachment: fs.createReadStream(__dirname + `/cache/elementp.png`)
  }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/elementp.png`), event.messageID);
};
  request(res.data.image).pipe(fs.createWriteStream(__dirname + `/cache/elementp.png`)).on("close", callback);
})
}
