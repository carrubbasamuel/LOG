
const app = require('./app')
const server = require('http').createServer(app);

const port = 3000;



server.listen(port, () => {
    console.log('Server in ascolto sulla porta 3000');
    }
);