const {
    settings
} = require('../../utils/mongodb');
let DBD = require('discord-dashboard');

module.exports = {
    optionId: 'farewell-channel',
    optionName: "Farewell Channel",
    optionDescription: "Change farewell channel.",
    optionType: DBD.formTypes.channelsSelect(false, channelTypes = ['GUILD_TEXT']),
    getActualSet: async ({
        guild
    }) => {
        return await settings.getFarewellChannel(guild.id)
    },
    setNew: async ({
        guild,
        newData
    }) => {
        return await settings.setFarewellChannelID(guild.id, newData)
    }
}