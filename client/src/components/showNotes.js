import React, { useContext } from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    Container,
    Button
} from "reactstrap";
import { GlobalContext } from "../context/store";

function ShowNotes() {

    const { allNotes, deleteItem } = useContext(GlobalContext);

    return (
        <Container>
            <Card className="mt-5 p-4">
                <h2>Your Notes</h2>
                <div className="d-flex flex-wrap align-items-center">
                    {allNotes.map(note => {
                        return (
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
                                        onClick={() => deleteItem(note.id)}
                                        className="btn btn-md"
                                        color="danger"
                                        style={{ width: "115px" }}>
                                        Delete Note
                                    </Button>
                                </CardBody>
                            </Card>
                        )
                    })}
                </div>
            </Card>
        </Container>
    )
}

export default ShowNotes;