import React, { useState } from 'react';
import {
    Card,
    Button,
    Container,
    Input,
} from "reactstrap";
import { AddItem } from "../flux/actions/TodoAction";
import { connect } from "react-redux";

function AddNote({ AddItem }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onSubmit = () => {
        // AddItem
        const note = {
            title,
            content
        }
        AddItem(note);
        setTitle('');
        setContent('');
    }

    return (
        <Container>
            <Card className="p-4">
                <h2>Add Your Notes Here</h2>
                <Input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Add Your Title Here" className="mt-3" type="text" style={{ maxWidth: "400px" }} />
                <Input value={content} onChange={(event) => setContent(event.target.value)} placeholder="Add Your Content Here" className="mt-3" type="textarea" style={{ height: "200px" }} />
                <Button type="submit" onClick={() => onSubmit()} color="primary" size="md" className="mt-3" style={{ maxWidth: "100px" }}>
                    Add Note
                </Button>
            </Card>
        </Container>
    )
}


const mapStateToProps = (state) => ({
    todo: state.todo
})

export default connect(mapStateToProps, { AddItem })(AddNote);
