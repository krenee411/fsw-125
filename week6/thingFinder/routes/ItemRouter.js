const express = require('express');
const ItemRouter = express.Router();
const {v4:uuidv4} = require('uuid')

let podcast= [
    {type: "Murder", showName: "Morbid", host: "Ash and Alaina", URL: 'https://open.spotify.com/show/1cpyLfDHP1cNnyOb478qrt', id: uuidv4()},
    {type: "Ghost", showName: "And Thats Why We Drink", host: 'Em and Christine',URL: 'https://open.spotify.com/show/3JWnH3U4VPJI6DlB0YsiKm', id: uuidv4()},
    {type: "Unsolved", showName: "Unsolved Murders", host: "Carter and Windi", URL: 'https://open.spotify.com/show/6Mk7Wk6cmrgXWnitO3NdYe', id: uuidv4()},
    {type: "True Crime", showName: "True Crime All The Time", host: "Mike and Gibby", URL: 'https://open.spotify.com/show/5KWkFDcqGMSldnzoU9iuOU', id: uuidv4()}
]
console.log(podcast)

ItemRouter
    //get all
    .get('/', (req,res) => {
         res.send(podcast)
    })
    //get some
    .get('/search/', (req,res) => {
        const podQuery = req.query.type
        const filterPod = podcast.filter(pod => pod.type === podQuery)
        res.send(filterPod)
    })

   

    module.exports = ItemRouter