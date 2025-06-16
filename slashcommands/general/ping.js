const { SlashCommandBuilder } = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Te respondera con Pong"),

	execute(interaction, client){
		interaction.reply({ content: `🏓 **Ping** ${client.ws.ping}` })
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