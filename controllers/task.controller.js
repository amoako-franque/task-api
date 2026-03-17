let tasks = [
	{ id: 1, title: "Task 1", completed: false },
	{ id: 2, title: "Task 2", completed: true },
	{ id: 3, title: "Task 3", completed: false },
	{ id: 4, title: "Task 4", completed: true },
]

export const getAllTasks = async (req, res) => {
	try {
		res.json({ tasks })
	} catch (error) {
		res.status(500).json({ message: "Server Error", error: error.message })
	}
}

export const getTaskById = async (req, res) => {
	try {
		const { id } = req.params
		const task = tasks.find((t) => t.id === parseInt(id))
		if (!task) {
			return res.status(404).json({ message: "Task not found" })
		}
		res.json({ task })
	} catch (error) {
		res.status(500).json({ message: "Server Error", error: error.message })
	}
}
