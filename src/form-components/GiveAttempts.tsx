import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(0);

    function updateAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        setAttemptsRequested(Number(event.target.value));
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="attemptsLeft">
                <Form.Label>How many attempts do you want?</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={updateAttempts}
                />
            </Form.Group>
            <div>
                <button
                    onClick={() =>
                        setAttemptsLeft(attemptsRequested + attemptsLeft)
                    }
                    disabled={attemptsRequested === 0}
                >
                    gain
                </button>
                <div>Attempts Left: {attemptsLeft}</div>
            </div>
            <div>
                <button
                    onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                    disabled={attemptsLeft === 0}
                >
                    use
                </button>
            </div>
        </div>
    );
}
