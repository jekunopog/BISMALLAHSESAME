module.exports = {
    name: "brock",
    aliases: ["purge"],
    description: "brock",
    execute(message, args) {
      return message.channel.send("brock is halal").catch(console.error)
    }
  };
  
