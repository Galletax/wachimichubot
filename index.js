const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === ',cringedance') {
    msg.reply('https://thumbs.gfycat.com/NeedyImmediateCusimanse-max-1mb.gif');
  }
});

client.on('message', msg => {
  if (msg.content === ',achus') {
    msg.reply('https://cdn.discordapp.com/attachments/442084669433839618/442302673635770368/achus.jpg');
  }
});




client.login('NDQyMjgwMTE4MzUwNzc0Mjgy.Dc8g-Q.H_6vTlc9wjqT-7myd6JTm4Y6BrI');
