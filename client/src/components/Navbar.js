import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    NavbarText,
} from 'reactstrap';
import LoginModal from "./auth/LoginModal";
import RegisterModal from "./auth/RegisterModal";
import Logout from "./auth/Logout";
import { connect } from "react-redux";

function AppNavbar({ isAuthenticated, user }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">
                    TO-DO
                </NavbarBrand>

                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto ml-2 mr-2" navbar>

                        {isAuthenticated ?
                            <NavItem className="ml-2 mr-5">
                                <NavbarText style={{ fontSize: "18px", wordSpacing: "5px" }}>
                                    Welcome {user.name.split(" ")[0]}
                                </NavbarText>
                            </NavItem>
                            : null}

                        {!isAuthenticated ? <RegisterModal /> : null}
                        {!isAuthenticated ? <LoginModal /> : null}

                        <NavItem>
                            <NavLink href="https://github.com/ap211unitech/TODO-MERN-STACK" target="_blank">
                                Github Repo
                            </NavLink>
                        </NavItem>


                        {isAuthenticated ? <Logout /> : null}

                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}


const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});


export default connect(mapStateToProps, {})(AppNavbar);
