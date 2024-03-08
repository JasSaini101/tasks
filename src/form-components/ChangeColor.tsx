import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("black");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                id="red"
                label="Red"
                value="red"
                checked={color === "red"}
                onChange={updateColor}
            />
            <Form.Check
                inline
                type="radio"
                id="green"
                label="Green"
                value="green"
                checked={color === "green"}
                onChange={updateColor}
            />
            <Form.Check
                inline
                type="radio"
                id="blue"
                label="Blue"
                value="blue"
                checked={color === "blue"}
                onChange={updateColor}
            />
            <Form.Check
                inline
                type="radio"
                id="orange"
                label="Orange"
                value="orange"
                checked={color === "orange"}
                onChange={updateColor}
            />
            <Form.Check
                inline
                type="radio"
                id="pink"
                label="Pink"
                value="pink"
                checked={color === "pink"}
                onChange={updateColor}
            />
            <Form.Check
                inline
                type="radio"
                id="purple"
                label="Purple"
                value="purple"
                checked={color === "purple"}
                onChange={updateColor}
            />
            <Form.Check
                inline
                type="radio"
                id="white"
                label="White"
                value="white"
                checked={color === "white"}
                onChange={updateColor}
            />
            <Form.Check
                inline
                type="radio"
                id="brown"
                label="Brown"
                value="brown"
                checked={color === "brown"}
                onChange={updateColor}
            />
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                The chosen color is {color}
            </div>
        </div>
    );
}
