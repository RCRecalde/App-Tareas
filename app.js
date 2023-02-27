const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

//MW
app.use(express.static('./public'))
app.use(express.json())

//rutas
app.use('/api/v1/tasks', tasks)

//app.get('/api/v1/tasks') ALL TASKS
//app.post('/api/v1/tasks') CREATE TASK
//app.get('/api/v1/tasks/:id') GET ONE TASK
//app.patch('/api/v1/tasks/:id') UPDATE TASK
//app.delete('/api/v1/tasks/:id') DELETE TASK


const port = 3000


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log('Server running on port ' + port))
    } catch (error) {
        console.log(error)
    }
}
start()
