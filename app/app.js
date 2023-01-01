const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middlewares/not-found')

// middleware
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks', tasks)
app.use(notFound)

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(3000, ()=>{
            console.log('Server listening on port 3000')
        })        
    } catch (error) {
        console.log(error)
    }
}

start()