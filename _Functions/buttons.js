module.exports = () => {
    return [
        {
            type: 'ACTION_ROW',
            components: [
                {
                    type: 'BUTTON',
                    label: 'English',
                    style: 'PRIMARY',
                    emoji: `<:us:958711217617256529>`,
                    customId: 'language_en'
                },
                {
                    type: 'BUTTON',
                    label: 'Russian',
                    style: 'PRIMARY',
                    emoji: `<:ru:958711217575305266>`,
                    customId: 'language_ru'
                },
                {
                    type: 'BUTTON',
                    label: 'Chinese',
                    style: 'PRIMARY',
                    emoji: `<:cn:958711217613054063>`,
                    customId: 'language_zh-CN'
                }
            ]
        },
        {
            type: 'ACTION_ROW',
            components: [
                {
                    type: 'BUTTON',
                    label: 'Germany',
                    style: 'PRIMARY',
                    emoji: `<:de:958742381149184000>`,
                    customId: 'language_de'
                },
                {
                    type: 'BUTTON',
                    label: 'Hindi',
                    style: 'PRIMARY',
                    emoji: `<:hi:958742380817825903>`,
                    customId: 'language_hi'
                },
                {
                    type: 'BUTTON',
                    label: 'Arabic',
                    style: 'PRIMARY',
                    emoji: `<:ar:958742380733952030>`,
                    customId: 'language_ar'
                }
            ]
        },
        {
            type: 'ACTION_ROW',
            components: [
                {
                    type: 'BUTTON',
                    label: ' ',
                    style: 'DANGER',
                    customId: 'pushpin_left',
                    disabled: true
                },
                {
                    type: 'BUTTON',
                    label: 'Made By Pushpin',
                    style: 'DANGER',
                    emoji: `<:pushpin:958742436648206446>`,
                    customId: 'pushpin_midlle',
                    disabled: true
                },
                {
                    type: 'BUTTON',
                    label: ' ',
                    style: 'DANGER',
                    customId: 'pushpin_right',
                    disabled: true
                },
            ]
        },
    ]
}