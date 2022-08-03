const {
    join
} = require("path");

module.exports = {
    categoryId: 'welcome-farewell',
    categoryName: "Welcome and Farewell",
    categoryDescription: "Setup your welcome and Farewell messages!",
    categoryOptionsList: [
        require(join(__basedir, "settings/welcome-and-farewell/welcome-channel.js")),
        require(join(__basedir, "settings/welcome-and-farewell/welcome-message.js")),
        require(join(__basedir, "settings/welcome-and-farewell/farewell-channel.js")),
        require(join(__basedir, "settings/welcome-and-farewell/farewell-message.js")),
    ]
}