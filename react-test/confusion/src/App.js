import React from 'react';
// import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Webs from './components/WebsComponent';
import './App.css';
import { WEBS } from './shared/webs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      webs: WEBS
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Random Websites</NavbarBrand>
          </div>
        </Navbar>
        <Webs webs = {this.state.webs} />
      </div>
    )
  }
}

export default App;
