import React, {Component} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Navigation.css';
import firebase from 'firebase'
import {Link} from 'react-router-dom';

export default class Navigation extends Component {
    toggle = this.toggle.bind(this);
    state = {
      isOpen: false
    };
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Call Complain</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    View Complaint History
                  </DropdownItem>
                  <Link to="/profile">
                    <DropdownItem>
                      Edit Profile
                    </DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => firebase.auth().signOut()}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}