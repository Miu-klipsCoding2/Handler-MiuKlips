module.exports = {
	name: "interactionCreate",

	async execute(interaction, client){

	if(interaction.isChatInputCommand()){
		const cmd = client.slashcmd.get(interaction.commandName)
		if(!cmd) return;

		await cmd.execute(interaction, client)
	}
	
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