import React from 'react';
// import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Webs from './components/WebsComponent';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Random Websites</NavbarBrand>
          </div>
        </Navbar>
        <Webs/>
      </div>
    )
  }
}

export default App;
