module.exports = async (interaction) => {
    const CMD = require('../bot.js');
    const message = await interaction.channel.messages.fetch(interaction.customId.split('_')[2]);
    const language = interaction.customId.split('_')[1];
    const text = message.content.replaceAll(CMD.Discord.MessageMentions.USERS_PATTERN, (match) => {
        let id = match.slice(3, -1);
        return `[@${CMD.Client.users.cache.get(id).tag}]`;
        //return interaction.guild.users.get(match.slice())
    });

    var translate;
    try {
        translate = await CMD.Translate(text, {to: language});
    } catch(error) {
        console.log(error);
    }

    const from_info = CMD.buttons.getInfo(translate.from.language.iso);
    const to_info = CMD.buttons.getInfo(language);

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