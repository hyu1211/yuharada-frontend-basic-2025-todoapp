import React from "react";
import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color";

export const EditButton = ({onClick}) => {
    return (
    <Button onClick={onClick}>
        <PencilImage src={pencil}/>
    </Button>
    );
};

const PencilImage = styled.img`
    height: 20px;
    width: 20px;
    display: block;
    position: relative;
    z-index: 1;
`;

const Button = styled.button`
    position: relative;
    overflow: hidden;

    padding: 0;
    /* border-radius: 50%; */
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;

&::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    
    
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${COLOR.WHITE};
    
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    z-index: 0;
    
    transition: transform 0.05s ease, opacity 0.05s ease;
}

&:hover::before {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.15;
}
`;