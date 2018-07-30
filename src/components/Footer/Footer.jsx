import React from 'react';

import './Footer.css'

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
      <div className="footer">
         <div className="footer__subchild">
           <div>Terms</div>
           <div>Imprint</div>
           <div>Privacy</div>
         </div>
         <div className="footer__logo">
         </div>
      </div>
    );
  }
}