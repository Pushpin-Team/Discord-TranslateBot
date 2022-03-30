module.exports = async (interaction) => {
    const CMD = require('../bot.js');

    CMD.Interaction.reply(interaction, {
        ephemeral: true,
        components: CMD.buttons.init(interaction.targetMessage.id)
    });
    
    /* const collector = interaction.channel.createMessageComponentCollector({filter: (fInteraction) => fInteraction.user.id == interaction.user.id, max: 1});
    
    collector.on('collect', async (ButtonInteraction) => {
        const data = ButtonInteraction.customId.split('_');
        try {
            CMD[data[0]](ButtonInteraction, interaction.targetMessage.content, data[1]);
        } catch(error) {
            console.log(error);
        }
    }); */
};