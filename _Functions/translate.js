module.exports = async (interaction) => {
    const CMD = require('../bot.js');
    
    const id_target = interaction.message?.interaction?.id ?? interaction.id;
    console.log(interaction.options?.get("id")?.value)
    console.log(id_target)

    if(!CMD.translateCache.has(id_target)) {
        CMD.translateCache.set(id_target, interaction.targetMessage?.id ?? interaction.options?.get("id")?.value);
    }

    CMD.Interaction.reply(interaction, {
        ephemeral: true,
        components: CMD.buttons.init(),
        embeds: []
    });
};