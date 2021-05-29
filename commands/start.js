const { DiscordAPIError } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { spawn } = require('child_process')


module.exports = {
  name: "start",
  aliases: ["startsevrer", "openserver"],
  description: "starts mc server",
  async execute(message, args) {
    const bat = spawn('cmd.exe', ['/c', 'run.bat']);

    bat.stdout.on('data', (data) => {
        console.log(data.toString());
    });

    bat.stderr.on('data', (data) => {
        console.error(data.toString());
    });

    bat.on('exit', (code) => {
        console.log(`Child exited with code ${code}`);  
    });
        
    return message.channel.send("Server Starting, please wait a few minutes before joining.").catch(console.error);
    
  }
};