import React, { useState, useContext } from 'react';
import {
    Card,
    Button,
    Container,
    Input,
} from "reactstrap";
import { GlobalContext } from "../context/store"

function AddNote() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addItem } = useContext(GlobalContext);

    const onSubmit = () => {
        addItem(title, content);
    }

    return (
        <Container>
            <Card className="p-4">
                <h2>Add Your Notes Here</h2>
                <Input onChange={(event) => setTitle(event.target.value)} placeholder="Add Your Title Here" className="mt-3" type="text" style={{ maxWidth: "400px" }} />
                <Input onChange={(event) => setContent(event.target.value)} placeholder="Add Your Content Here" className="mt-3" type="textarea" style={{ height: "200px" }} />
                <Button type="submit" onClick={() => onSubmit()} color="primary" size="md" className="mt-3" style={{ maxWidth: "100px" }}>
                    Add Note
                </Button>
            </Card>
        </Container>
    )
}

export default AddNote
