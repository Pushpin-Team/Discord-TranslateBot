module.exports = (interaction) => {
    const CMD = require('../bot.js');

    CMD.Interaction.reply(interaction, {
        embeds: [
            {
                title: 'Pushpin Team',
                description: 'Young development team from Russia. We are working on the functionality of the discord and improving it!',
                color: '#DA3247',
                thumbnail: {url: 'https://i.imgur.com/U2j06Ge.png'},
                footer: {text: 'Mr. Translator - with love from Pushpin! 💗'}
            }
        ],
        components: [
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
            },
            {
                type: 'ACTION_ROW',
                components: [
                    {
                        type: 'BUTTON',
                        label: 'Back',
                        emoji: '🔙',
                        customId: 'translate',
                        style: 'DANGER'
                    }
                ]
            }
        ]
    })
};