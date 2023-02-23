import React from "react";
import style from "./styles.module.css";

type Props = {};

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

const index = (props: Props) => {
    return (
        <div className={style.container}>
            {KEYS.map((item) => (
                <button className={style.letter} key={item}>
                    {item}
                </button>
            ))}
        </div>
    );
};

export default index;
