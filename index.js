const express = require('express')
const app = express()
const port = process.env.PORT || 7000
const morgan = require('morgan');
const connect = require('./db/mongoDB')
const cors = require('cors')
const userRouter = require('./router/taskRouter')






//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))



//API'S
app.use('/', userRouter)

app.get('/', function (req, res) {
    res.send('Hello World')
  })






//db connection
connect()
.then(()=>{
    try{
      
app.listen(port, ()=>{
    console.log(`Server connected to http://localhost:${port}`);

})
    }catch(error){
        console.log('cannot connect to the server');
    }
})
.catch((error)=>{
    console.log('invalid database connection...!',error);
})