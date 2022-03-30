module.exports = async (type, name, data) => {
    const CMD = require('../../../bot.js');

    const commands = await CMD.Interaction.Command.get(data.guildId);
    const command = commands.find(fCommand => fCommand.name == name && fCommand.type == type);
    
    if(command) command.delete();

    return command;
}