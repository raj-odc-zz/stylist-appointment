import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import './Header.css';

import ProgressBar from '../ProgressBar';

export default class Header extends React.Component {
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
        <Navbar color="dark" dark>
          <NavbarBrand href="/" className="logo-nav" />
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Deutschland</NavLink>
                <NavLink href="/">Germany</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <ProgressBar progressComplete={this.props.progressComplete}/>
      </div>
    );
  }
}