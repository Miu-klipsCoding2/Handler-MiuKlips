const { Client } = require("discord.js");
const client = new Client({ intents: 53608447 });

client.on("ready", async () => {
	console.log(`[Bot] >> Iniciamos como el bot ${client.user.tag}`);
});

client.login("TOKEN")