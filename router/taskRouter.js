const express = require('express');
const { create_task, getAll_task, update_task, single_task, delete_task } = require('../taskEventController/taskEventController');
const router = express.Router()







//post user c --- for create
router.post('/api/task',create_task)

// get user, R -- for read
router.get('/api/task', getAll_task)


// update user, U -- for update 
router.patch('/api/task/:id', update_task)

// single user, U -- for one user 

router.get('/api/task/:id', single_task)


// delete user, U -- for delete
router.delete('/api/task/:id', delete_task)


module.exports = router

