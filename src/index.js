if (process.env.ENV !== 'production') require('dotenv').config();

const {
    Client,
    Intents
} = require('discord.js');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS]
});

client.login(process.env.DISCORD_BOT_TOKEN);

const DarkDashboard = require('dbd-dark-dashboard');
let langsSettings = {};

(async () => {
    let DBD = require('discord-dashboard');
    await DBD.useLicense(process.env.DBD_LICENSE_ID);
    DBD.Dashboard = DBD.UpdatedClass();

    const Dashboard = new DBD.Dashboard({
        acceptPrivacyPolicy: true,
        port: process.env.PORT,
        client: {
            id: process.env.DISCORD_BOT_ID,
            secret: process.env.DISCORD_BOT_ID_SECRET
        },
        redirectUri: 'http://localhost/discord/callback',
        domain: 'http://localhost',
        bot: client,
        theme: DarkDashboard({
            privacyPolicy: {
                pp: `<div class="container white-text">
                <h1 id="terms-of-service-and-privacy-policy">Terms Of Service and Privacy Policy</h1>
                <h2 id="any-bot"><strong>Any Bot.</strong></h2>
                <p>Last update: <strong>6/3/2022</strong></p>
                <p><strong>Contact email: <a href="mailto:support@any-bot.tech">support@any-bot.tech</a></strong></p>
                <p>The following terms of use apply to the Bot created in the “Discord” application. Unless otherwise specified, the terms of use detailed in this section apply generally when using this website or the bot.</p>
                <p>Unique or additional terms of use or access may apply in specific scenarios, and in such cases are further noted in this document.</p>
                <p><strong>Beginning:</strong></p>
                <ul>
                <li><strong>Active account registration.</strong></li>
                </ul>
                <p>To use the Any Bot services, Users can register or create a User account within the Discord application, providing all the required data or information completely and truthfully.</p>
                <p>In itself, users can opt out of having an account created, however, this could introduce several limitations in Any Bot's functions.</p>
                <p>Users are responsible for keeping their login credentials confidential and secure. For this reason, Users are also required to choose passwords that meet the highest security standards allowed by this application. By registering, Users agree to be fully responsible for all activities that occur under their username and password.</p>
                <ul>
                <li><strong>Prohibition of service and cancellation.</strong></li>
                </ul>
                <p>The Any Bot team reserves the right, in its sole discretion, to suspend or remove at any time and without prior notice, any bot from the server whose owner has taken actions deemed inappropriate, offensive, or in violation of these Terms.</p>
                <p>Should these situations happen, the suspension or prohibition of the use of the server will not entitle users who have violated these terms to any claim for compensation, damages, or reimbursement.</p>
                <ul>
                <li><strong>Access provided</strong></li>
                </ul>
                <p>Once the bot is within your server or group, the user is fully responsible for the actions it performs, the bot will obtain permissions that you can configure from the invitation section to within your server to grant or remove permissions.</p>
                <p>The bot will access different information, such as:</p>
                <pre>
                ➢ Server ID.
                
                ➢ Owner of server (Including ID and username)
                
                ➢ Your discriminator.
                </pre>
                <p>The bot will have permissions to perform certain actions, such as:</p>
                <pre>
                ➢ Sanction users (Either through commands or automatic moderation)
                
                ➢ Report recent updates.
                
                ➢ EMBEDS permissions and SEND links.
                </pre>
                <ul>
                <li><strong>Saved information / Saved data.</strong></li>
                </ul>
                <p>The bot is authorized to save the respective information of the messages that are sent on the server, this in order to detect possible links, scam, phishing or malicious program (AKA: malware).</p>
                <p>The bot also carries an information storage system regarding the user's activity and its interaction, depending on the user's activity in the voice and chat channels, the respective “XP” and “Points” that can be spent will be saved. Or allow the user to “rank up” in a database.</p>
                <p>The bot will save any action carried out by a server staff where the service is used, whether they are deleted messages, sanctions, etc.</p>
                <ul>
                <li><strong>Service license.</strong></li>
                </ul>
                <p>The owner simply grants Users a revocable, non-exclusive, and non-transferable license to use the software and/or any other technical means integrated in the Service.</p>
                <p>This license does not grant Users any right to access, use or disclose the original source code. All techniques, algorithms, and procedures contained in the software and any documentation related thereto is the exclusive property of the Owner or its licensors.  </p>
                <ul>
                <li><strong>Deletion of information.</strong></li>
                </ul>
                <p>The respective user can manually request the total elimination of all information related to it in the bot database, this information can only be eliminated with the respective authorization of the owner of the account.</p>
                <ul>
                <li><strong>API information.</strong></li>
                </ul>
                <p>The correct use of the API and its response to the use of the service is the responsibility of the user who owns the server, any abuse or misuse of this will result in the immediate termination of the server and its prohibition in the future. In case an abuse of it is detected, user information will be given to Discord for future actions.</p>
                <ul>
                <li><strong>Contents</strong></li>
                </ul>
                <p>Users accept that all content that is uploaded, shared or provided through the bot will be stored for a temporary period, this information is obtained directly from the links generated by the application which have a maximum duration of 10 minutes, which even from be deleted before 14 days will still be recorded.</p>
                <ul>
                <li><strong>Responsibility for content</strong></li>
                </ul>
                <p>The owner of the application reserves the right to remove, block or prohibit certain content from the platform without prior notice, these cases may occur as:</p>
                <pre>
                ➢ A complaint or report of uploaded content has been received.
                
                ➢ If a content involves intellectual property.
                
                ➢ If the content is ordered to be removed by an authority.
                
                ➢ If the owner of the application considers that the content uploaded may present a risk to those who use the service.
                </pre>
                <p>The removal, deletion, blocking, or rectification of content will not entitle the Users who have provided such content or who are responsible for it, to any claim for compensation, damage, or reimbursement.</p>
                <p>Users agree to hold the Owner harmless from any claim that may arise and/or damage suffered due to the content they provided or provided through this service.</p>
        
                <br>
                <div class="alert alert-info">
                  If you are a <b>user</b> and you do <b>not agree with the TOS and the Privacy Policy</b>: It's is recommended to leave <b>every</b> server where Any Bot is in. 
                </div>
                <div class="alert alert-info">
                  If you are a <b>server owner</b> and you do <b>not agree with the TOS and the Privacy Policy</b>:It’s recommended to remove the bot of the server
                </div>
        
              </div>`
            },
            information: {
                createdBy: "MDCDEV",
                websiteTitle: "Any Bot",
                websiteName: "Any Bot",
                websiteUrl: process.env.WEBSITE_URL,
                dashboardUrl: process.env.DASHBOARD_URL,
                supporteMail: process.env.SUPPORT_EMAIL,
                supportServer: process.env.SUPPORT_SERVER_LINK,
                imageFavicon: "https://www.imidnight.ml/assets/img/logo-circular.png",
                iconURL: "https://www.imidnight.ml/assets/img/logo-circular.png",
                pageBackGround: "linear-gradient(#2CA8FF, #155b8d)",
                loggedIn: "Successfully signed in.",
                mainColor: "#CEDBDF",
                subColor: "#E2F2F2",
                preloader: "Loading..."
            },
            index: {
                card: {
                    category: "Welcome",
                    title: `Welcome to the Any Bot Dashboard`,
                    image: "https://i.imgur.com/SU2Wfz2.png"
                },
                information: {
                    category: "Category",
                    title: "Information",
                    description: `This bot is a multi-purpose bot, music, moderation, fun, and more.`,
                },
                feeds: {
                    category: "Category",
                    title: "Feeds",
                    description: `New updates will be posted here.`,
                },
            },
            commands: [{
                    category: "Starting Up",
                    subTitle: "All helpful commands",
                    aliasesDisabled: false,
                    list: [{
                            commandName: "help",
                            commandUsage: ">help [command]",
                            commandDescription: "Obtain a list of commands or information about a specific command.",
                            commandAlias: ["Commands", "H"]
                        },
                        {
                            commandName: "aliases",
                            commandUsage: ">aliases  &#60;command type&#62;",
                            commandDescription: "Displays a list of all current aliases for the given command type. If no command type is given, the amount of aliases for every type will be displayed.",
                            commandAlias: ['Alias', 'Ali', 'A'],
                        },
                        {
                            commandName: "avatar",
                            commandUsage: ">avatar [mention/user id]",
                            commandDescription: "Get the general avatar and (If the user has one) the guilded avatar of a user or yourself.",
                            commandAlias: ["Profilepic", "Pic", "Ava"]
                        },

                    ],
                },
                {
                    category: "Starting Up",
                    subTitle: "All helpful commands",
                    aliasesDisabled: false,
                    list: [{
                            commandName: "help",
                            commandUsage: ">help [command]",
                            commandDescription: "Obtain a list of commands or information about a specific command.",
                            commandAlias: "Commands, H"
                        },
                        {
                            commandName: "warn",
                            commandUsage: ">warn [user] <reason>",
                            commandDescription: "Warn a user."
                        },
                        {
                            commandName: "Test command",
                            commandUsage: "prefix.test <arg> [op]",
                            commandDescription: "Lorem ipsum dolor sth",
                            commandAlias: "Alias",
                        },
                    ],
                },
            ],
        }),
        settings: [{
            categoryId: 'setup',
            categoryName: "Setup",
            categoryDescription: "Setup your bot with default settings!",
            categoryOptionsList: [{
                optionId: 'lang',
                optionName: "Language",
                optionDescription: "Change bot's language easily",
                optionType: DBD.formTypes.select({
                    "Polish": 'pl',
                    "English": 'en',
                    "French": 'fr'
                }),
                getActualSet: async ({
                    guild
                }) => {
                    return langsSettings[guild.id] || null;
                },
                setNew: async ({
                    guild,
                    newData
                }) => {
                    langsSettings[guild.id] = newData;
                    return;
                }
            }, ]
        }, ]
    });
    Dashboard.init();
})();