import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [isStudent, setisStudent] = useState<boolean>(true);
    const [studentName, setStudentName] = useState<string>("Your Name");

    function updateEditMode() {
        setEditMode(!editMode);
    }

    function updateisStudent() {
        setisStudent(!isStudent);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setStudentName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="switch-mode"
                label="Edit?"
                checked={editMode}
                onChange={updateEditMode}
            />
            {editMode && (
                <>
                    <Form.Check
                        type="checkbox"
                        id="is-checkbox"
                        label="student?"
                        checked={isStudent}
                        onChange={updateisStudent}
                    />
                    <Form.Group controlId="studentName">
                        <Form.Control
                            value={studentName}
                            onChange={updateName}
                        />
                    </Form.Group>
                </>
            )}
            <div>
                {studentName} is {isStudent ? "a student" : "not a student"}
            </div>
        </div>
    );
}
