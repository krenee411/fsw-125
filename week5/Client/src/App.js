import {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import RecItem from './components/RecItem'
import Form from './components/Form'

function App() {
  const [recycledItems, setItems] = useState([]);
 
  const getList = () => {
    axios.get('/recycledItems')
    .then(res => setItems(res.data))
    .catch(err => console.log(err))
  }
  
  //post
  const addItem = (newItem) => {
    axios.post('/recycledItems', newItem)
    .then(res => {
      setItems(thisItem => [...thisItem, res.data])
    })
  }
  //delete
  const deleteItem = (recycledId) => {
    axios.delete(`/recycledItems/${recycledId}`)
    .then(res => {
      setItems(thisItem => thisItem.filter(item => item._id !== recycledId))
    })
  }
  //edit || put
  const editItem = (update,recycledId) => {
    axios.put(`/recycledItems/${recycledId}`, update)
    .then(res => {
      setItems(thisItem => thisItem.map(item => item._id !== recycledId ? item : res.data))
    })
  }


  useEffect(() => {
   getList();
  }, []);

 const mapItems  = recycledItems.map(task =>
     <RecItem 
      {...task} 
      key={task._id} 
      deleteItem={deleteItem}
      editItem={editItem} 
     />)

console.log(mapItems)

  return (
    <div id = 'onPage'>
      <h1>Recycable Items:</h1>
        <Form
          addItem= {addItem}
          btnTx="Add Item"
        />
      {mapItems}
    </div>
  
  );
}

export default App;
