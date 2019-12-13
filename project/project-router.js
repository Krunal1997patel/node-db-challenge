const express = require('express');
const projectDB = require('./project-model.js')

const router = express.Router();

router.use(express.json())

router.get('/', (req, res) => {
    projectDB.allProject()
    .then(project => {
        let checkProject = project.map( proj => {
            return {...proj , completed: proj.completed === 0 ? false : true}
        })

        res.status(200).json(checkProject)
    })
    .catch(err => {
        res.status(500).json({
            err: 'can not get all the project'
        })
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    projectDB.projectID(id)
    .then(projID =>{
        let checkProject = projID.map( proj => {
            return {...proj , completed: proj.completed === 0 ? false : true}
        })

        res.status(200).json(checkProject)
    })
    .catch(err => {
        res.status(500).json({
            err: 'can not get project by id'
        })
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    projectDB.deleteProject(id)
    .then(deleted => {
        if (deleted) {
          res.json({ mess: `${id} was removed from project` });
        } else {
          res.status(404).json({ message: 'Could not find scheme with given id' });
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to delete scheme' });
      });
})

router.post('/', (req, res) =>{
    const body = req.body;

    if(!body.name){
        res.status(400).json({
            error: 'please proved name of project'
        })
    }else{
        projectDB.addProject(body)
        .then(project =>{

            let checkProject = project.map( proj => {
                return {...proj , completed: proj.completed === 0 ? false : true}
            })

            res.status(201).json(checkProject)
        })
        .catch(err =>{
            res.status(500).json({
                error: 'can not add new project'
            })
        })
    }
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;

    if(!body.name){
        res.status(400).json({
            error: 'please proved name of the project'
        })
    }else{
        projectDB.updateProject(body, id)
        .then(project =>{
            res.status(200).json(project)
        })
        .catch(err =>{
            res.status(500).json({
                error: 'can change the project data'
            })
        })
    }
})

//------------------------------TASK CRUD

// router.get('/tasks', (req, res) =>{
//     projectDB.allTask()
//     .then(task =>{
//         res.status(200).json(task)
//     })
//     .catch(err =>{
//         res.status(500).json({
//             error: 'Can not get any tasks'
//         })
//     })
// })

router.get('/:id/task', (req, res) =>{
    const id = req.params.id;

    projectDB.findTask(id)
    .then(task =>{

        const checktask = task.map( check => {
            return {...check, completed: check.completed === 0 ? false : true}
        } )

        res.status(200).json(checktask)
    })
    .catch(err =>{
        res.status(500).json({
            error: 'can not get that task'
        })
    })
})

router.post('/:id/task', (req, res) =>{
    const body = req.body;
    const id = req.params.id;

    if(!body.description){
        res.status(400).json({
            error: 'please proved description for that task'
        })
    }else{
        projectDB.addTask(body, id)
        .then(task =>{
            res.status(201).json(task)
        })
        .catch(err =>{
            res.status(500).json({
                error: 'Can not add task to that project'
            })
        })
    }
})

module.exports = router;