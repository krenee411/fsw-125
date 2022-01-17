import axios from "axios";
import { useState } from "react";

export default function SearchForm(){
// do i have to put my input form in a function to make it show up when its clicked?

const [getData, setGetData] = useState([])

    const getShow= () => {
        const searchTitle = document.querySelector("#input").value;
        console.log(searchTitle)
    axios.get(`http://localhost:9000/dataArray/search/showName?showName=${searchTitle}`)
        .then(res => setGetData(res.data))
        .catch(err => console.log(err))
    
    }
    return(
        <>
            <div id='inputForm'>
                <h1>Want to learn more about these titles search them here</h1>
                    <input 
                        type = 'text'
                        id='input'
                    />
                    <button onClick={getShow}>Search</button>
                   {getData.map((show)=>{
                    return(
                        <div>
                            <h1>Title: {show.showName} </h1>
                            <h2>Main Character: {show.mainCharacter} </h2>
                            <h3>Synopsis: {show.synopsis}</h3>
                            <h3>Genre: {show.genre} , Number of Episodes:{show.episodes}</h3>
                            <h4>Ongoing: {show.onGoing.toString()}</h4>
                        </div>
                     )
                   })

                    }
               
            </div>
        </>
    )
}