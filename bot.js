import Discord from 'discord.js';

export const bot = new Discord.Client({
    presence: {
        status: "online",
        activity: {
            name: "with the API",
            type: "PLAYING"
        }
    },
    intents: 131071,
});
