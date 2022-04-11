const Discord = require('discord.js');
const Fs = require('fs');
const Translate = require('@vitalets/google-translate-api');
var CMD;

const Client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
    ]
});

const translateCache = new Map();

Client.on("ready", () => {
    CMD = {Discord, Translate, Client, translateCache};
    
    const initFiles = require('./initFiles');
    module.exports = initFiles('./_Functions', CMD);

    console.log(`I'am Ready!`);

    CMD.Interaction.Command.none('MESSAGE', 'Translate',
        {
            options: {
                name: 'Translate',
                description: ' ',
                type: 'MESSAGE',
            },
        }
    );

    CMD.Interaction.Command.create('CHAT_INPUT', 'translate',
        {
            options: {
                name: 'Translate',
                description: 'Translate message',
                type: 'MESSAGE',
                options: [
                    {
                        type: 'STRING',
                        name: 'id',
                        description: 'Message id',
                        required: true,
                    }
                ]
            },
        }
    );

    /* Client.guilds.cache.get(`958710923898552340`).channels.cache.get(`958763980673937450`).send({content: `
> **Bee Translator BOT FOR DISCORD** <:logo:961016535583953007>
A discord bot powered by Google Translate helps you translate any message into a number of popular world languages ​​with the click of a button.

> **HOW TO USE?** :tools:
For translate message you need click him right button of mouse and into Apps select "Translate" with mini-bee. After select language for translate and enjoy!

> **HOW ADD BEE TO MY SERVER?** :heart_decoration:
For add Bee Translator bot to your server click button under this text.
    `, components: [
        {
            type: 'ACTION_ROW',
            components: [
                {
                    type: 'BUTTON',
                    label: 'Site',
                    emoji: '📟',
                    url: `https://www.pushpinteam.xyz/`,
                    style: 'LINK'
                },
                {
                    type: 'BUTTON',
                    label: 'Add to Server',
                    emoji: '💗',
                    url: `https://discord.com/api/oauth2/authorize?client_id=958683389412667442&permissions=277025459200&scope=bot%20applications.commands`,
                    style: 'LINK'
                },
                {
                    type: 'BUTTON',
                    label: 'Discord Server Bee Translator',
                    emoji: '<:logo:961016535583953007>',
                    url: `https://discord.gg/taJPbEJw2e`,
                    style: 'LINK'
                },
                {
                    type: 'BUTTON',
                    label: 'Discord Server Pushpin',
                    emoji: '<:pushpin:958809397046411304>',
                    url: `https://discord.gg/vDG8h94Xth`,
                    style: 'LINK'
                },
            ]
        }
    ]}); */
});

Client.on("interactionCreate", async (interaction) => {
    await CMD[interaction.commandName?.split('_')[0].toLowerCase() ?? interaction.customId?.split('_')[0].toLowerCase()]?.(interaction);
});

Client.on("messageCreate", async (message) => {
    if(message.content == "!guildList" && message.guild.id == '958710923898552340') {
        for(let [id, guild] of Client.guilds.cache) {
            console.log(guild.name)
        }
    }
})

Client.login(process.env.bot_token);
