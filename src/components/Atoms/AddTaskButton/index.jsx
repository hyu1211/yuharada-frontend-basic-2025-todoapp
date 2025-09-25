import React from "react";
import plus from "../../../assets/svg/plus.svg"
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import { HOVER_OPACITY } from "../../../variables/hover";
import { HOVER_TRANSITION } from "../../../variables/hover";
import IMAGE_SIZE from "../../../variables/image";

export const AddTaskButton = ({onClick}) => {
    return (
        <Button onClick={onClick}>
            <PlusButtonImage src={plus}/><AddTaskText>タスクを追加</AddTaskText>
        </Button>
    );
};

const PlusButtonImage = styled.img`
    height: ${IMAGE_SIZE.NORMAL};
    width: ${IMAGE_SIZE.NORMAL};
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
    gap: 10px; //要素間の余白（基本単位にするなら定数を設定）
    padding: 2px 4px; //要素を整えるための微調整
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;

&::before {
    content: '';
    position: absolute;
    //ホバー背景の微調整
    top: -2px;
    left: -4px;
    right: -4px;
    bottom: -2px;
    
    border-radius: 9999px; //カプセル型にするための数値
    background-color: ${COLOR.GREEN};
    
    transform: scale(0);
    opacity: 0;
    z-index: 0;
    
    transition: transform ${HOVER_TRANSITION.FAST} ease, opacity ${HOVER_TRANSITION.FAST} ease;
}

&:hover::before {
    transform: scale(1);
    opacity: ${HOVER_OPACITY.LOW};
}
`;