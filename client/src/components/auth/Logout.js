import React, { Component } from 'react'
import { connect } from "react-redux";
import { logout } from "../../flux/actions/authAction";
import {
    NavLink,
    NavItem
} from "reactstrap";
import PropTypes from "prop-types";


class Logout extends Component {
    
    static propTypes = {
        logout: PropTypes.func.isRequired
    }

    render() {
        return (
            <React.Fragment>
                <NavItem>
                    <NavLink onClick={this.props.logout} href="#">
                        Logout
                    </NavLink>
                </NavItem>
            </React.Fragment>
        )
    }
}


export default connect(null, { logout })(Logout);