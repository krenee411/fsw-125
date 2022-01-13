const express = require('express');
const app = express();


const DataRouter = require('./backend/DataRouter');

const PORT = 9000;

//middleware
app.use(express.json())

//routes
app.use('/dataArray', DataRouter)



app.listen(PORT, () => {
    console.log(`App started on port : ${PORT}`)
})
