import React from 'react';
import Webs from './WebsComponent-func';
// import Webs from './WebsComponent';
import WebDetails from './WebDetailsComponent-func';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
// import WebDetails from './WebDetailsComponent';
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
        <Header />
        <Webs webs = {this.state.webs} onClick={(webId) => this.onWebSelect(webId)}/>
        <WebDetails 
            selectedWeb = {this.state.webs.filter((web) => web.id === this.state.selectedWeb)[0]} />
        <Footer />
      </div>
    )
  }
}

export default Main;
