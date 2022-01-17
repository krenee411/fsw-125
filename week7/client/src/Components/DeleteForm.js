import { useState } from "react"
import EditForm from "./EditForm"

export default function DeleteForm({deleteData, editData, id, showName}){
    const [toggle, setToggle] = useState(false)
console.log(showName)
    return(
        <div>
            {!toggle ?
            <>
                <h1>{showName}</h1>
                    <button
                        onClick={()=> deleteData(id)}
                        id = 'delete'>
                        Delete
                    </button>
                    <button
                        onClick={()=> setToggle(beforeToggle => !beforeToggle)}
                        id = "edit">
                        Edit
                    </button>
            </>
            :
            <>
                <EditForm
                    showName={showName}
                    id={id}
                    editData={editData}
                    btnTx="submit edits"
                />
                <button
                    onClick={()=> setToggle(beforeToggle => !beforeToggle)}>
                    Close
                </button>
            </>
            }
        </div>
    )
}