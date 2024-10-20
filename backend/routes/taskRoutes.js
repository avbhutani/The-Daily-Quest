const express = require('express')
const TaskRoutes = express()

const AddTask = require('../controllers/taskOperations/AddTask.controller')
const ReadTaskByUsername = require('../controllers/taskOperations/ReadTaskByUsername.controller')
const UpdateTask = require('../controllers/taskOperations/UpdateTask.controller')
const DeleteTask = require('../controllers/taskOperations/DeleteTask.controller')
const DeleteAllTasks = require('../controllers/taskOperations/DeleteAllTasks.controller')
const ReadTaskById = require('../controllers/taskOperations/ReadTaskById')


TaskRoutes.get('/api/task/all')

TaskRoutes.post('/api/task/create',AddTask)

TaskRoutes.post('/api/task/read/:taskId',ReadTaskById)

TaskRoutes.post('/api/task/update/:taskId',UpdateTask)

TaskRoutes.post('/api/task/delete/:taskId',DeleteTask)

TaskRoutes.post('/api/task/read/all/:username',ReadTaskByUsername)

TaskRoutes.post('/api/task/delete/all/:username',DeleteAllTasks)

module.exports = TaskRoutes