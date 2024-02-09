import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1 style={{ backgroundColor: "red" }}>This is my header</h1>
            <img
                src="./assets/eaglesLogo.png"
                alt="Phladelphia Eagles Logo"
            ></img>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: 100,
                                height: 200,
                                backgroundColor: "red"
                            }}
                        >
                            <p>Task One and Two (Below)</p>
                            <p>Hello World</p>
                            <p>Jasnoor Saini (Jas)</p>
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: 100,
                                height: 300,
                                backgroundColor: "red"
                            }}
                        >
                            <p>Some of Task Three (Below)</p>
                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>
                            <ul>
                                <li>Thing One</li>
                                <li>Thing Two</li>
                                <li>Atleast Three</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
