const express = require('express');
const ItemRoute = express.Router();
const {v4:uuidv4} = require('uuid')



let recycledItems = [
    {recycledObject : "Water bottle", _id: uuidv4()},
    {recycledObject : "Cardboard box", _id: uuidv4()},
    {recycledObject : "Soda can", _id: uuidv4()},
    {recycledObject : "Soup can", _id: uuidv4()},
    {recycledObject : "Paper", _id: uuidv4()}
]
console.log(recycledItems)

ItemRoute
//getting data
    .get('/',(req,res) => {
        res.send(recycledItems)
        //console.log(recycledItems)
    })

        //get one
.get('/:recycledId',(req,res) => {
    const recycledId = req.params.recycledId;
    const oneItem = recycledItems.find(item => item._id === recycledId);
    
    res.send(oneItem);
})

    //posting data
    .post('/',(req,res) =>{ 
        const newItem = req.body;
        newItem._id = uuidv4();
        recycledItems.push(newItem);
        
       // console.log(recycledItems)
        res.send('Item was successfully added')
        
    })

    //delete data
    .delete('/:recycledId',(req,res) => {
        const recycledId = req.params.recycledId;
        const oneItem = recycledItems.findIndex(item => item._id === recycledId);
        recycledItems.splice(oneItem, 1);
        res.send('The item was successfully deleted')
    })

    .put('/:recycledId',(req,res) => {
        const recycledId = req.params.recycledId;
        const oneItem = recycledItems.findIndex(item => item._id === recycledId);
        const updatedItems = Object.assign(recycledItems[oneItem], req.body)
        res.send('The List has been updated.')
    })


module.exports = ItemRoute;