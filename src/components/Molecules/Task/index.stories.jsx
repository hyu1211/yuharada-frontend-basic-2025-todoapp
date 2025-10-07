import { Task } from "./index";

export default {component: Task};

export const Default = {
    args: {
        taskName: "タスクを入力",
        defaultIsEditing: false,
        onTaskComplete: (taskName) => {
        console.log("task name changed: <" + taskName +">")
        },
    },
};