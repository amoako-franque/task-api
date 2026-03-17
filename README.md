# Task API

A simple Node.js + Express REST API for managing a list of tasks. This repository provides a minimal foundation with a single `GET` endpoint to fetch all tasks. It's designed to be easy to extend (add task creation, updates, persistence, authentication, etc.).

---

## ✅ Features

- **Express**-based REST API
- Environment-driven configuration (via `.env`)
- Single endpoint to list tasks
- Easy to extend with additional routes, controllers, and persistence

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v16+ recommended)
- npm (comes with Node.js)

### 1) Clone the repository

```bash
git clone https://github.com/amoako-franque/task-api.git
cd task-api
```

### 2) Install dependencies

```bash
npm install
```

### 3) Configure environment variables

This project uses [dotenv](https://www.npmjs.com/package/dotenv) to load environment variables.

Create a `.env` file in the project root (if it doesn't exist) with any of the following values:

```env
PORT=4890
```

If the `.env` file is missing, the server will default to port `4890`.

### 4) Start the server

Run in production mode:

```bash
npm start
```

Run in development mode (auto-restarts with changes):

```bash
npm run dev
```

Once the server is running, you should see a message like:

```text
>> Server is running on http://localhost:4890
```

---

## 📦 Available Endpoints

### Health check

```http
GET /
```

**Response** (200):

```json
{
	"message": "Task Api is healthy",
	"status": "ok",
	"version": "1.0.0"
}
```

### Get all tasks

```http
GET /api/v1/tasks
```

**Response** (200):

```json
{
	"tasks": [
		{ "id": 1, "title": "Task 1", "completed": false },
		{ "id": 2, "title": "Task 2", "completed": true },
		{ "id": 3, "title": "Task 3", "completed": false },
		{ "id": 4, "title": "Task 4", "completed": true }
	]
}
```

---

## 🔧 How to Use

### Testing via cURL

```bash
curl http://localhost:4890/api/v1/tasks
```

### Testing via HTTP client (Postman / Insomnia)

1. Create a new request
2. Set method to `GET`
3. Set URL to `http://localhost:4890/api/v1/tasks`
4. Send request

---

## 🧱 Project Structure

```text
.
├── controllers/          # Route handlers
│   └── task.controller.js
├── routes/               # Express routers
│   └── task.routes.js
├── server.js             # Application entry point
├── package.json          # Node.js metadata and scripts
└── .env                  # Environment variables (not committed)
```

> Note: `config/`, `middleware/`, `models/`, and `utils/` folders are currently empty and intended for future extensions.

---

## ✅ Extending the API (Ideas)

- Add endpoints to create, update, delete, and fetch individual tasks
- Add persistence using a database (PostgreSQL, MongoDB, SQLite, etc.)
- Add request validation middleware (e.g., `express-validator`)
- Add authentication (JWT, sessions) and authorization
- Add logging and error handling middleware

---

## 📌 Notes

- The task list is currently stored in-memory. Restarting the server will reset the data.
- The code uses ES modules (the `type: "module"` setting in `package.json`).

---

## 📜 License

This project is provided under the `ISC` license (as defined in `package.json`).
