export const bindTaskEvent = function (
  taskItem,
  checkBoxHandler,
  editTask,
  deleteTask
) {
  const checkBox = taskItem.querySelector("input[type=checkbox]");
  const editButton = taskItem.querySelector("button.edit");
  const deleteButton = taskItem.querySelector("button.delete");

  editButton.onclick = editTask;
  deleteButton.onclick = deleteTask;
  checkBox.onchange = checkBoxHandler;
};
