module.exports = {
    clientId: process.env.DISCORD_BOT_ID,
    scopes: ["bot", "applications.commands", "identify", "email", "guilds", "guilds.join"],
    permissions: '8',
    redirectUri: process.env.DASHBOARD_DOMAIN + '/discord/callback',
}