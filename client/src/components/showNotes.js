import React, { Component } from 'react';
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
import PropTypes from "prop-types";


class ShowNotes extends Component {

    componentDidMount() {
        this.props.getItems();
    }


    render() {

        const { isAuthenticated } = this.props;
        const { items } = this.props.todo;
        const { msg } = this.props.error.msg;

        return (
            < Container >
                {isAuthenticated && msg ?
                    <Alert color="danger">
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
                                : null
                            }
                            {items.map(note => {
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
                                                onClick={() => this.props.DeleteItem(note._id)}
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
}

ShowNotes.propTypes = {
    getItems: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired,
    DeleteItem: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    todo: state.todo,
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(mapStateToProps, { getItems, DeleteItem })(ShowNotes);



