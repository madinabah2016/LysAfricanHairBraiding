import React, {Component, useState}from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,

} from 'reactstrap';

import {NavLink} from 'react-router-dom';


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div>
                <Navbar color="white" light expand="md"> 
                    <NavbarBrand href="/" className="mr-auto" style={{marginLeft:'8%'}}>Ly's African Hair Braiding</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse isOpen={!this.state.collapsed} navbar='true'>
                        <Nav navbar className="ml-auto" style={{marginRight:'8%'}}>
                            
                            <NavItem>
                                <NavLink  to='/home' style={{marginRight:'15px', color:'black'}} activeStyle={{color:'#035B57', borderBottom:'1px solid #035B57', paddingBottom:'3px'}}>Home</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink  to='/about' style={{marginRight:'15px', color:'black'}} activeStyle={{color:'#035B57', borderBottom:'1px solid #035B57', paddingBottom:'3px'}}>About</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink  to='/hairStyles' style={{color:'black'}} activeStyle={{color:'#035B57', borderBottom:'1px solid #035B57', paddingBottom:'3px'}}>Gallery</NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;