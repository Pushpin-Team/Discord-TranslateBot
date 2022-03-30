module.exports = async (type, name, data) => {
    const CMD = require('../../../bot.js');

    const commands = await CMD.Interaction.Command.get(data.guildId);
    var command = commands.find(fCommand => fCommand.name == name && fCommand.type == type);

    if(!command) {
        const createCommand = await CMD.Client.application.commands.create(data.options, data.guildId);
        if(data.permissions) createCommand.permissions.set(data.permissions);
        command = createCommand;
    }

    return command;
}