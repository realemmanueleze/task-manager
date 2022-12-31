const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')

// middleware
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Hello World')
    return
})

app.use('/api/v1/tasks', tasks)

const start = async ()=>{
    try {
        connectDB()
        app.listen(3000, ()=>{
            console.log('Server listening on port 3000')
        })        
    } catch (error) {
        console.log(error)
    }
}

start()