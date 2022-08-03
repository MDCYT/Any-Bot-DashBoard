let DBD = require('discord-dashboard');

module.exports = DBD.customPagesTypes.sendJson('/me.json', ({
    user
}) => {
    return {
        message: user.id ? "User logged" : "User not logged in.",
        user: user
    };
})