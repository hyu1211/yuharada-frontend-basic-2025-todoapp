import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { EditButton } from "../../Atoms/EditButton/index";
import { Checkbox } from "../../Atoms/Checkbox/index";
import { Input } from "../../Atoms/Input/index";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

export const Task = ({
  onTaskNameChange,
  onTaskComplete,
  taskName,
  defaultIsEditing,
}) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);

  const onEditComplete = (value) => {
    setIsEditing(false);
    onTaskNameChange(value);
  };

  const onEditButtonClick = () => {
    setIsEditing(true);
  };

  return (
    <StyledWrapper>
      <Checkbox onClick={onTaskComplete} />
      <StyledNameAndButtonWrapper>
        {isEditing ? (
          <Input onEditComplete={onEditComplete} defaultValue={taskName} />
        ) : (
          <>
            <StyledTaskName>{taskName}</StyledTaskName>
            <StyledEditButtonWrapper>
              <EditButton onClick={onEditButtonClick} />
            </StyledEditButtonWrapper>
          </>
        )}
      </StyledNameAndButtonWrapper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  gap: 10px;
`;

const StyledNameAndButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  height: 20px;
`;

const StyledTaskName = styled.div`
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S};
  padding: 0 4px;
  flex: 1;
  min-width: 0;
  height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const StyledEditButtonWrapper = styled.div`
  margin-left: auto;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;
