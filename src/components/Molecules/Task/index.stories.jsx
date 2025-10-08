import { Task } from "./index";

export default { component: Task };

export const Default = {
  args: {
    taskName: "タスクを入力",
    defaultIsEditing: false,
    onTaskNameChange: (taskName) => {
      console.log("task name changed: <" + taskName + ">");
    },
    onTaskComplete: () => {
      console.log("task complete");
    },
  },
};
