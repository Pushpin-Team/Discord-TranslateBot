module.exports = (interaction, error, ephemeral) => {
    const CMD = require('../../bot.js');

    console.log(error);
    if(!error.message) error.message = '';

    CMD.Interaction.reply(interaction, {content: `> Ошибка. ${error.message} ⛔`, embeds: [], components: [], ephemeral: ephemeral});
    guild.channels.cache.get(Config.channelsID.errors).send({
        embeds: [
            {
                title: `Ошибка "${error.message}"`,
                description: `${error.stack}`,
                timestamp: new Date(),
                color: "#DD2C2C",
                thumbnail: {url: 'https://i.imgur.com/YTXH8fJ.png'}
            }
        ],
        components: [
            {
                type: 'ACTION_ROW',
                components: [
                    {
                        type: 'BUTTON',
                        label: 'Канал',
                        style: 'LINK',
                        url: `discord:///channels/${interaction.guildId}/${interaction.channelId}`
                    }
                ]
            }
        ]
    });

    return error;
}