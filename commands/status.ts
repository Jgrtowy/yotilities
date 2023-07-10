import { CommandObject, CommandType, CommandUsage } from 'wokcommands';

export default {
    description: 'Change the bot status',
    options: [
        {
            name: 'type',
            description: 'Choose an activity type',
            required: true,
            type: 3,
            choices: [
                {
                    name: 'Playing',
                    value: '0',
                },
                {
                    name: 'Watching',
                    value: '3',
                },
                {
                    name: 'Streaming',
                    value: '1',
                },
                {
                    name: 'Competing in',
                    value: '5',
                },
                {
                    name: 'Listening to',
                    value: '2',
                },
            ],
        },
        {
            name: 'status',
            description: 'Status',
            required: true,
            type: 3,
        },
    ],
    type: CommandType.SLASH,
    ownerOnly: true,
    testOnly: true,

    callback: ({ client, interaction, args }: CommandUsage) => {
        const type = Number(args[0]);
        const activity = args[1];
        const activities = {
            0: 'Playing',
            1: 'Streaming',
            2: 'Listening to',
            3: 'Watching',
            5: 'Competing in',
        };

        client.user.setActivity({ type, url: 'https://jgrtowy.xyz/', name: activity });

        if (interaction) {
            interaction.reply({
                content: `> Client presence set to "**${activities[type]} ${activity}**"`,
                ephemeral: true,
            });
        }
    },
} satisfies CommandObject;
