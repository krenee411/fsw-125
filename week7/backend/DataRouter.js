const express = require('express');
const { STATUS_CODES } = require('http');
const { nextTick } = require('process');
const DataRouter = express.Router();
const {v4:uuidv4} = require('uuid')


let dataArray = [
    {showName: "Bleach", mainCharacter: "Ichigo Kurosaki", synopsis: "Bleach follows the adventures of a hotheaded teenager Ichigo, who inherits his parents destiny after he obtains the power of a Soul Reaper.", onGoing: true, genre: ["Anime", "Action", "Adventure"], episodes: 366,  id: uuidv4()},
    {showName: "You", mainCharacter: "Joe Goldberg", synopsis: "This story follows Joe, who manages a New York bookstore, you will follow the ups and downs of his obsession and murder?", onGoing: true, genre: ["Horror", "Thriller"," Mystery"], episodes: 30,  id: uuidv4()},
    {showName: "Cowboy Bebop", mainCharacter: "Spike Spiegel", synopsis: "Follow Spike and his intrepid band of bounty hunters,cashing enormous cash rewards. THe team is after an ex-military man, Vincent, the former hero has become a biological terrorist. ", onGoing: false, genre: ["Anime", "Drama", "Fantasy"], episodes: 26,  id: uuidv4()},
    {showName: "The Witcher", mainCharacter: "Geralt of Rivia", synopsis: "This story follows Geralt of Rivia, the witcher, a mutant with special powers that he used to be solitary monster hunter, and he struggles to find a place in the world where poeple often to be more wicked than monsters and beast. ", onGoing: false, genre: ["Fantasy Fiction", "Drama"], episodes: 16,  id: uuidv4()},
    {showName: "Inuyasha", mainCharacter: "Inuyasha",synopsis: " A story of a dog half-demon who is after the Shikon Jewel, a jewel with immense power", onGoing: false, genre: ["Anime", "Romance", "Action"], episodes: 12,  id: uuidv4()},
    {showName: "Supernatural", mainCharacter: "Sam and Dean Winchester", synopsis: "Follow Sam and Dean who travel across America in a 1967 Chevy Impala investigating and combating pernormal events.", onGoing: false, genre: ["Mystery", "Fantasy"," Horror"], episodes: 320,  id: uuidv4()}
]
console.log(dataArray)

DataRouter
    //get all
    .get('/',(req,res) => {
        res.status(200).send(dataArray)// 200 good request
    })

    //get one
    .get('/:DataId',(req, res, next) => {
        const DataId = req.params.DataId;
        const oneItem = dataArray.find(item => item.id === DataId);
        if(!oneItem){
            const error= new Error("Sorry that show was not found")
            return next(error)
        }
        res.send(oneItem)
    })

    //get some
    .get('/search/showName',(req,res)=> {
        const dataQuery = req.query.showName
        const filterData = dataArray.filter(data => data.showName === dataQuery)
        res.send(filterData)
        
    })

    //update
    .put('/:DataId',(req,res) => {
        const DataId = req.params.DataId;
        const oneItem = dataArray.findIndex(item => item.id === DataId);
        console.log(oneItem, req.body)
        const updatedItems = Object.assign(dataArray[oneItem], req.body)
        console.log(updatedItems)
        res.status(201).send("New data was successfully added")
    })

    //delete
    .delete('/:DataId',(req,res) => {
        const DataId = req.params.DataId;
        const oneItem = dataArray.find(item => item.id === DataId);
        dataArray.splice(oneItem, 1)
        res.send('The Data was successfully deleted!')
    })

    //add
    .post('/',(req,res) => {
        const newData = req.body;
        newData.id = uuidv4();
        dataArray.push(newData)
    })

module.exports = DataRouter;