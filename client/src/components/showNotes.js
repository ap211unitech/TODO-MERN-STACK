import React, { useEffect } from 'react';
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
import { connect } from "react-redux";
import { getTodos } from "../flux/actions/todoActions";


function ShowNotes() {

    useEffect(() => {
        getTodos();
    }, [getTodos])

    // const newNotes = (id) => {
    //     let currentNotes = [];
    //     AllNotes.map(note => {
    //         if (note.id !== id) {
    //             currentNotes.push(note);
    //         }
    //         return null;
    //     });
    //     setallNotes(currentNotes)
    // }


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

const mapStateToProps = (state) => ({
    AllNotes: state.notes
})

export default connect(mapStateToProps, { getTodos })(ShowNotes);
