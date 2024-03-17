import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col, Button, InputGroup, FormControl, ListGroup } from "react-bootstrap";

const Home = () => {
    const [userInput, setUserInput] = useState("");
    const [list, setList] = useState([]);

    const updateInput = (value) => {
        setUserInput(value);
    };

    const addItem = () => {
        if (userInput.trim() !== "") {
            const newUserInput = {
                id: Math.random(),
                value: userInput,
            };
            setList([...list, newUserInput]);
            setUserInput("");
        }
    };

    const deleteItem = (key) => {
        const updatedList = list.filter((item) => item.id !== key);
        setList(updatedList);
    };

    const editItem = (index) => {
        const editedTodo = prompt("Edit the todo:");
        if (editedTodo !== null && editedTodo.trim() !== "") {
            const updatedTodos = [...list];
            updatedTodos[index].value = editedTodo;
            setList(updatedTodos);
        }
    };

    return (
        <Container>
            <Row
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "3rem",
                    fontWeight: "bolder",
                }}
            >
                My TODO LIST
            </Row>
            <hr />
            <Row>
                <Col className="d-flex  " md={{ span: 5, offset: 4 }}>
                    <InputGroup className="d-flex mb-3">
                        <FormControl
                            placeholder="add item . . . "
                            size="lg"
                            value={userInput}
                            onChange={(e) => updateInput(e.target.value)}
                            aria-label="add something"
                        // aria-describedby="basic-addon2"
                        />

                        <InputGroup>
                            <Button variant="dark" className="my-2" onClick={addItem}>
                                ADD
                            </Button>
                        </InputGroup>
                    </InputGroup>
                </Col>
            </Row>
            <Row style={{

            }}>
                <Col style={{
                    background: "green"
                }} md={{ span: 5, offset: 4 }}>
                    <ListGroup
                    >
                        {list.map((item, index) => (
                            <div key={index}>
                                <ListGroup.Item
                                    variant=""
                                    action
                                    style={{ display: "flex", justifyContent: "space-between" }}
                                >
                                    {item.value}
                                    <div>
                                        <Button
                                            style={{ marginRight: "10px" }}
                                            variant="danger"
                                            onClick={() => deleteItem(item.id)}
                                        >
                                            Delete
                                        </Button>
                                        <Button variant="primary" onClick={() => editItem(index)}>
                                            Edit
                                        </Button>
                                    </div>
                                </ListGroup.Item>
                            </div>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
