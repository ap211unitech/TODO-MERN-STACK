import React from 'react';
import {
    Jumbotron
} from "reactstrap";

function Footer() {
    return (
        <Jumbotron style={{ marginBottom: "-120px", height: '170px' }} className="mt-5" >
            <div className="d-flex justify-content-around">
                <div>
                    <span className="text-muted"> All Rights Reserved | © 2020-2021 | <a href="/">TODO APP</a>.</span>
                </div>
                <div className="d-flex flex-column">
                    <h4>Contact</h4>
                    <a href="mailto:porwal.1@iitj.ac.in">Email</a>
                    <a href="tel:+9520515708">Phone</a>
                </div>
            </div>
        </Jumbotron>
    )
}

export default Footer
