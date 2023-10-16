import { getLiquiPrice } from "../requests/getLiquiPrice.js";
import Discord from "discord.js";

export const getPriceLiqui = async (args, msg) => {
  const response = await getLiquiPrice();
  if (response.error) {
    msg.channel.send(response.message);
  } else {
    const exampleEmbed = new Discord.EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("Dolar contado con liqui")
      .setURL("https://discord.js.org/")
      .setDescription("Cotizacion del dolar contado con liqui")
      .addFields(
        { name: "Venta", value: `${response.venta}`, inline: true },
        { name: "Compra", value: `${response.compra}`, inline: true }
      )
      .setTimestamp()
      .setFooter({ text: "Dolar contado con liqui en tiempo real" });

    msg.channel.send({ embeds: [exampleEmbed] });
  }
};
