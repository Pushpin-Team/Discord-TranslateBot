module.exports = (interaction, error, ephemeral) => {
    const CMD = require('../../bot.js');

    console.log(error);
    if(!error.message) error.message = '';

    CMD.Interaction.reply(interaction, {content: `Error: ${error.message}`, embeds: [], components: [], ephemeral: ephemeral});

    return error;
}