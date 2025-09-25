import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";

export const Input = ({defaultValue, onEditComplete}) => {
    const inputRef = useRef(null);
    // const [defaultValue, setDefaultValue] = useState("");

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
    border-radius: 3px;
    background-color: ${COLOR.BLACK};
    width: 100%;
    box-sizing: border-box;
    curso: pointer;
    outline: none;
    border: none;
    color: ${COLOR.WHITE};
`;