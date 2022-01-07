const express = require('express');
const app = express();


const ItemRoute = require('./routes/ItemRoute');

const PORT = 9000;

//middleware
app.use(express.json())

//routes
app.use('/recycledItems', ItemRoute)



app.listen(PORT, () => {
    console.log(`App started on port : ${PORT}`)
})
