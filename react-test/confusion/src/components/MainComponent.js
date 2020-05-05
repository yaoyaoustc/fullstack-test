import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Webs from './WebsComponent';
import WebDetails from './WebDetailsComponent';
import { WEBS } from '../shared/webs';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      webs: WEBS,
      selectedWeb: null
    };
  }

  onWebSelect(webId) {
    this.setState({ selectedWeb: webId});
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Random Websites</NavbarBrand>
          </div>
        </Navbar>
        <Webs webs = {this.state.webs} onClick={(webId) => this.onWebSelect(webId)}/>
        <WebDetails 
            selectedWeb = {this.state.webs.filter((web) => web.id === this.state.selectedWeb)[0]} />
      </div>
    )
  }
}

export default Main;
