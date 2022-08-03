let DBD = require('discord-dashboard');

module.exports = {
    optionId: 'botname',
    optionName: "Bot Name",
    optionDescription: "Change bot's name",
    optionType: DBD.formTypes.input("Any Bot", 1, 32, false, false),
    getActualSet: async ({
        guild
    }) => {
        //Get the username in this guild 
        const guild_but_client = __Client.guilds.cache.get(guild.id)
        const bot = guild_but_client.members.cache.get(__Client.user.id)
        return bot.nickname
    },
    setNew: async ({
        guild,
        newData
    }) => {
        const guild_but_client = __Client.guilds.cache.get(guild.id)
        const bot = guild_but_client.members.cache.get(__Client.user.id)
        //Set the username in this guild
        bot.setNickname(newData)
        return newData
    }
}