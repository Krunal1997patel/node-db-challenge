const database = require('../data/db-config.js');

module.exports = {
    allProject,
    projectID,
    addProject,
    updateProject,
    deleteProject,
    // allTask,
    findTask,
    addTask
}

function allProject(){
   return database('project');
}

function projectID(id){
    return database('project')
            .select('project.id', 'project.name', 'project.description', 'project.completed')
            .where('project.id', id)
            // findTask(id)
}

function addProject(body){
    return database('project').insert(body, 'id')
    .then(ids => {
        const [id] = ids;

        return projectID(id);
    })
}

function updateProject(change, id){
    return database('project').where('id', Number(id)).update(change)
}

function deleteProject(id){
    return database('project').where('id', Number(id)).del()
}

//----------------------------------TASK

// function allTask(){
//     return database('task');
// }

function findTask(id){
    return database('task')
        .select('task.id', 'task.description', 'task.note', 'task.completed', 'project.name as project_name')
        .join('project', 'project.id', 'task.project_id')
        .where('project.id', id)
}

function addTask(data, id){
    return database('task').insert({...data, project_id: id})
        .then(ids => ({id: ids[0]}))
}