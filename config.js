const { Sequelize } = require("sequelize");
const fs = require("fs");
require('dotenv').config();

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env', override: true });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const toBool = (x) => (x && x.toLowerCase() === 'true') || false;
global.apiUrl = 'https://api.maskser.me/'


const DATABASE_URL = process.env.DATABASE_URL === undefined ? './database.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
  HANDLERS: (process.env.PREFIX || '^[.,!]').trim(),
  BRANCH: "main",
  ADMIN_ACCESS: toBool(process.env.ADMIN_ACCESS) || false,
  MODE: (process.env.MODE || 'private').toLowerCase(),
  ERROR_MSG: toBool(process.env.ERROR_MSG) || true,
  LOG_MSG: toBool(process.env.LOG_MSG) || true,
  READ_CMD: toBool(process.env.READ_CMD),
  SESSION_ID: process.env.SESSION_ID || "izumi~20oWEIpI#CqORHl_8S7UIzEtIIv3DwXoSlOXMNokQ872XoYyRneg
  MENU_URL: process.env.MENU_URL || "https://cdn.ironman.my.id/i/bp2y96.jpg",
  CAPTION: process.env.CAPTION || "𓍢ִ໋͙֒𓋜᧕҇ന്ദ᪴Კ⃨ ഏ͊ჴ҉൵֤͉֫̚..🪷•𔘓°𓍯𓂃",
  READ_MSG: toBool(process.env.READ_MSG),
  OWNER_NAME: process.env.OWNER_NAME || "𓍢ִ໋͙֒𓋜᧕҇ന്ദ᪴Კ⃨ ഏ͊ჴ҉൵֤͉֫̚..🪷•𔘓°𓍯𓂃",
  BOT_NAME: process.env.BOT_NAME || ".𓋜  ִ ໊🥤𝑳𝑨𝑪𝑹𝑶 𝑽𝑭𝑿 𖹩 ִֶָ 𖢿",
  SUDO: process.env.SUDO || null,
  LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || "𓍢ִ໋͙֒𓋜᧕҇ന്ദ᪴Კ⃨ ഏ͊ჴ҉൵֤͉֫̚..🪷•𔘓°𓍯𓂃",
  AUDIO_DATA: process.env.AUDIO_DATA || "Eʏᴘᴢ;Iᴢᴜᴍɪ-ᴠ3;https://i.imgur.com/cO0TZJv.jpeg",
  PROCESSNAME: process.env.PROCESSNAME || "Izumi-v3",
  AUTHOR: process.env.AUTHOR || "𓍢ִ໋͙֒𓋜᧕҇ന്ദ᪴Კ⃨ ഏ͊ჴ҉൵֤͉֫̚..🪷•𔘓°𓍯𓂃",
  DELETED_LOG_CHAT: process.env.DELETED_LOG_CHAT || false,
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  KOYEB_API_KEY: process.env.KOYEB_API_KEY || "api",
  KOYEB_APP_NAME: process.env.KOYEB_APP_NAME || "name",
  KOYEB: toBool(process.env.KOYEB) || false,
  HEROKU: toBool(process.env.HEROKU) || false,
  TERMUX: toBool(process.env.TERMUX) || false,
  DATABASE_URL: DATABASE_URL,
  DATABASE:
       DATABASE_URL === './database.db' ? new Sequelize({dialect: 'sqlite', storage: DATABASE_URL, logging: false,}) : new Sequelize(DATABASE_URL, {dialect: 'postgres', ssl: true, protocol: 'postgres', dialectOptions: {native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false,}),
  DEBUG: DEBUG
};
