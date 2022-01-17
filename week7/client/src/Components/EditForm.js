import { useState } from "react"

export default function EditForm({editData, btnTx, showName, id}){

    const ogdata = {showName: showName || ''}
    const [formInput, setFormInput] = useState(ogdata)

    const onChangeData = (e) => {
        const {name,value} = e.target
        setFormInput(data => ({...data, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        editData(formInput, id)
        setFormInput(ogdata)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type = 'text'
                name = 'showName'
                value = {formInput.showName}
                onChange = {onChangeData}
            ></input>

            <button>{btnTx}</button>
        </form>
    )
}