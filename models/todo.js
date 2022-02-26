let mongoose = require("mongoose");
const tasksSchema = new mongoose.Schema({
  task: {
    type: String,
    required: "Write your task",
  },
  time: { type: Date, default: Date.now },
});
const Task = mongoose.model("Task", tasksSchema);
module.exports = Task;
