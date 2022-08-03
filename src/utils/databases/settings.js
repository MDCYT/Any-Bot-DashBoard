const mongoose = require('mongoose');

const Guild = mongoose.model('Settings', new mongoose.Schema({
    guildID: {
        type: String,
        required: true,
        unique: true
    },
    guildName: {
        type: String,
        required: true
    },
    prefix: {
        type: String,
        required: true,
        maxlength: 4,
        default: ">"
    },
    systemChannelID: {
        type: String,
    },
    starboardChannelID: {
        type: String,
    },
    adminRoleID: {
        type: String,
    },
    modRoleID: {
        type: String,
    },
    mutedRoleID: {
        type: String,
    },
    autoRoleID: {
        type: String,
    },
    autoKick: {
        type: Number,
    },
    autoBan: {
        type: Number,
    },
    randomColor: {
        type: Number,
        default: false
    },
    modChannelIDs: {
        type: String,
        default: ""
    },
    disabledCommands: {
        type: String,
        default: null
    },
    modLogID: {
        type: String,
    },
    memberLogID: {
        type: String,
    },
    nicknameLogID: {
        type: String,
    },
    roleLogID: {
        type: String,
    },
    messageEditLogID: {
        type: String,
    },
    messageDeleteLogID: {
        type: String,
    },
    verificationRoleID: {
        type: String,
    },
    verificationChannelID: {
        type: String,
    },
    verificationMessage: {
        type: String,
    },
    verificationMessageID: {
        type: String,
    },
    verificationLevel: {
        type: Number,
        default: 0
    },
    welcomeChannelID: {
        type: String,
    },
    welcomeMessage: {
        type: Array,
        default: [{
            type: "message",
            data: {
                text: "Welcome ?member to ?guild !"
            }
        }]
    },
    farewellChannelID: {
        type: String,
    },
    farewellMessage: {
        type: Array,
        default: [{
            type: "message",
            data: {
                text: "Goodbye ?member !"
            }
        }]
    },
    pointTracking: {
        type: Number,
        default: false,
        required: true
    },
    messagePoints: {
        type: Number,
        default: 1,
        required: true
    },
    commandPoints: {
        type: Number,
        default: 1,
        required: true
    },
    voicePoints: {
        type: Number,
        default: 1,
        required: true
    },
    xpTracking: {
        type: Number,
        default: false,
        required: true
    },
    messageXP: {
        type: Number,
        default: 1,
        required: true
    },
    commandXP: {
        type: Number,
        default: 1,
        required: true
    },
    voiceXP: {
        type: Number,
        default: 1,
        required: true
    },
    xpMessageAction: {
        type: Number,
        default: false,
        required: true
    },
    xpChannelID: {
        type: String,
    },
    crownRoleID: {
        type: String,
    },
    crownChannelID: {
        type: String,
    },
    crownMessage: {
        type: Array,
        default: [{
            type: "message",
            data: {
                text: "?member has won ?role this week! Points have been reset, better lick next time!"
            }
        }]
    },
    crownSchedule: {
        type: String,
        default: "0 21 * * 5"
    }
}));

module.exports = {
    async getPrefixByGuildID(guildid) {
        const guild = await Guild.findOne({guildID: guildid}, {prefix: 1})
        return guild?.prefix || ">"
    },

    async setPrefixByGuildID(guildid, prefix) {
        let newPrefix = prefix || ">"
        const guild = await Guild.findOneAndUpdate({guildID: guildid}, {prefix: newPrefix}, {new: true})
        return guild
    }
}