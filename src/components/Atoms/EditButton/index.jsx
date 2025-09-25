import React from "react";
import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color";
import { HOVER_OPACITY } from "../../../variables/hover";
import { HOVER_TRANSITION } from "../../../variables/hover";
import IMAGE_SIZE from "../../../variables/image";

export const EditButton = ({onClick}) => {
    return (
    <Button onClick={onClick}>
        <PencilImage src={pencil}/>
    </Button>
    );
};

const PencilImage = styled.img`
    height: ${IMAGE_SIZE.NORMAL};
    width: ${IMAGE_SIZE.NORMAL};
    display: block;
    position: relative;
    z-index: 1;
`;

const Button = styled.button`
    position: relative;
    overflow: hidden;

    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;

&::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    
    
    width: ${IMAGE_SIZE.NORMAL};
    height: ${IMAGE_SIZE.NORMAL};
    border-radius: 50%;
    background-color: ${COLOR.WHITE};
    
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    z-index: 0;
    
    transition: transform ${HOVER_TRANSITION.FAST} ease, opacity ${HOVER_TRANSITION.FAST} ease;
}

&:hover::before {
    transform: translate(-50%, -50%) scale(1);
    opacity: ${HOVER_OPACITY.LOW};
}
`;
