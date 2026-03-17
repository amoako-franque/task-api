import dotenv from "dotenv"
import express from "express"
import taskRouter from "./routes/task.routes.js"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 4890

//server health check
app.get("/", (req, res) => {
	res.json({
		message: "Task Api is healthy",
		status: "ok",
		version: "1.0.0",
	})
})

app.use("/api/v1/tasks", taskRouter)

// http://localhost:4890

app.listen(PORT, () => {
	console.log(`>> Server is running on http://localhost:${PORT}`)
})
