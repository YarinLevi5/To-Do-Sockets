const express = require("express");
let app = express();
let port = process.env.PORT || 5000;
let mongoose = require("mongoose");
let toDoRouter = require("./routes/todoRouter");
app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/toDo", toDoRouter);

const server = require("http").createServer(app);
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  console.log("Someone connected");
  socket.on("add task", (task) => {
    io.emit("show task", task);
  });
});

mongoose
  .connect("mongodb://0.0.0.0:27017/toDo")
  .then(() => {
    server.listen(port);
  })
  .catch((err) => console.error(err));
