
export default function SearchForm({showName, mainCharacter, synopsis, onGoing, genre, episodes}){


    const getShow= () => {
        const searchTitle = document.querySelector("#input").value;

    fetch(`http://localhost:9000/dataArray/search/showName?showName=${searchTitle}`)
        .then(res => res.json())
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
                <div>
                    <h1>Title:{showName}</h1>
                    <h2>Main Character:{mainCharacter}</h2>
                    <h3>Synopsis:{synopsis}</h3>
                    <h3>Genre:{genre}, Number of Episodes:{episodes}</h3>
                    <h4>Ongoing:{onGoing}</h4>
                </div>
            </div>
        </>
    )
}