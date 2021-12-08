const express = require('express');
const app = express();

const PORT = 3000;

//middleware
app.use(express.json())

//fake data
let recycledItems = [
    {recycledObject : "Water bottle"},
    {recycledObject : "Cardboard box"},
    {recycledObject : "Soda can"},
    {recycledObject : "Soup can"},
    {recycledObject : "Plastic bag"},
    {recycledObject : "Paper"}
]


//posting data
app.post('/recycledItems',(req,res) =>{ 
    const newItem = req.body;
    recycledItems.push(newItem);
    
    console.log(recycledItems)
    res.send('Item was successfully added')
    
})


//getting data
app.get('/recycledItems',(req,res) => {
    res.send(recycledItems)
});






app.listen(PORT, () => {
    console.log(`App started on port : ${PORT}`)
})