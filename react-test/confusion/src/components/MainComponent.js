import React from 'react';
import Webs from './WebsComponent-func';
// import Webs from './WebsComponent';
import WebDetails from './WebDetailsComponent-func';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
// import WebDetails from './WebDetailsComponent';
import { WEBS } from '../shared/webs';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      webs: WEBS,
      // selectedWeb: null
    };
  }

  // onWebSelect(webId) {
  //   this.setState({ selectedWeb: webId});
  // }

  render() {

    const HomePage = () => {
      return(
        <Home />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path = "/webs" component = {() => <Webs webs = {this.state.webs} />} />
          <Redirect to = "/home" />
        
        </Switch> 
        {/* <Webs webs = {this.state.webs} onClick={(webId) => this.onWebSelect(webId)}/> */}
        {/* <WebDetails  */}
            {/* selectedWeb = {this.state.webs.filter((web) => web.id === this.state.selectedWeb)[0]} /> */}
        <Footer />
      </div>
    )
  }
}

export default Main;
