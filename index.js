const Discord = require('discord.js');
const client = new Discord.Client();

bot.user.setPresence({ status: 'online', game: { name: 'No ser calvo' } });

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

bot.on('message' , (message) => }
       if (message.content == ',help2') {
        message.channel.sendMessage(',cringedance -- Gif de Wismichu bailado');
        message.channel.sendMessage(',achus -- Gif de Wismichu bailado');
       
  }
});
  
client.on('message', msg => {
  if (msg.content === ',help') {
    msg.reply(',cringedance -- Gif de Wismichu bailado');
    msg.reply(',achus -- Foto de el guapo de Wismichu');
    msg.reply(',jzibit -- NO YO NO SOY JOAQUÍN');
  }
});

client.on('message', msg => {
  if (msg.content === ',jzibit') {
    msg.reply('https://cdn.discordapp.com/attachments/442084669433839618/442340349135028225/jzibit.mp4');
  }
});


client.login('NDQyMjgwMTE4MzUwNzc0Mjgy.Dc8g-Q.H_6vTlc9wjqT-7myd6JTm4Y6BrI');
