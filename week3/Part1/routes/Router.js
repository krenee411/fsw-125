const express = require('express');
const 
const {v4:uuidv4} = require('uuid')

let recycledItems = [
    {recycledObject : "Water bottle", _id: uuidv4()},
    {recycledObject : "Cardboard box", _id: uuidv4()},
    {recycledObject : "Soda can", _id: uuidv4()},
    {recycledObject : "Soup can", _id: uuidv4()},
    {recycledObject : "Paper", _id: uuidv4()}
]