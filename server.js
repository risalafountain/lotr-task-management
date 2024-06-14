const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()
const path = require("path")

//middleware
app.use(express.json())
app.use(morgan('dev'))
// ... other app.use middleware
app.use(express.static(path.join(__dirname, "client", "dist")))


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

// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html")); });

//serverlisten
app.listen(process.env.PORT, () => {
    console.log('server is running on port' + process.env.PORT)
})




