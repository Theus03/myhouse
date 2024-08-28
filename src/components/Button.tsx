'use client';

import React from "react";
import { toast } from "react-hot-toast";

type ButtonProps = {
    _type: String,
    _textButton: String,
    _msgButton: String
}

export default function Button({ _type, _textButton, _msgButton } : ButtonProps) {

    const handleClickButton = (_msgButton: String, e: React.MouseEvent) => {
        toast.success(`${_msgButton.toString()}`);
    }

    return (
        <div className="container-button">
            <button className={'btn ' + (_type == "outline" ? "outline" : "solid")} type="button" onClick={(e) => handleClickButton(`${_msgButton}`, e)} >{_textButton}</button>
        </div>
    )
}