import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { EditButton } from "../../Atoms/EditButton/index";
import { Checkbox } from "../../Atoms/Checkbox/index";
import { Input } from "../../Atoms/Input/index";
import COLOR from "../../../variables/color";

export const Task = ({onTaskNameChange, onTaskComplete, taskName, defaultIsEditing} ) => {
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
        <StyledCheckboxWrapper><Checkbox onClick = {onTaskComplete}/></StyledCheckboxWrapper>
        {isEditing
        ? <Input onEditComplete = {onEditComplete} defaultValue = {taskName}/>
        : <StyledNameAndButtonWrapper>
            <StyledTaskName>{taskName}</StyledTaskName>
            <StyledEditButtonWrapper>
                <EditButton onClick = {onEditButtonClick}/>
            </StyledEditButtonWrapper>
          </StyledNameAndButtonWrapper>
        }
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
`;

const StyledCheckboxWrapper = styled.div`
`;

const StyledNameAndButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
`; 

const StyledTaskName = styled.div`
    color: ${COLOR.LIGHT_GRAY};
    position: relative;
    top: -1.5px;
`;

const StyledEditButtonWrapper = styled.div`
    margin-left: auto;
    position: relative;
    /* top: 2px; */
`;