const {
    settings
} = require('../../utils/mongodb');
let DBD = require('discord-dashboard');

module.exports = {
    optionId: 'welcome-channel',
    optionName: "Welcome Channel",
    optionDescription: "Change welcome channel.",
    optionType: DBD.formTypes.channelsSelect(false, channelTypes = ['GUILD_TEXT']),
    getActualSet: async ({
        guild
    }) => {
        return await settings.getWelcomeChannelID(guild.id)
    },
    setNew: async ({
        guild,
        newData
    }) => {
        return await settings.setWelcomeChannelID(guild.id, newData)
    }
}