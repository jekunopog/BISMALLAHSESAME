const { DiscordAPIError } = require("discord.js");
const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "order",
  aliases: ["sethorder", "orders"],
  description: "meth",
  async execute(message, args) {
        const argsdone = .join(" ")
    
        let embed = new MessageEmbed()
            .setTitle("New Order!")
            .setDescription(`Product: ${argsdone}`)
            .setFooter(message.author.username)
            .setColor("#030202");
        message.delete;
        return message.channel.send(embed).catch(console.error);
    
  }
};
