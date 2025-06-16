const { loadSlash } = require("../../Handlers/slashcommands")

module.exports = {
	name: "ready",
	once: true,

	async execute(interaction, client){

	console.log(`[Bot] >> Iniciamos como el bot ${client.user.tag}`.green);

	loadSlash(client);
	}
}

/*
╔╗─╔╗╔═══╗╔═╗─╔╗╔═══╗╔╗───╔═══╗╔═══╗     ╔═╗╔═╗╔══╗╔╗─╔╗
║╚═╝║║║─║║║╔╗╚╝║─║║║║║║───║╚══╗║╚═╝║     ║╔╗╔╗║─║║─║║─║║
║╔═╗║║╚═╝║║║╚╗║║─║║║║║║─╔╗║╔══╝║╔╗╔╝     ║║║║║║─║║─║║─║║
╚╝─╚╝╚╝─╚╝╚╝─╚═╝╚═══╝╚═══╝╚═══╝╚╝╚═╝     ╚╝╚╝╚╝╚══╝╚═══╝

╭─────────────────────────────────────────────────╮
│                                                 │
│  Discord: https://discord.gg/3kV6xZzDS4         │
│  YouTube: https://www.youtube.com/@DevMiùKlips  │
│  TikTok: https://www.tiktok.com/@miuklips_viw   │
│  Ko-fi: https:ko-fi.com/miuklips                │
│                                                 │
╰─────────────────────────────────────────────────╯
*/