import express from "express"
import { getAllTasks } from "../controllers/task.controller.js"
const taskRouter = express.Router()
//http://localhost:4890/api/v1/tasks
taskRouter.get("/", getAllTasks)
// taskRouter.get("/", getAllTasks)

export default taskRouter
