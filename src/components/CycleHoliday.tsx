import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [emoji, setEmoji] = useState<string>("🎆");
    //Alpha: H N S T V
    //Chron: N V S H T
    // New Years, Valentines, St Patricks, Halloween, Thanksgiving

    const alphabetical: Record<string, string> = {
        "🎃": "🎆",
        "🎆": "🍀",
        "🍀": "🦃",
        "🦃": "❤️",
        "❤️": "🎃"
    };

    const chronological: Record<string, string> = {
        "🎆": "❤️",
        "❤️": "🍀",
        "🍀": "🎃",
        "🎃": "🦃",
        "🦃": "🎆"
    };

    function byAlpha(): void {
        const newEmoji = alphabetical[emoji];
        setEmoji(newEmoji);
    }

    function byTime(): void {
        const newEmoji = chronological[emoji];
        setEmoji(newEmoji);
    }

    return (
        <div>
            <Button onClick={byAlpha}>Advance by Alphabet</Button>
            <Button onClick={byTime}>Advance by Year</Button>
            <span>Holiday: {emoji}</span>
        </div>
    );
}
