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
      <StyledAddButtonRow>
        <AddTaskButton onClick={onAddTaskButtonClick} />
      </StyledAddButtonRow>
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
  border-radius: 4px;
  padding: 15px 15px 15px;
  margin: 0;
  width: auto;
`;

const StyledAddButtonRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0 4px;
  box-sizing: border-box;
`;

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 1px 0 0 0;
`;
