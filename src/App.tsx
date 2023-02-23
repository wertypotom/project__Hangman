import { useState } from "react";
import words from "./wordList.json";
import style from "./App.module.css";
import HangmanPicture from "./components/HangmanPicture";
import HangmanWord from "./components/HangmanWord";
import KeyBoard from "./components/KeyBoard";

function App() {
    const [wordToGuess, setWordToGuess] = useState<string>(
        () => words[Math.floor(Math.random() * words.length)]
    );
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    return (
        <div className={style.container}>
            <div className={style.responseText}>
                Nice Try - Refresh to Try Again
            </div>
            <HangmanPicture />
            <HangmanWord />
            <KeyBoard />
        </div>
    );
}

export default App;
