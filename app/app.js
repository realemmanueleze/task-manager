require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

// middleware
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Hello World')
    return
})

app.use('/api/v1/tasks', tasks)

app.listen(3000, ()=>{
    console.log('Server listening on port 3000')
})
