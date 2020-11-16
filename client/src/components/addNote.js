import React from 'react';
import {
    Card,
    Button,
    Container,
    Input,
} from "reactstrap";

function addNote() {
    return (
        <Container>
            <Card className="p-4">
                <h2>Add Your Notes Here</h2>
                <Input placeholder="Add Your Title Here" className="mt-3" type="text" style={{ maxWidth: "400px" }} />
                <Input placeholder="Add Your Content Here" className="mt-3" type="textarea" style={{ height: "200px" }} />
                <Button color="primary" size="md" className="mt-3" style={{ maxWidth: "100px" }}>
                    Add Note
                </Button>
            </Card>
        </Container>
    )
}

export default addNote
