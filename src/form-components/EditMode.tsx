import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [isStudent, setisStudent] = useState<boolean>(true);
    const [studentName, setStudentName] = useState<string>("Your Name");

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(!editMode);
    }

    function updateisStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setisStudent(!isStudent);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Switch
                type="switch"
                id="switch-mode"
                label="Edit?"
                checked={editMode}
                onChange={updateEditMode}
            />
            <Form.Check
                type="checkbox"
                id="is-checkbox"
                label="student?"
                checked={isStudent}
                onChange={updateisStudent}
            />
            <div>
                {studentName} is {isStudent ? "a student" : "not a student"}
            </div>
        </div>
    );
}
