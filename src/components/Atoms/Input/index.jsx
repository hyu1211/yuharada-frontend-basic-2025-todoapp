import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

export const Input = ({defaultValue, onEditComplete}) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current){
        inputRef.current.focus();
        }
    }, []);

    const handleBlur = () => {
        if (inputRef.current) {
            onEditComplete?.(inputRef.current.value); //onEditCompleteが渡されている時に実行
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
    width: 100%;
    ${Text.S}
    line-height: 20px;
    border-radius: 2px;
    color: ${COLOR.LIGHT_GRAY};
    background-color: ${COLOR.BLACK};
    padding: 0 4px;
    box-sizing: border-box;
    /* cursor: pointer; */
    outline: none;
    border: none;
`;