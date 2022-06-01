const http = require('http');
const router = require('router');
const finalHandler = require('finalhandler');

console.log(router.get);
console.log(finalHandler);

const server = http.createServer();

server.on('request', (request, response) => {
    const { method, url, headers } = request;

    response.writeHead(200, { 'Content-Type': 'application/json' })

    response.end(JSON.stringify({ msg: 'hello world' }));
})

server.listen(3000, () => console.log('Server is up'))

