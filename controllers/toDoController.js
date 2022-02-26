let Task = require("../models/todo");

let addTask = (task) => {
  return new Promise((resolve, reject) => {
    let newTask = new Task({
      task,
    });
    newTask
      .save()
      .then((message) => resolve(message))
      .catch((err) => reject(err));
  });
};

let getTask = (_id) => {
  return new Promise((resolve, reject) => {
    Task.findOne({ _id })
      .then((task) => resolve(task))
      .catch((err) => reject(err));
  });
};
let getAllTasks = () => {
  return new Promise((resolve, reject) => {
    Task.find()
      .then((messages) => resolve(messages))
      .catch((err) => reject(err));
  });
};

let deleteTask = (_id) => {
  return new Promise((resolve, reject) => {
    Task.findByIdAndDelete(_id)
      .then((message) => resolve(message))
      .catch((err) => reject(err));
  });
};

module.exports = {
  addTask,
  getTask,
  getAllTasks,
  deleteTask,
};
