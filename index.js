const { Client, Collection } = require("discord.js");
const { loadEvents } = require("./Handlers/events")
const colors = require("colors")
require('dotenv').config();

const client = new Client({ intents: 53608447 });

loadEvents(client);

client.slashcmd = new Collection();

client.login(process.env.TOKEN)

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