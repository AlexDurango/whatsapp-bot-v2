// Librerias
//const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");

// Cargar el modulo HTTP
var http = require('http');
// Configurar una respuesta HTTP para todas las peticiones
function onRequest(request, response) {
  console.log("Peticion Recibida.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Mundo");
  response.end();
}
var server = http.createServer(onRequest);
// Escuchar al puerto 8080
server.listen(process.env.PORT);

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
    
})

client.initialize();

setInterval(client.sendMessage(`${country_code}${number}${identificador}`, `Enviado desde Clever Cloud`), 30000)