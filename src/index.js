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

function main () {
    let date = new Date()

    let hours = date.getHours()
    let minutes = date.getMinutes()

    //console.log(minutes)

    if (minutes == 0) {
        client.sendMessage(`${country_code}${number}${identificador}`, `Son las ${hours}:${minutes}, guapo`)
    }

}

client.on("ready", () => {
    console.log('Working')

    setInterval(main, 30000)
})



client.initialize();