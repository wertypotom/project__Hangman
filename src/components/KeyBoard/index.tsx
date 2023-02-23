import React from "react";
import { KEYS } from "../../conts";
import style from "./styles.module.css";

type Props = {
    selectLetter: (letter: string) => void;
    guessedLetters: string[];
    wordToGuess: string;
    wrongAttempt: number;
    correctAttempt: number;
};

const index = ({
    selectLetter,
    guessedLetters,
    wordToGuess,
    wrongAttempt,
    correctAttempt,
}: Props) => {
    const getLetterStyle = (letter: string) => {
        if (
            // если текущую букву выбирали, но ее нет в самом слове
            guessedLetters.includes(letter) &&
            !wordToGuess.includes(letter)
        )
            return style.inactive;
        if (guessedLetters.includes(letter) && wordToGuess.includes(letter))
            return style.active;
    };

    return (
        <div className={style.container}>
            {KEYS.map((item) => (
                <button
                    disabled={
                        guessedLetters.includes(item) ||
                        wrongAttempt === 6 ||
                        correctAttempt ===
                            Array.from(new Set(wordToGuess)).length
                    }
                    onClick={() => selectLetter(item)}
                    className={`${style.letter} ${getLetterStyle(item)}`}
                    key={item}
                >
                    {item}
                </button>
            ))}
        </div>
    );
};

export default index;
