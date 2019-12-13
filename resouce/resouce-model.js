const database = require('../data/db-config.js');

module.exports = {
    allResouce,
    resouceID,
    addResouce
}

function allResouce(){
    return database('resouce')
}

function resouceID(id){
    return database('resouce').where({id}).first()
}

function addResouce(data){
    return database('resouce').insert(data, 'id')
}