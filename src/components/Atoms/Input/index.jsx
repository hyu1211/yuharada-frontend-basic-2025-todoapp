import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

export const Input = ({ defaultValue, onEditComplete }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleBlur = () => {
    if (inputRef.current) {
      onEditComplete?.(inputRef.current.value);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputRef.current) {
      onEditComplete?.(inputRef.current.value);
    }
  };

  return (
    <StyledInput
      ref={inputRef}
      defaultValue={defaultValue}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  );
};

const StyledInput = styled.input`
  flex: 1;
  ${TEXT.S}
  border-radius: 2px;
  color: ${COLOR.LIGHT_GRAY};
  background-color: ${COLOR.BLACK};
  padding: 2px 4px 0 4px;
  box-sizing: border-box;
  outline: none;
  border: none;
  margin: 0;
  height: 20px;
`;