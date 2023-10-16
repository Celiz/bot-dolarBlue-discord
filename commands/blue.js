import {getBluePrice} from '../requests/getBluePrice.js';
import Discord from 'discord.js';

export const getPriceBlue = async (args, msg) => {
    const response = await getBluePrice();
    if(response.error){
        msg.channel.send(response.message);
    }
    else{
    const exampleEmbed = new Discord.EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Dolar Blue')
	.setURL('https://discord.js.org/')
	.setDescription('Cotizacion del dolar blue')
	.addFields(
        { name: 'Venta', value: `${response.venta}`, inline: true },  
        { name: 'Compra', value: `${response.compra}`, inline: true },
    )
	.setTimestamp()
	.setFooter({ text: 'Dolar blue en tiempo real', });

    msg.channel.send({ embeds: [exampleEmbed] });
    }
}
