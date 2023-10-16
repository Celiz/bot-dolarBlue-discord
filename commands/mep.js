import { getMepPrice } from "../requests/getMepPrice.js";
import Discord from "discord.js";

export const getPriceMep = async (args, msg) => {
  const response = await getMepPrice();
  if (response.error) {
    msg.channel.send(response.message);
  } else {
    const exampleEmbed = new Discord.EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("Dolar MEP")
      .setURL("https://discord.js.org/")
      .setDescription("Cotizacion del dolar MEP")
      .addFields(
        { name: "Venta", value: `${response.venta}`, inline: true },
        { name: "Compra", value: `${response.compra}`, inline: true }
      )
      .setTimestamp()
      .setFooter({ text: "Dolar MEP en tiempo real" });

    msg.channel.send({ embeds: [exampleEmbed] });
  }
};
