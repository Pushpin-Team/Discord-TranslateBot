module.exports = (interaction, error, ephemeral) => {
    const CMD = require('../../bot.js');

    console.log(error);
    if(!error.message) error.message = '';

    return error;
}