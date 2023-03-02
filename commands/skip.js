const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder } = require("discord.js")
module.exports = {
	data: new SlashCommandBuilder()
        .setName("skip")
        .setDescription("Skips the current song"),

	execute: async ({ client, interaction }) => {

        // Get the queue for the server
		const queue = client.player.getQueue(interaction.guildId)

        // If there is no queue, return
		if (!queue)
        {
            await interaction.reply("No songs!\nhttps://tenor.com/view/bocchi-the-rock-bocchi-the-rock-gif-nijika-nijika-ijichi-gif-27263161");
            return;
        }

        const currentSong = queue.current

        // Skip the current song
		queue.skip()

        // Return an embed to the user saying the song has been skipped
        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setDescription(`${currentSong.title} has been skipped!\r\nhttps://tenor.com/view/bocchi-the-rock-nijika-ijichi-nijika-bocchi-cute-gif-27057637`)
                    .setThumbnail(currentSong.thumbnail)
            ]
        })
	}
}
