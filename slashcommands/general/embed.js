const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("embed")
		.setDescription("Enviara mensaje en embed"),

	async execute(interaction, client){

//////////// PRIMER METODO PARA UN EMBED ////////////
const Embed = new EmbedBuilder()
.setColor("Yellow")
.setTitle('Handler de Miu')
.setDescription(`
# \`📂\` Handler Completo

> Justo aqui este handler esta disponible para todo publico que podras apoyar en mi [canal de Youtube](https://youtu.be/tMYgmKJLef8?si=stbzky8ro26mWKCj) 
> donde tengo varias videos de como explico sobre los bots de discord desde 0, si mayor mente necitas 
> ayuda puedes entrar a mi servidor de [Discord](https://discord.gg/3kV6xZzDS4) en donde te podre apoyar


# \`🤖\` Compra un bot

> si no te interesa ir por paso al hacer un bot puedes contactarme en mi servidor de discord
> donde podremos negocias sobre un bot de discord avansado.

# \`⭐\` Gracias Por apoyar a este canal
`)

//////////// SEGUNDO METODO PARA UN EMBED ////////////

	// const exampleEmbed = {
	// 	color: 16777215,
	// 	title: 'Hola como andan',
	// 	description: '# <:EMEstrella:1382866781747810464> Bienvidos/as como andan \n> <:EMLuna:1382866722352009357> Este mensaje es de **Prueba**',
	// };

	// const exampleEmbed2 = {
	// 	color: 65280,
	// 	title: 'Que hay',
	// 	description: '<:EMRobot:1382866692438229062> Este bot es mejor',
	// };

		interaction.reply({ embeds: [Embed] })
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