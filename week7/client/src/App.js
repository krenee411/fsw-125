import {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import AddForm from './Components/AddForm'
import DeleteForm from './Components/DeleteForm'
import SearchForm from './Components/SearchForm'

function App() {
  const [dataArray,setDataArray] = useState([]);

  //get all
  const getList = () => {
    axios.get('/dataArray')
    .then(res => setDataArray(res.data))
    .catch(err => console.log(err))
  }

  //post-add new data
  const addData = (newItem) => {
    axios.post('/dataArray', newItem)
    .then(res =>{
      setDataArray(item => [...item, res.data])
    })
  }

  //delete
  const deleteData = (DataId) => {
    axios.delete(`/dataArray/${DataId}`)
    .then(res => {
      setDataArray(item => item.filter(item => item.id !== DataId))
    })
  }

  // edit || put
  const editData = (update,DataId) => {
    axios.put(`/dataArray/${DataId}`, update)
    .then(res => {
      setDataArray(item => item.map(item => item.id !== DataId ? item: res.data))
    })
  }

  useEffect(()=> {
    getList();
  }, [] );

  const mapData = dataArray.map(info => 
    <DeleteForm
    {...info}
    key = {info.id}
    title ={info.showName}
    deleteData= {deleteData}
    editData={editData}
    />)
    console.log(mapData)
  return (
    <div id='onPageData'>
      <h1>Favoriate Shows</h1>
      <AddForm
        addData={addData}
        btnTx='Add Item'
      />
       {mapData}
       <SearchForm/>
    </div>
  );
}

export default App;
