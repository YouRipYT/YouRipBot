const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "?"
var per = ''

client.login('NTMxMDQ2NTg2MTE0MTEzNTQ2.DxIwJw.q8cad4Gr0c-AyloTFX24tSfgQqg');


client.on('ready', () => {
  client.user.setGame( prefix + "help | 4 servers " + per );
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('message', msg => {
    if (msg.content === prefix + 'golbarix') {
      msg.reply('https://www.youtube.com/channel/UCQrUAZ1IHceBRYqfKzj9ARw');
    }
  });
