import { useState } from "react";
import { words } from "./conts";
import style from "./App.module.css";
import HangmanPicture from "./components/HangmanPicture";
import HangmanWord from "./components/HangmanWord";
import KeyBoard from "./components/KeyBoard";

function App() {
    const [wordToGuess, setWordToGuess] = useState<string>(
        () => words[Math.floor(Math.random() * words.length)]
    );
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [wrongAttempt, setWrongAtempt] = useState<number>(0);
    const [correctAttempt, setCorrectAtempt] = useState<number>(0);

    const addLetter = (letter: string) => {
        setGuessedLetters([...guessedLetters, letter]);

        if (!wordToGuess.includes(letter)) {
            setWrongAtempt((prev) => prev + 1);
        } else {
            setCorrectAtempt((prev) => prev + 1);
        }
    };

    return (
        <div className={style.container}>
            {wrongAttempt === 6 && (
                <div className={style.responseText}>
                    Correct word was{" "}
                    <span className={style.wordToGuess}>{wordToGuess}</span>.
                    Refresh to Try Again
                </div>
            )}
            {correctAttempt === Array.from(new Set(wordToGuess)).length && (
                <div className={style.responseText}>
                    Congrats on winning !!! Refresh to Try Again
                </div>
            )}
            <HangmanPicture wrongAttempt={wrongAttempt} />
            <HangmanWord word={wordToGuess} guessedLetters={guessedLetters} />
            <KeyBoard
                selectLetter={addLetter}
                guessedLetters={guessedLetters}
                wordToGuess={wordToGuess}
                wrongAttempt={wrongAttempt}
                correctAttempt={correctAttempt}
            />
        </div>
    );
}

export default App;
