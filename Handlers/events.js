const { readdirSync } = require("node:fs")

module.exports = {
	async loadEvents(client){

		for(const Carpeta of readdirSync(`./Eventos`)){
			for(const Evento of readdirSync(`./Eventos/${Carpeta}`).filter(file => file.endsWith('.js'))){

				const evento = require(`../Eventos/${Carpeta}/${Evento}`)

				if(evento.once) {
					client.once(evento.name, (...args) => evento.execute(...args, client));
				} else {
					client.on(evento.name, (...args) => evento.execute(...args, client));
				}
			}
		}

		console.log("[Bot] >> Eventos Cargados.".yellow)
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