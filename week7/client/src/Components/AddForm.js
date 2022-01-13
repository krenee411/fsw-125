import { useState } from "react"

export default function AddForm({addData, btnTx, showName, mainCharacter, genre, episodes,  id}){

    const ogdata = {showName: showName || '', mainCharacter: mainCharacter || '', genre: genre || '', episodes: episodes || ''}
    const [formInput, setFormInput] = useState(ogdata)

    const onChangeData = (e) => {
        const {showName,value} = e.target
        setFormInput(data => ({...data, [showName]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addData(formInput, id)
        setFormInput(ogdata)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type = 'text'
                name = 'showName'
                value = {formInput.showName}
                placeholder="Show Name"
                onChange = {onChangeData}
            ></input>

            <input
                type = 'text'
                name = 'mainCharacter'
                value = {formInput.mainCharacter}
                placeholder="Main Character Name"
                onChange = {onChangeData}
            ></input>

            <input
                type = 'text'
                name = 'genre'
                value = {formInput.genre}
                placeholder="Show Genre"
                onChange = {onChangeData}
            ></input>

            <input
                type = 'number'
                name = 'episodes'
                value = {formInput.episodes}
                placeholder="Number of episodes"
                onChange = {onChangeData}
            ></input>
            <button>{btnTx}</button>
        </form>
    )
}