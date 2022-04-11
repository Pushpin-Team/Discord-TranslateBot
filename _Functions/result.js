module.exports = async (interaction) => { const CMD = require('../bot.js'); try {
    const id_target = interaction.message?.interaction?.id ?? interaction.id;
    const data = CMD.translateCache.get(id_target);
    const message = await interaction.channel.messages.fetch(data);
    const language = interaction.customId.split('_')[1];
    const text = message.content.replaceAll(CMD.Discord.MessageMentions.USERS_PATTERN, (match) => {
        let id = match.slice(3, -1);
        return `[@${CMD.Client.users.cache.get(id).tag}]`;
    });
    CMD.translateCache.delete(interaction.message.interaction.id);

    var translate;
    try {
        translate = await CMD.Translate(text, {to: language});
    } catch(error) {
        console.log(error);
    }
    const from_info = CMD.buttons.getInfo(translate.from.language.iso);
    const to_info = CMD.buttons.getInfo(language);

    console.log(translate.from.language.iso)
    console.log(language)

    if(!from_info || !to_info) {
        CMD.Interaction.reply(interaction, {
            embeds: [
                {
                    description: '❌ **Failed to detect language**',
                    color: "#528ff5", 
                }
            ],
            components: []
        });
    } else {
        CMD.Interaction.reply(interaction, {
            embeds: [
                {
                    description: translate ? `${translate.text}` : '❌ **Error**',
                    color: "#528ff5",
                }
            ],
            components: [
                {
                    type: 'ACTION_ROW',
                    components: [
                        {
                            type: 'BUTTON',
                            label: `${from_info.name} [${from_info.code}]`,
                            customId: 'null_from',
                            style: 'PRIMARY',
                            emoji: from_info.emoji,
                            disabled: true
                        },
                        {
                            type: 'BUTTON',
                            label: ` `,
                            customId: 'null_line',
                            style: 'PRIMARY',
                            emoji: '➡',
                            disabled: true
                        },
                        {
                            type: 'BUTTON',
                            label: `${to_info.name} [${to_info.code}]`,
                            customId: 'null_to',
                            style: 'PRIMARY',
                            emoji: to_info.emoji,
                            disabled: true
                        },
                    ]
                }
            ]
        });
    }   
} catch (error) {
    CMD.Interaction.error(interaction, error, true);
}}