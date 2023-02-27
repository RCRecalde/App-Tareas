const express = require('express')
const router = express.Router()

const {allTasks, createTask, oneTask, updateTask, deleteTask} = require('../controllers/tasks')

router.route('/')
.get(allTasks)
.post(createTask)
router.route('/:id')
.get(oneTask)
.patch(updateTask)
.delete(deleteTask)

module.exports = router