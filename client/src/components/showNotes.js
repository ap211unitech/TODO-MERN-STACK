import React, { useEffect } from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    Container,
    Button,
    Alert
} from "reactstrap";
import { connect } from "react-redux";
import { getItems, DeleteItem } from "../flux/actions/TodoAction";

const ShowNotes = ({ getItems, DeleteItem, isAuthenticated, msg, todo }) => {

    useEffect(() => {
        getItems();
    }, [isAuthenticated])



    const { items } = todo;

    return (
        < Container >
            {isAuthenticated && msg ?
                <Alert color="danger" className="mt-2">
                    {msg}
                </Alert> : null}
            {isAuthenticated ?
                <Card className="mt-5 p-4">
                    <h2>Your Notes</h2>
                    <div className="d-flex flex-wrap align-items-center">
                        {items.length === 0 ?
                            <p style={{ fontWeight: "bold" }}>
                                Nothing to show here, Add Your Notes from Above Section
                                </p>
                            :
                            items.map(note => {
                                return (
                                    <Card key={note._id} style={{ width: "20.56rem" }} className="mr-4 mb-3 mt-3 note-height">
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
                                                onClick={() => DeleteItem(note._id)}
                                                className="btn btn-md mb-3"
                                                color="primary"
                                                style={{ width: "115px" }}>
                                                Delete Note
                                </Button>
                                        </CardBody>
                                    </Card>
                                )
                            })}
                    </div>
                </Card> :
                <div style={{ height: "62vh" }}>
                    <Alert color="warning">
                        Login / Register to get your Notes
                    </Alert>
                </div>
            }
        </Container >
    )
}


const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    msg: state.error.msg.msg,
    todo: state.todo
})

export default connect(mapStateToProps, { getItems, DeleteItem })(ShowNotes);



