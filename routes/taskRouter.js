const express = require('express')
const taskRouter = express.Router()
const Task = require('../models/taskList')

//get all tasks
taskRouter.get("/", (req, res, next)=>{
    Task.find((err, items) =>{
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

//get one
taskRouter.get("/:id", (req, res, next) => {
    Task.findById(req.params.id,
        (err, task) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(task)
        })
})

//build a route to add new tasks 
taskRouter.post("/", (req, res, next) => {
    const newTask = new Task(req.body)
    newTask.save((err, savedTask) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedTask)
    })
})

//update a task 
taskRouter.put('/:id', (req, res, next)=>{
    Task.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new:true},
        (err, updatedTask) =>{
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedTask)
        })
})

//delete a task
taskRouter.delete('/:id', (req, res, next) =>{
    Task.findByIdAndDelete(req.params.id, (err, deletedTask) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(deletedTask)
    })
})

module.exports = taskRouter