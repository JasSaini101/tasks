import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "black",
    "brown"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="color">
                {COLORS.map((colorOption) => (
                    <Form.Check
                        key={colorOption}
                        inline
                        type="radio"
                        id={`color-${colorOption}`}
                        name="colors"
                        label={
                            <span style={{ backgroundColor: colorOption }}>
                                {colorOption}
                            </span>
                        }
                        value={colorOption}
                        checked={color === colorOption}
                        onChange={updateColor}
                    />
                ))}
            </Form.Group>
            <div>
                The chosen color is{" "}
                <span
                    data-testID="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
            </div>
        </div>
    );
}
