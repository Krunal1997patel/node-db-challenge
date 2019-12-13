const express = require('express');
const helmet = require('helmet');

const server = express();


server.use(helmet());
server.use(logger);

server.get('/', (req, res) => {
    res.send(`<h1> You are up and runing  </h1>`)
})


function logger(req, res, next){
    console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
    next()
}

module.exports = server;