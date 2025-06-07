const { SlashCommandBuilder } = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("te dira Pong"),

	execute(interaction, client){
		interaction.reply({ content: `🏓 **Pong** ${client.ws.ping}` })
	}

}