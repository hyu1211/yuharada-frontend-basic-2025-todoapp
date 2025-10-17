import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { AddTaskButton } from "../../Atoms/AddTaskButton";
import { Task } from "../../Molecules/Task";
import COLOR from "../../../variables/color";

export const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);

  const onAddTaskButtonClick = () => {
    setTaskList([...taskList, { name: "", initializing: true }]);
  };

  const onTaskComplete = (index) => {
    setTaskList(taskList.filter((task, taskIndex) => taskIndex !== index));
  };

  const onTaskNameChange = (value, index) => {
    if (!value) {
      setTaskList(taskList.filter((task, taskIndex) => taskIndex !== index));
    } else {
      setTaskList(
        taskList.map((task, taskIndex) => {
          if (taskIndex === index) return { name: value, initializing: false };
          else return task;
        })
      );
    }
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList.map((task, index) => (
          <Task
            //引数を指定して関数を渡したいときは、アロー関数でラップして渡す
            //myFunc={myFunk(arg)}とするとレンダリング時に即実行されてしまう
            key={index}
            onTaskNameChange={(value) => onTaskNameChange(value, index)}
            onTaskComplete={() => onTaskComplete(index)}
            taskName={task.name}
            defaultIsEditing={task.initializing}
          />
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background-color: ${COLOR.LIGHT_BLACK};
  border-radius: 8px;
  padding: 20px;
  margin: 0 auto;
`;

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 10px;
`;
