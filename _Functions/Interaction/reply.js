module.exports = async (interaction, message, config = {}) => {
    try {
        if(config.new) {
            await interaction?.reply(message);
        } else if(config.empty) {
            try {
                await interaction?.deferReply();
                await interaction?.deleteReply();
            } catch(error) {
                console.log(error);
            }
        } else if(config.defer) {
            await interaction?.deferReply();
        } else {
            await interaction?.update(message);
        }
    } catch(error) {
        if(interaction?.replied) {
            await interaction?.editReply(message);
        } else {
            await interaction?.reply(message);
        }
    }
}