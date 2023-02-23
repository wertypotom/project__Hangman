import React from "react";
import style from "./styles.module.css";

type Props = {};

const index = (props: Props) => {
    const word = "test";
    const guesssedLetters = ["e", "t"];

    return (
        <div className={style.container}>
            {word.split("").map((letter, index) => (
                <span className={style.letter} key={index}>
                    <span
                        style={{
                            visibility: guesssedLetters.includes(letter)
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
