const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder()
        .setName("exit")
        .setDescription("Kick the bot from the channel."),
	execute: async ({ client, interaction }) => {

        // Get the current queue
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue)
		{
			await interaction.reply("There are no songs in the queue\r\nhttps://tenor.com/view/boowomp-nijika-ijichi-nijika-ichiji-boowomp-gif-27229601")
			return;
		}

        // Deletes all the songs from the queue and exits the channel
		queue.destroy();

        await interaction.reply("Nijika Dies\r\nhttps://tenor.com/view/bocchi-the-rock-nijika-ijichi-nijika-bocchi-cute-gif-27057637")
	},
}
