// Librerias
//const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");

const country_code = '57';
const number = '3135310417';
const identificador = '@c.us'

const client = new Client({
    authStrategy: new LocalAuth({
        clientId: 'client-on'
    })
});


client.on("message",  message => {

    let idMessage = message.from

    if(message.body == 'Servidor') {
        client.sendMessage(idMessage, 'En correcto funcionamiento')
    }
    
} );

client.on("ready", () => {
    console.log('Working')
    client.sendMessage(`${country_code}${number}${identificador}`, `Enviado desde Clever Cloud`)
})



client.initialize();