import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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
import './navigation.css'

import SignOutButton from '../SignOut/signout.js';
import * as ROUTES from '../constants/routes.js';
import { AuthUserContext } from '../Session/session.js';




const Navigation = () => (
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  );
  
  class NavigationAuth extends Component {
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
        <Navbar light expand="md">
          
          <NavbarBrand href="/home"><i>Griipe</i></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                <Link to="/profile">
                  <DropdownItem>
                    View Complaint History
                  </DropdownItem>
                  </Link>
                  <Link to="/edit-profile">
                    <DropdownItem>
                      Edit Profile
                    </DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <DropdownItem>
                    <SignOutButton />
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

const NavigationNonAuth = () => {
  return (
    <div>
      <Navbar color="light" light expand="md" className="navbar">
        <NavbarBrand href="/"><i>Griipe</i></NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;