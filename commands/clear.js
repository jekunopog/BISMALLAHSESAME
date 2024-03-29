
module.exports = {
  name: "clear",
  aliases: ["purge"],
  description: "deletes multiple messages at once",
  execute(message, args) {
    if (message.deletable) {
        message.delete();
    }
  
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("missing permissions!").then(m => m.delete(5000));
    }
  
    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.reply("this is not a number g").then(m => m.delete(5000));
    }
  
    let deleteAmount;
    if (parseInt(args[0]) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }
  
    message.channel.bulkDelete(deleteAmount, true)
    .catch(err => message.reply(`something went wrong... ${err}`));
  }
};
