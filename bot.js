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

Client.on("interactionCreate", async (INTERACTION) => {
    if(INTERACTION.isMessageContextMenu()) {
        CMD.Interaction.reply(INTERACTION, {
            ephemeral: true,
            components: CMD.buttons()
        });

        const collector = INTERACTION.channel.createMessageComponentCollector({filter: (interaction) => interaction.user.id == INTERACTION.user.id, max: 1});

        collector.on('collect', async (ButtonInteraction) => {
            const data = ButtonInteraction.customId.split('_');

            if(data[0] == 'language' && ButtonInteraction.isButton()) {

                var translate;
                try {
                    translate = await Translate(INTERACTION.targetMessage.content, {to: data[1]});
                } catch(error) {
                    console.log(error);
                }

                CMD.Interaction.reply(ButtonInteraction, {
                    embeds: [
                        {
                            description: translate ? translate.text : '❌ **Error**',
                            color: "#528ff5"
                        }
                    ],
                    components: []
                });
            }
        });
    }
});

Client.login(procces.env.TOKEN);
