import { config } from "./config.js";
import { bot } from "./bot.js";

//comandos
import { getPriceBlue } from "./commands/blue.js";
import { getPriceMep} from "./commands/mep.js";
import { getPriceLiqui } from "./commands/liqui.js";


//config de express
import express from "express";
const app = express();
const port = 80;

bot.login(config.token);

bot.on("messageCreate", async (msg) => {
  if (msg.content.slice(config.prefix.length).split(" ")) {
    let args = msg.content.slice(config.prefix.length).split(" ");
    let command = args.shift().toLowerCase();


    switch(command){
        case "ping":
            msg.channel.send("pong");
            break;

        case "blue":
            getPriceBlue(args, msg);
            break;

        case "mep":
            getPriceMep(args, msg);
            break;

        case "liqui":
            getPriceLiqui(args, msg);
            break;
        
    }
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
}
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);


