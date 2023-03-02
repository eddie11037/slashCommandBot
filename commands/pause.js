const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder()
        .setName("pause")
        .setDescription("Pauses the current song"),
	execute: async ({ client, interaction }) => {
        // Get the queue for the server
		const queue = client.player.getQueue(interaction.guildId)

        // Check if the queue is empty
		if (!queue)
		{
			await interaction.reply("There are no songs in the queue\r\nhttps://tenor.com/view/bocchi-the-rock-bocchi-the-rock-gif-nijika-nijika-ijichi-gif-27263161")
			return;
		}

        // Pause the current song
		queue.setPaused(true);

        await interaction.reply("Player has been paused.\r\nhttps://tenor.com/view/bocchi-the-rock-nijika-ijichi-nijika-bocchi-anime-girl-gif-27157334")
	},
}
