const dotenv = require('dotenv');
if (process.env.MODE != 'production'){
  dotenv.config()
}

const MODE = process.env.MODE;
const DATABASEURL = process.env.DATABASEURL;
const PORT = process.env.PORT;
let HOST = '0.0.0.0';
let PERSISTENCIA = process.argv[2];  //"MEM" //"FILE" //"MONGO"
PERSISTENCIAUSUARIOS = "MONGO"
const ADMINMAIL = process.env.ADMINMAIL;
const ADMINWHATSAPP = process.env.ADMINWHATSAPP;
const NUMSANDBOX = process.env.NUMSANDBOX;
const TIEMPOEXPIR = process.env.TIEMPOEXPIR;

module.exports = {
    MODE, DATABASEURL, PORT, HOST, PERSISTENCIA, PERSISTENCIAUSUARIOS, ADMINMAIL, ADMINWHATSAPP, NUMSANDBOX, TIEMPOEXPIR
}