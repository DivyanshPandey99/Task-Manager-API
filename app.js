const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect')
require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(express.json());

// app.get('/hello', (req,res,next)=> {
//     res.send('Hello')
// })

app.use('/api/v1/tasks',tasks);
//app.get('/api/v1/tasks') - get all the tasks
//app.post('/api/v1/tasks') - create a new task
//app.get('/api/v1/tasks/:id') - get single task
//app.patch('/api/v1/tasks/:id') - update task
//app.delete('/api/v1/tasks/:id') - delete task

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`App is running on Port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();