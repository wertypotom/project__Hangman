import React from "react";
import style from "./styles.module.css";

type Props = {
    wrongAttempt: number;
};

const HEAD = <div className={style.head}></div>;
const BODY = <div className={style.body}></div>;
const LEFTARM = <div className={style.leftArm}></div>;
const RIGHTARM = <div className={style.rightArm}></div>;
const RIGHTLEG = <div className={style.rightLeg}></div>;
const LEFTLEG = <div className={style.leftLeg}></div>;

const index = ({ wrongAttempt }: Props) => {
    const bodyParts = [HEAD, BODY, LEFTARM, RIGHTARM, LEFTLEG, RIGHTLEG];

    return (
        <div className={style.container}>
            {bodyParts.map((part, index) => {
                if (index < wrongAttempt)
                    return <React.Fragment key={index}>{part}</React.Fragment>;
            })}
            <div className={style.hangLine}></div>
            <div className={style.upperLine}></div>
            <div className={style.middleLine}></div>
            <div className={style.bottomLine}></div>
        </div>
    );
};

export default index;
