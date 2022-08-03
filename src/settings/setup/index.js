const { join } = require("path");

module.exports = {
    categoryId: 'setup',
    categoryName: "Setup",
    categoryDescription: "Setup your bot with default settings!",
    categoryOptionsList: [
        require(join(__basedir, "settings/setup/prefix.js")),
        require(join(__basedir, "settings/setup/botname.js")),
        require(join(__basedir, "settings/setup/language.js")),
    ]
}