import {useState} from 'react'
import Form from './Form'
//delete button uses onclick() function  --it is on the put and delete video!

export default function RecItem({deleteItem, editItem, recycledObject, _id}){
    const [toggle, setToggle] = useState(false)
   
    return(
        <div>
            { !toggle ?
                <>
                    <h1>{recycledObject}</h1>
                    <button 
                        onClick={() => deleteItem(_id)}
                        id = "delete">
                        Delete
                    </button>
                    <button
                    onClick={()=> setToggle(beforeToggle => !beforeToggle)}
                        id= "edit">
                        Edit    
                    </button>
                </>
                :
                <>
                    <Form
                        recycledObject={recycledObject}
                        _id={_id}
                        btnTx="Submit Edits"
                        addItem={editItem}
                    />
                    <button
                        onClick={()=> setToggle(beforeToggle => !beforeToggle)}>
                        Close
                    </button>
                </>
            }
        </div>



    );
}

//export default RecItem;