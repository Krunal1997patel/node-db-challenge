const express = require('express');
const resouceDB = require('./resouce-model.js');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    resouceDB.allResouce()
    .then(data => {
        res.status(200).json(data)
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    resouceDB.resouceID(id)
    .then(resouce => {
        res.status(200).json(resouce)
    })
    .catch(err => {
        res.status(500).json({
            error: 'can not get the resouse by id'
        })
    })
})

router.post('/', (req, res) => {
    const body = req.body;

    if(!body.name){
        res.status(400).json({
            error: 'please proved name'
        })
    }else{
        resouceDB.addResouce(body)
        .then(resouce => {
            res.status(201).json(resouce)
        })
        .catch(err => {
            res.status(500).json({
                err: 'can add new resouce to databass'
            })
        })
    }
})



module.exports = router;