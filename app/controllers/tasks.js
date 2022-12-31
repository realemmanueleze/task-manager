const Task = require('../models/tasks')


const getAllTasks = (req, res) =>{
    res.send("Get all Tasks")
}
const createTask = async (req, res) =>{
   const task = await Task.create(req.body)
   res.status(201).json(task)
}
const getTask = (req, res) =>{
    res.json({id : req.params.id})
}
const updateTask = (req, res) =>{
    res.send("Update Tasks")
}
const deleteTask = (req, res) =>{
    res.send("Delete Tasks")
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}