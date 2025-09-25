import React from "react";
import check from "../../../assets/svg/check.svg";
import COLOR from "../../../variables/color";
import styled from "styled-components";
import { HOVER_OPACITY } from "../../../variables/hover";
import { HOVER_TRANSITION } from "../../../variables/hover";
import IMAGE_SIZE from "../../../variables/image";

export const Checkbox = ({onClick}) => {
    return (
        <CheckboxButton onClick = {onClick}>
            <CheckboxImage src = {check}/>
        </CheckboxButton>
    );
};

const CheckboxImage = styled.img`
    width: ${IMAGE_SIZE.SMALL};
    height: ${IMAGE_SIZE.SMALL};
    opacity: 0;

    transition: opacity ${HOVER_TRANSITION.FAST} ease;
`;

const CheckboxButton = styled.button`
    position: relative;
    width: ${IMAGE_SIZE.NORMAL};
    height: ${IMAGE_SIZE.NORMAL};
    border: 2px solid ${COLOR.LIGHT_GRAY};
    border-radius: 10%; //Checkboxの角の丸みの微調整
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