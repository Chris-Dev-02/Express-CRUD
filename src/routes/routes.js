import { Router } from "express"
import { controller } from '../controllers/controller.js'

export const router = Router()

router.get('/api/task/list', controller.tasksList)

router.get('/api/task/:id', controller.getTask)

router.post('/api/task', controller.addTask)

router.put('/api/task/:id', controller.updateTask)

router.delete('/api/task/:id', controller.deleteTask)