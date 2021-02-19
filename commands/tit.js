const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "titty",
  aliases: ["boobs", "tit", "tits", "boob"],
  description: "free pics g",
  execute(message, args) {
    var max = 13440;
    var min = 10000;
    var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
    var MathLoL = Math.round(MathRan);
    if (!message.channel.nsfw) {
      message.channel.send("habibi that is haram!")
    } else {
      message.channel.send("http://media.oboobs.ru/boobs_preview/" + MathLoL + ".jpg")
    }
  }
};