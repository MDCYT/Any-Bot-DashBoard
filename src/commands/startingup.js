module.exports = {
    category: "Starting Up",
    subTitle: "Some essencials commands",
    aliasesDisabled: true,
    list: [{
            commandName: "help",
            commandUsage: ">help &#60;command&#62;",
            commandDescription: "Obtain a list of commands or information about a specific command.",
            commandAlias: ["commands", "h"]
        },
        {
            commandName: "serverinfo",
            commandUsage: ">serverinfo &#60;user/role/channel mention&#62;",
            commandDescription: "Fetches information and statistics about the server.",
            commandAlias: ['server', 'si']
        },
        {
            commandName: "warn",
            commandUsage: ">warn [user id/mention] &#60;reason&#62;",
            commandDescription: "Warns a member in your server.",
        },
        {
            commandName: "ban",
            commandUsage: ">ban [user id/mention] &#60;reason&#62;",
            commandDescription: "Bans a member from your server.",
        },
        {
            commandName: "kick",
            commandUsage: ">kick [user id/mention] &#60;reason&#62;",
            commandDescription: "Kicks a member from your server.",
        },
        {
            commandName: "mute",
            commandUsage: ">mute [user id/mention] &#60;time&#62; &#60;reason&#62;",
            commandDescription: "Mutes a user for the specified amount of time (max 1 month).",
        },
        {
            commandName: "purge",
            commandUsage: ">purge &#60;channel id/mention&#62; &#60;user id/mention&#62; [message count] &#60;reason&#62;",
            commandDescription: "Deletes the specified amount of messages from the provided channel.  If no channel is given, the messages will be deleted from the current channel. If a member is provided, only their messages will be deleted from the batch.No more than 100 messages may be deleted at a time. Messages older than 2 weeks old cannot be deleted.",
            commandAlias: ['clear']
        }
    ],
}