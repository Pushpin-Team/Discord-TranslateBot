module.exports = async (guildId) => {
    const CMD = require('../../../bot.js');
    return await CMD.Client.application.commands.fetch(guildId ? {guildId: guildId} : undefined);
}