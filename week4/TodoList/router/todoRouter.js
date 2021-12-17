const express = require('express');
const todoRouter = express.Router();
const {v4:uuidv4} = require('uuid')


let todolist = [
    {task: "Walk the Dog", description: "for Mrs. Parker", time: 1600, date: "Monday Dec.20", id:uuidv4()},
    {task: "Do homework", description: "for FSW-125", time: 159, date: "Monday Dec.20", id: uuidv4()},
    {task: "Pick up kids form soccer practice", description: "Albany football field", time: 1700, date: "Friday Dec.17", id: uuidv4()},
    {task: "Be home for repair man", description: "kitchen sink not draining", time: 1000, date: "Tuesday Dec.21", id: uuidv4()},
    {task: "Work Christmas party", description: "Roux and Brew- Ponchatoula", time: 1830, date: "Saturday Dec.25", id: uuidv4()}
]
console.log(todolist)

todoRouter
    //get all
     .get('/', (req,res) => {

        res.send(todolist)
        
     })

    //get one
    .get('/', (req,res) => {
        const todoId = req.params.todoId; 
        const singleTodo = todolist.find(task => task.id === todoId)

        res.send(singleTodo)
    })

    //put
    .put('/:todoId', (req,res) => {
        const todoId = req.params.todoId; 
        const singleTodo = todolist.findIndex(task => task.id === todoId)
        Object.assign(todolist[singleTodo], req.body)

        res.send('Your task has been updated.')
    })

    //post
    .post('/', (req,res) => {
        const newTodo = req.body;
        newTodo.id = uuidv4();
        todolist.push(newTodo)

        res.send("Your new task has been added to the list!!")
    })

    //delete
    .delete('/:todoId', (req,res) => {
        const todoId = req.params.todoId; 
        const singleTodo = todolist.findIndex(task => task.id === todoId);
        todolist.splice(singleTodo, 1)

        res.send('You have deleted the task from your list! Keep up the good work!')
    })

    module.exports = todoRouter
