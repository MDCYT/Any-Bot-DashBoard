const {
    settings
} = require('../../utils/mongodb');
let DBD = require('discord-dashboard');

module.exports = {
    optionId: 'prefix',
    optionName: "Prefix",
    optionDescription: "Change bot's prefix.",
    optionType: DBD.formTypes.input(">", 1, 3, false, true),
    getActualSet: async ({
        guild
    }) => {
        return await settings.getPrefixByGuildID(guild.id)
    },
    setNew: async ({
        guild,
        newData
    }) => {
        return await settings.setPrefixByGuildID(guild.id, newData)
    }
}