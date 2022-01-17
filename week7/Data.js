const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())


const DataRouter = require('./backend/DataRouter');

const PORT = 9000;

//middleware
app.use(express.json())

//routes
app.use('/dataArray', DataRouter)

app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
})

//error handeling 
app.use((err, req, res, next) =>{
  console.log(err)
  return res.send({errMsg: err.message})
})
  
app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
})

app.listen(PORT, () => {
    console.log(`App started on port : ${PORT}`)
})
