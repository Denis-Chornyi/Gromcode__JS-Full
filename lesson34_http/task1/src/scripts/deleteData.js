import { renderTasks } from "./renderer.js";
import { setItem } from "./storage.js";
import { deleteTask, getTasksList } from "./tasksGateway.js";

export const onDeleteTask = (e) => {
  const taskId = e.target.closest(".list-item").dataset.id;

  deleteTask(taskId)
    .then(() => getTasksList())
    .then((updatedTasksList) => setItem("tasksList", updatedTasksList));
  renderTasks();
};
