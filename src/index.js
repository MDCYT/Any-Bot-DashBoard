const session = require("express-session");
let Store;

if (process.env.ENV !== 'production') {
    require('dotenv').config();
    Store = require('memorystore')(session);
} else {
    Store = require('session-file-store')(session)
}

const mongoose = require("mongoose");
const {
    join
} = require('path');
const {
    Client,
    Intents
} = require('discord.js');
const DarkDashboard = require('dbd-dark-dashboard');
let DBD = require('discord-dashboard');

const client = new Client({
    intents: [Intents.FLAGS.GUILDS]
});

client.login(process.env.DISCORD_BOT_TOKEN);

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB");
        console.log(err);
    });

global.__Client = client;
global.__basedir = __dirname;

(async () => {
    await DBD.useLicense(process.env.DBD_LICENSE_ID);
    DBD.Dashboard = DBD.UpdatedClass();

    const Dashboard = new DBD.Dashboard({
        acceptPrivacyPolicy: true,
        port: process.env.PORT,
        sessionStore: new Store(),
        client: require(join(__basedir, "config/client.js")),
        redirectUri: process.env.DASHBOARD_DOMAIN + '/discord/callback',
        domain: process.env.DASHBOARD_DOMAIN,
        bot: client,
        invite: require(join(__basedir, "config/invite.js")),
        supportServer: require(join(__basedir, "config/supportServer.js")),
        guildAfterAuthorization: require(join(__basedir, "config/guildAfterAuthorization.js")),
        customPages: [
            require(join(__basedir, "config/customPages/me-json.js"))
        ],
        theme: DarkDashboard({
            information: require(join(__basedir, "config/information.js")),
            index: require(join(__basedir, "config/index.js")),
            commands: [
                require(join(__basedir, "commands/startingup.js"))
            ],
            privacyPolicy: require(join(__basedir, "config/pp.js")),
            guilds: require(join(__basedir, "config/guilds.js")),
            guildInfo: require(join(__basedir, "config/guildInfo.js")),
            guildSettings: require(join(__basedir, "config/guildSettings.js")),
            popupMsg: require(join(__basedir, "config/popupMsg.js")),
        }),
        settings: [
            require(join(__basedir, "settings/setup/index.js")),
            require(join(__basedir, "settings/welcome-and-farewell/index.js"))
        ],
    });
    Dashboard.init();
})();