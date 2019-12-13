const express = require('express');
const helmet = require('helmet');

const server = express();

const projectRouter = require('./project/project-router.js')
const resouceRouter = require('./resouce/resouce-router.js')

server.use(helmet());
server.use(logger);

server.get('/', (req, res) => {
    res.send(`<h1> You are up and runing  </h1>`)
})

server.use('/api/project', projectRouter);
server.use('/api/resouce', resouceRouter);

function logger(req, res, next){
    console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
    next()
}

module.exports = server;