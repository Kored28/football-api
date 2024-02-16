const express = require('express')
const app = express()
require('dotenv').config()
require('express-async-errors')
require('events').EventEmitter.defaultMaxListeners = 20;

//Componenets
const Router = require('./routes/football');
const connectDB = require('./db/connect');

//Middleware
app.use(express.json())

//routes
app.use('/api/v1', Router)

//error Middleware


//Ports
const  port = process.env.PORT || 5000

const start = async () => {
    try {
        //await connectDB(process.env.MONGO_URL)
        app.listen(port, () => console.log(`This app is listening in port ${port}`) )
    } catch (error) {
        console.error(error)
    }
}

start()