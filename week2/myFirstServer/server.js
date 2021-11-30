const express = require('express');
const app = express();

const PORT = 3000;


let players = [
    {player1: 'KenpachiSoul1', rank: 25, },
    {player2: 'DevilDog', rank: 15},
    {player3: 'AngelGlow', rank: 75},
    {player4: 'ShadowGoul', rank: 29},
    {player5: 'BlazingArrow', rank: 50,}
];
app.get('/players', (req,res) =>{
    res.send(players)
});

let partyPosition= [
    {position: 'Mage', ability: 'Combat Magic'},
    {position: 'Knight', ability: 'Hand to hand combat'},
    {position: 'Healer', ability: 'Healing Magic'},
    {position: 'Archer', ability: 'Long Range Shooter'},
    {position: 'Rouge', ability: 'Stelth Fighter'}
];
app.get('/partyPosition', (req,res) =>{
    res.send(partyPosition)
});

let mapLocation =[
    {location: 'Encampment', community: 'Party Camp'},
    {location: 'Renagon', community: 'Elven Village'},
    {location: 'Templar Castel', community: 'Kights Guild Hall'},
    {location: 'Guiding Light Church', community:'Healer Community'},
    {location: 'Shadow Gathering', community: 'Rouge Hideout'},
    {location: 'Tower of Light', community: 'Mage Magic Console'}
]
app.get('/mapLocation', (req,res) =>{
    res.send(mapLocation)
});





app.listen(PORT, () => {
    console.log(`App started on port : ${PORT}`)
})