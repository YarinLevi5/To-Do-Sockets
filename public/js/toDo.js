$(function () {
  const socket = io.connect(":4000");

  $("[data-role=addBtn]").click(() => {
    let message = $("[data-role=task]").val();
    socket.emit("add task", message);
  });

  socket.on("show task", (task) => {
    let oneTask = $("<li>").text(task);
    $("[data-role=list]").append(oneTask);
  });
});
