// http no necesita instalación viene incluido en la instalacion de node.
const http = require('http');

//creamos el server que trabaja con  callback; Listen es el puerto donde trabajara el server
http.createServer((requ, resp) => {

    resp.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'Manuel S',
        numero: 2023,
        url: requ.url,
        otro: 'Mas datos'
    };
    resp.write(JSON.stringify(salida));
    resp.end();
}).listen(8080);

console.log('Escuchando Puerto 8080');