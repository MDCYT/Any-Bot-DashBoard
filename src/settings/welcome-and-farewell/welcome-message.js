const {
    settings
} = require('../../utils/mongodb');
let DBD = require('discord-dashboard');

module.exports = {
    optionId: 'welcome-message',
    optionName: "Welcome Message",
    optionDescription: `Change welcome message.\n
    ?member - User mention\n
    ?username - Member username\n
    ?tag - User discriminator\n
    ?size - Guild member size\n
    ?guild - Guild name\n
    `,
    optionType: DBD.formTypes.embedBuilder({
        username: "Any Bot",
        avatarURL: process.env.ICON,
        defaultJson: {
              content: "Welcome ?member to ?guild !",
              embed: {}
          }
      }),
    getActualSet: async ({
        guild
    }) => {
        return await settings.selectWelcomeMessage(guild.id)
    },
    setNew: async ({
        guild,
        newData
    }) => {
        return await settings.setWelcomeMessage(guild.id, newData)
    }
}