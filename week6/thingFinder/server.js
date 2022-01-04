const express = require('express');
const app = express();


const ItemRouter = require('./routes/ItemRouter');

const PORT = 9000;

//middleware
app.use(express.json())

//routes
app.use('/podcast', ItemRouter)



app.listen(PORT, () => {
    console.log(`App started on port : ${PORT}`)
})
