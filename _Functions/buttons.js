module.exports.config = [
    [
        {
            code: 'en',
            name: 'English',
            emoji: '<:us:958711217617256529>'
        },
        {
            code: 'ru',
            name: 'Russian',
            emoji: '<:ru:958711217575305266>'
        },
        {
            code: 'zh-CN',
            name: 'Chinese',
            emoji: '<:cn:958711217613054063>'
        },
        {
            code: 'uk',
            name: 'Ukrainian',
            emoji: '<:ua:958826228540919839>'
        },
        {
            code: 'kk',
            name: 'Kazakh',
            emoji: '<:kz:958826228482179122>'
        },
    ],
    [
        {
            code: 'de',
            name: 'Germany',
            emoji: '<:de:958742381149184000>'
        },
        {
            code: 'hi',
            name: 'Hindi',
            emoji: '<:hi:958742380817825903>'
        },
        {
            code: 'ar',
            name: 'Arabic',
            emoji: '<:ar:958742380733952030>'
        },
        {
            code: 'fa',
            name: 'Persian',
            emoji: '<:ir:958826228100505600>'
        },
        {
            code: 'pt',
            name: 'Portuguese',
            emoji: '<:pt:958827023831289876>'
        },
    ],
    [
        {
            code: 'it',
            name: 'Italian',
            emoji: '<:it:958827023822913606>'
        },
        {
            code: 'es',
            name: 'Spanish',
            emoji: '<:es:958826228146655332>'
        },
        {
            code: 'fr',
            name: 'French',
            emoji: '<:fr:958826228155052113>'
        },
    ]
]


module.exports.init = (data) => {
    const components = [];

    for(let action_row of module.exports.config) {
        components.push(
            {
                type: 'ACTION_ROW',
                components: []
            }
        );
        for(let component of action_row) {
            components[components.length-1].components.push(
                {
                    type: 'BUTTON',
                    label: component.name,
                    customId: `result_${component.code}_${data}`,
                    emoji: component.emoji,
                    style: 'PRIMARY'
                }
            );
        }
    }

    components[components.length-1].components.push(
        {
            type: 'BUTTON',
            label: 'Made by Pushpin Team',
            customId: 'pushpin',
            style: 'DANGER',
            emoji: '<:pushpin:958809397046411304>'
        }
    )

    return components;
}

module.exports.getInfo = (code) => {
    const action_row = module.exports.config.find(action_row => action_row.find(component => component.code == code));
    const language_info = action_row.find(component => component.code == code);
    return language_info;
}