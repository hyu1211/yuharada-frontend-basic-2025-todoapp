import React from "react";
import check from "../../../assets/svg/check.svg";
import COLOR from "../../../variables/color";
import styled from "styled-components";

export const Checkbox = ({ onClick }) => {
  return (
    //親コンポーネントのjsxでもonClick={}としているが、ただのprops名として扱われる
    //DOM要素でのみonClickがイベントハンドラとして扱われる
    <CheckboxButton onClick={onClick}>
      <CheckboxImage src={check} />
    </CheckboxButton>
  );
};

const CheckboxImage = styled.img`
  width: 16px;
  height: 16px;
  opacity: 0;

  transition: opacity 0.15 ease;
`;

const CheckboxButton = styled.button`
  width: 20px;
  height: 20px;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 10%;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover ${CheckboxImage} {
    opacity: 1;
  }
`;
