require('dotenv').config();
require('discord.js');
const axios = require('axios');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({intents: [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent]});

client.on('ready', ()=> {
    console.log('bot esta listo');
})

client.on('messageCreate', async(message) => {
    if(message.content === "ping") {
        message.reply({
            content: "pong"
        })
    } else if(message.content === "hola") {
        message.reply({
            content: "Bienvenido al canal"
        })
    } else if(message.content === "dime una frase") {

        resp = await axios.get("https://api.quotable.io/random");
        const quote = resp.data.content;
        message.reply({
            content: quote
        })
    }
})

//permite la conexion con el servidor
client.login(process.env.DISCORD_BOT_ID)