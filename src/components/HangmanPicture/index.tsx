import React from "react";
import style from "./styles.module.css";

type Props = {};

const HEAD = <div className={style.head}></div>;
const BODY = <div className={style.body}></div>;
const LEFTARM = <div className={style.leftArm}></div>;
const RIGHTARM = <div className={style.rightArm}></div>;
const RIGHTLEG = <div className={style.rightLeg}></div>;
const LEFTLEG = <div className={style.leftLeg}></div>;

const index = (props: Props) => {
    return (
        <div className={style.container}>
            {HEAD}
            {BODY}
            {LEFTARM}
            {RIGHTARM}
            {LEFTLEG}
            {RIGHTLEG}
            <div className={style.hangLine}></div>
            <div className={style.upperLine}></div>
            <div className={style.middleLine}></div>
            <div className={style.bottomLine}></div>
        </div>
    );
};

export default index;
