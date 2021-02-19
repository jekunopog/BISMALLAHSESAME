const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "ass",
  aliases: ["butt", "asss"],
  description: "free pics g",
  execute(message, args) {
    
    var max = 5511;
    var min = 1000;
    var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
    var MathLoL = Math.round(MathRan);
    if (!message.channel.nsfw) {
      message.channel.send("habibi that is haram!")
      
    } else {
      message.channel.send("http://media.obutts.ru/butts_preview/0" + MathLoL + ".jpg")
    }
  }
};