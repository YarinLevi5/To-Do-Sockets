let express = require("express");
let router = express.Router();
let {
  addTask,
  getTask,
  getAllTasks,
  deleteTask,
} = require("../controllers/toDoController");

router.post("/", (req, res) => {
  let task = req.body.task;
  addTask(task)
    .then((message) => res.status(200).json(message))
    .catch((err) => res.status(404).json(err));
});

router.get("/:taskId", (req, res) => {
  getTask(req.params.taskId)
    .then((message) => res.status(200).json(message))
    .catch((err) => res.status(404).json(err));
});

router.get("/", (req, res) => {
  getAllTasks()
    .then((messages) => res.status(200).json(messages))
    .catch((err) => res.status(404).json(err));
});

router.delete("/:taskId", (req, res) => {
  deleteTask(req.params.taskId)
    .then((message) => res.status(200).json(message))
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
