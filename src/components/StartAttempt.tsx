import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import internal from "stream";

export function StartAttempt(): JSX.Element {
    const [progress, setProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function startQuiz(): void {
        setProgress(true);
        setAttempts(attempts - 1);
    }

    function stopQuiz(): void {
        setProgress(false);
    }

    function addAttempt(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <Button onClick={startQuiz} disabled={progress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={addAttempt} disabled={progress}>
                Mulligan
            </Button>
            <span>Attempts Left: {attempts}</span>
        </div>
    );
}
