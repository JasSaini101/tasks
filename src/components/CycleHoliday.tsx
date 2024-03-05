import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const Holiday: string[] = ["🎆", "❤️", "🎃", "🍀", "🦃"];
    //Alpha: H N S T V
    //Chron: N V S H T
    // New Years, Valentines, St Patricks, Halloween, Thanksgiving

    const alphabetical: Record<string, string> = {
        green: "yellow",
        yellow: "red",
        red: "green"
    };

    const chronological: Record<string, string> = {
        "🎆": "❤️",
        "❤️": "🍀",
        "🍀": "🎃"
        "🎃": "🦃"
        "🦃": "🎆"
    };


    return <div>Cycle Holiday</div>;
}
