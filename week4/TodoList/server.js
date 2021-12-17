const express = require('express');
const app = express();

const todoRouter = require('./router/todoRouter');

const PORT = 3000;


//middleware
app.use(express.json());

//routes
app.use('/todolist', todoRouter);






app.listen(PORT, () => {
    console.log(`App started on port ${PORT}!`)
})