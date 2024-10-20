const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    title: {
        type:String,
        required:true
    },
    content: {
        type:String
    },
    deadline: {
        type:Date
    },
    completed: {
        type:Boolean
    }
})

const IndividualTask = mongoose.model('IndividualTask',TaskSchema)
module.exports = IndividualTask