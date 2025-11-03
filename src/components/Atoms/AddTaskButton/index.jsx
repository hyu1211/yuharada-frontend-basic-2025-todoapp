import React from "react";
import plus from "../../../assets/svg/plus.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

export const AddTaskButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <PlusButtonImage src={plus} />
      <AddTaskText>タスクを追加</AddTaskText>
    </Button>
  );
};

const PlusButtonImage = styled.img`
  height: 20px;
  width: 20px;
  display: block;
`;

const AddTaskText = styled.span`
  ${TEXT.S}
  color: ${COLOR.GREEN};
  display: block;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 6px 6px 0;
  border-radius: 9999px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;

  transition: background-color 0.1s ease;

  &:hover {
    background-color: ${COLOR.GREEN_TRANSLUCENT};
  }
`;
