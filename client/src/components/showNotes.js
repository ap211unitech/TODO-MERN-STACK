import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    Container,
    Button
} from "reactstrap";
// import {
//     CSSTransition,
//     TransitionGroup
// } from "react-transition-group";

function ShowNotes() {

    let notes = [
        { id: uuidv4(), title: "First Note", content: "First Note Content First Note Content First Note Content First Note Content First Note Content First Note Content" },
        { id: uuidv4(), title: "Second Note", content: "Second Note Content First Note Content First Note Content First Note Content First Note Content First Note Content" },
        { id: uuidv4(), title: "Third Note", content: "First Note Content First Note Content First Note Content First Note Content First Note Content First Note Content" },
        { id: uuidv4(), title: "Fourth Note", content: "Second Note Content First Note Content First Note Content First Note Content First Note Content First Note Content" },
        { id: uuidv4(), title: "Fifth Note", content: "First Note Content First Note Content First Note Content First Note Content First Note Content First Note Content" },
        { id: uuidv4(), title: "Sixth Note", content: "Second Note Content First Note Content First Note Content First Note Content First Note Content First Note Content" },
    ]
    const [AllNotes, setallNotes] = useState(notes);

    const newNotes = (id) => {
        let currentNotes = [];
        AllNotes.map(note => {
            if (note.id !== id) {
                currentNotes.push(note);
            }
            return null;
        });
        setallNotes(currentNotes)
    }

    return (
        <Container>
            <Card className="mt-5 p-4">
                <h2>Your Notes</h2>
                {/* <TransitionGroup className="todos-items"> */}
                <div className="d-flex flex-wrap align-items-center">
                    {AllNotes.map(note => {
                        return (
                            // <CSSTransition timeout={500} key={note.id.toString()} classNames="fade">
                            <Card key={note.id.toString()} style={{ width: "20.56rem" }} className="mr-4 mb-3 mt-3">
                                <CardBody>
                                    <CardTitle>
                                        <h3>
                                            {note.title}
                                        </h3>
                                    </CardTitle>
                                    <CardText>
                                        {note.content}
                                    </CardText>
                                    <Button
                                        onClick={() => newNotes(note.id)}
                                        className="btn btn-md"
                                        color="danger"
                                        style={{ width: "115px" }}>
                                        Delete Note
                                    </Button>
                                </CardBody>
                            </Card>
                            /* </CSSTransition> */
                        )
                    })}
                </div>
                {/* </TransitionGroup> */}
            </Card>
        </Container>
    )
}

export default ShowNotes
