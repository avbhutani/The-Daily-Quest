const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const TaskRoutes = require('./routes/taskRoutes')
require('./db/Connect.db')
app.use(cors())
app.use(bodyParser.json())


app.use(TaskRoutes)


app.listen(4000,()=> {
    console.log('Started Listening on', 4000)
})