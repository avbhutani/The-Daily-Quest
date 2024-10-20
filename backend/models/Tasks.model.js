const mongoose = require('mongoose')
const Task = require('./Task.model')

const TasksSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true
    },
    task:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'IndividualTask'
    }]

},{timeStamps:true})

const Tasks = mongoose.model('Tasks',TasksSchema)
module.exports = Tasks