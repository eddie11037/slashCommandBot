const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder()
        .setName("resume")
        .setDescription("Resumes the current song"),
	execute: async ({ client, interaction }) => {
        // Get the queue for the server
		const queue = client.player.getQueue(interaction.guildId)

        // Check if the queue is empty
		if (!queue)
        {
            await interaction.reply("No songs in the queue\r\nhttps://tenor.com/view/boowomp-nijika-ijichi-nijika-ichiji-boowomp-gif-27229601");
            return;
        }

        // Pause the current song
		queue.setPaused(false);

        await interaction.reply("Player has been resumed.\r\nhttps://tenor.com/view/bocchi-the-rock-nijika-ijichi-nijika-bocchi-anime-girl-gif-27157334")
	},
}
