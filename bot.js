const Discord = require('discord.js');
const Fs = require('fs');
const Translate = require('@vitalets/google-translate-api');
var CMD;

const Client = new Discord.Client({
    intents: [
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_TYPING",
        "GUILDS"
    ]
});

Client.on("ready", () => {
    CMD = {Discord, Translate, Client};
    
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
});

Client.on("interactionCreate", async (interaction) => {
    await CMD[interaction.commandName?.split('_')[0].toLowerCase() ?? interaction.customId?.split('_')[0].toLowerCase()]?.(interaction);
});

Client.login(``);