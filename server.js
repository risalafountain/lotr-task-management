const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()

//middleware
app.use(express.json())
app.use(morgan('dev'))

//mount the taskRouter
app.use('/api/tasks', require('./routes/taskRouter'))

//mongoose
mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://mrsrisalafountain:D3INAzzICrV0AMgF@cluster0.dhmkqhk.mongodb.net/test',
    (err) => console.log('connected to the db', err))


//setup error handler 
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMssg: err.message })
})

//serverlisten
app.listen(9000, () => {
    console.log('server is running on port 9000')
})