const express = require('express');
const app = express();


const ItemRoute = require('./routes/ItemRoute');

const PORT = 3000;

//middleware
app.use(express.json())

//routes
app.use('/recycledItems', ItemRoute)

/*
//getting data
app.get('/recycledItems',(req,res) => {
    res.send(recycledItems)
    console.log(recycledItems)
});

//get one
app.get('/:recycledId',(req,res) => {
     const recycledId = req.params.recycledId;
     const oneItem = recycledItems.find(item => item._id === recycledId);
     
     res.send(oneItem);
})

//posting data
app.post('/recycledItems',(req,res) =>{ 
    const newItem = req.body;
    newItem._id = uuidv4();
    recycledItems.push(newItem);
    
    console.log(recycledItems)
    res.send('Item was successfully added')
    
})


//delete data
app.delete('/:recycledId',(req,res) => {
    const recycledId = req.params.recycledId;
    const oneItem = recycledItems.findIndex(item => item._id === recycledId);
})


//put data

*/

app.listen(PORT, () => {
    console.log(`App started on port : ${PORT}`)
})
