module.exports = async (interaction) => { const CMD = require('../bot.js'); try {
    const id_target = interaction.message?.interaction?.id ?? interaction.id;
    const data = CMD.translateCache.get(id_target);
    var message;
    try {
        message = await interaction.channel.messages.fetch(data);
        message = message.content;
    } catch {
        message = data;
    }

    const text = message.replaceAll(CMD.Discord.MessageMentions.USERS_PATTERN, (match) => {
        let id = match.replaceAll(/(<@!|<@|>)/gm, '');
        return `[@${CMD.Client.users.cache.get(id).tag}]`;
    });
    const language = interaction.customId.split('_')[1];
    CMD.translateCache.delete(interaction.message.interaction.id);

    var translate = await CMD.Translate(text, {to: language});
    const from_info = CMD.buttons.getInfo(translate.from.language.iso);
    const to_info = CMD.buttons.getInfo(language);

    console.log(translate.from.language.iso)
    console.log(language)

    CMD.Interaction.reply(interaction, {
        embeds: [
            {
                description: translate.text,
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
} catch (error) {
    CMD.Interaction.error(interaction, new Error(`❌ **Error in translation**\n> ${error}`), true);
}}