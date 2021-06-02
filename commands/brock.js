module.exports = {
    name: "brock",
    aliases: ["broc"],
    description: "brock",
    execute(message, args) {
      return message.channel.send("brock is halal").catch(console.error)
    }
  };
  
