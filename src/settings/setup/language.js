let DBD = require('discord-dashboard');

module.exports = {
    optionId: 'language',
    optionName: "Language",
    optionDescription: "Change bot's language",
    optionType: DBD.formTypes.select({
        "English": "en"
    }),
    getActualSet: async ({
        guild
    }) => {
        return "en"
    },
    setNew: async ({
        guild,
        newData
    }) => {
        return
    }
}