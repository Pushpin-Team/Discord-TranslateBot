module.exports = (interaction, error, ephemeral) => {
    const CMD = require('../../bot.js');

    console.log(error);
    if(!error.message) error.message = '';

    CMD.Interaction.reply(interaction, {content: '', embeds: [{title: `⛔ ${error.message}`, color: '#BD2F2F'}], components: [], ephemeral: ephemeral});

    return error;
}