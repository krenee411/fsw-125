import {useState} from 'react'

export default function InputForm({ addItem, btnTx, recycledObject, _id}){

    const ogItem = { recycledObject: recycledObject || ''}
    const [formInput, setFormInput] = useState(ogItem)

    const onChangeData = (e) => {
        const {name,value} = e.target
        setFormInput(thisItem => ({...thisItem, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addItem(formInput, _id)
        setFormInput(ogItem)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type= 'text'
                name= "recycledObject"
                value= {formInput.recycledObject}
                placeholder='Please enter your item'
                onChange = {onChangeData} >
            </input>
            <button>{btnTx}</button>
        </form>
    )

}
