import React from "react";
import styled from "styled-components";
import { Title } from "../../Atoms/Title/index";
import { TodoCard } from "../../Organisms/TodoCard";

export const MainPage = () => {
  return (
    <StyledWrapper>
      <Title />
      <TodoCard />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;    
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin-top: 60px;
`;
