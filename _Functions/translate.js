module.exports = async (interaction) => {
    const CMD = require('../bot.js');

    const id_target = interaction.message?.interaction?.id ?? interaction.id;

    if(!CMD.translateCache.has(id_target)) {
        CMD.translateCache.set(id_target, interaction.targetMessage?.id ?? interaction.options?.get("id")?.value ?? interaction.options?.get("text"));
    }

    CMD.Interaction.reply(interaction, {
        ephemeral: true,
        components: CMD.buttons.init(),
        embeds: []
    });
};