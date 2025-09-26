import React from "react";
import plus from "../../../assets/svg/plus.svg"
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

export const AddTaskButton = ({onClick}) => {
    return (
        <Button onClick={onClick}>
            <PlusButtonImage src={plus}/><AddTaskText>タスクを追加</AddTaskText>
        </Button>
    );
};

const PlusButtonImage = styled.img`
    height: 20px;
    width: 20px;
    display: block;
    position: relative;
    z-index: 1;
`;

const AddTaskText = styled.span`
    ${TEXT.S}
    color: ${COLOR.GREEN};
    display: block;
    position: relative;
    z-index: 1;
`;

const Button = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px; 
    padding: 2px 4px; 
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;

&::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -4px;
    right: -4px;
    bottom: -2px;
    
    border-radius: 9999px;
    background-color: ${COLOR.GREEN};
    
    transform: scale(0);
    opacity: 0;
    z-index: 0;
    
    transition: transform 0.05s ease, opacity 0.05s ease;
}

&:hover::before {
    transform: scale(1);
    opacity: 0.15;
}
`;