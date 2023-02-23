import React, { useState } from "react";
import style from "./styles.module.css";

type Props = {
    word: string;
    guessedLetters: string[];
};

const index = ({ guessedLetters, word }: Props) => {
    return (
        <div className={style.container}>
            {word.split("").map((letter, index) => (
                <span className={style.letter} key={index}>
                    <span
                        style={{
                            visibility: guessedLetters.includes(letter)
                                ? "visible"
                                : "hidden",
                        }}
                    >
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    );
};

export default index;
