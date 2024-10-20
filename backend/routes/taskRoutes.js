const express = require('express')
const AddTask = require('../controllers/taskOperations/AddTask.controller')
const ReadTask = require('../controllers/taskOperations/ReadTask.controller')
const UpdateTask = require('../controllers/taskOperations/UpdateTask.controller')
const DeleteTask = require('../controllers/taskOperations/DeleteTask.controller')
const DeleteAllTasks = require('../controllers/taskOperations/DeleteAllTasks.controller')
const TaskRoutes = express()


TaskRoutes.get('/api/task/all')

TaskRoutes.post('/api/task/create',AddTask)

TaskRoutes.post('/api/task/read/:id',ReadTask)

TaskRoutes.post('/api/task/update',UpdateTask)

TaskRoutes.post('/api/task/delete/:id',DeleteTask)

TaskRoutes.post('/api/task/delete/all/:username',DeleteAllTasks)


module.exports = TaskRoutes