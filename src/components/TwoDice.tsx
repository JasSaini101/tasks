import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeft] = useState<number>(1);
    const [rightDie, setRight] = useState<number>(2);

    function rollLeft(): void {
        setLeft(d6());
    }

    function rollRight(): void {
        setRight(d6());
    }

    return (
        <div>
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
            <span data-testID="left-die">Left Die: {leftDie}</span>
            <span data-testID="right-die">Right Die: {rightDie}</span>
            <div>
                {leftDie !== rightDie ? (
                    <span>No Result</span>
                ) : leftDie === 1 ? (
                    <span>Lose</span>
                ) : (
                    <span>Win</span>
                )}
            </div>
        </div>
    );
}
