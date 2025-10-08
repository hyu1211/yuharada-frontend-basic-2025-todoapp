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
      <StyledCheckboxWrapper>
        <Checkbox onClick={onTaskComplete} />
      </StyledCheckboxWrapper>
      {isEditing ? (
        <Input onEditComplete={onEditComplete} defaultValue={taskName} />
      ) : (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <StyledEditButtonWrapper>
            <EditButton onClick={onEditButtonClick} />
          </StyledEditButtonWrapper>
        </StyledNameAndButtonWrapper>
      )}
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

const StyledCheckboxWrapper = styled.div`
  flex-shrink: 0;
`;

const StyledNameAndButtonWrapper = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  flex: 1;
  min-height: 20px;
`;

const StyledTaskName = styled.div`
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S};
  padding: 0 4px;
  flex: 1;
`;

const StyledEditButtonWrapper = styled.div`
  margin-left: auto;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;
