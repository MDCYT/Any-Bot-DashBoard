const {
    settings
} = require('../../utils/mongodb');
let DBD = require('discord-dashboard');

module.exports = {
    optionId: 'farewell-message',
    optionName: "Farewell Message",
    optionDescription: `Change farewell message.\n
    ?member - User mention\n
    ?username - Member username\n
    ?tag - User discriminator\n
    ?size - Guild member size\n
    `,
    optionType: DBD.formTypes.embedBuilder({
        username: "Any Bot",
        avatarURL: process.env.ICON,
        defaultJson: {
            content: 'Goodbye ?member !',
            embed: {}
        }
    }),
    getActualSet: async ({
        guild
    }) => {
        return await settings.selectFarewellMessage(guild.id)
    },
    setNew: async ({
        guild,
        newData
    }) => {
        return await settings.setFarewellMessage(guild.id, newData)
    }
}