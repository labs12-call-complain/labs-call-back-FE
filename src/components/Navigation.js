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
import {Icon} from '@blueprintjs/core'
import {home, phone, comment, cog} from '@blueprintjs/icons'
import './Home.css';


//adding some changes
class Navigation extends React.Component {
    toggle = this.toggle.bind(this);
    state = {
        isOpen: false
    }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() {
        return (
            <div>
            <Navbar color="light" light expand="md" className='fixed-bottom navbar-dark bg-dark'>
                <Icon icon='home' color='red'/>
                <Icon icon='phone' color='red'/>
                <Icon icon='comment' color='red'/>
                <Icon icon='cog' color='red'/>
            </Navbar>
          </div>
          );
        }
}

export default Navigation;