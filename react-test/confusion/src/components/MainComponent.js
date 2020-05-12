import React from 'react';
import Webs from './WebsComponent-func';
// import Webs from './WebsComponent';
import WebDetails from './WebDetailsComponent-func';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
// import WebDetails from './WebDetailsComponent';
import { WEBS } from '../shared/webs';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      webs: WEBS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      comments: COMMENTS
    };
  }

  render() {

    const HomePage = () => {
      return (
        <Home web={this.state.webs.filter((web) => web.featured)[0]}
          promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]} />
      );
    }

    const WebWithId = ({match}) => {
      return (
        <WebDetails web={this.state.webs.filter((web) => web.id === parseInt(match.params.webId,10))[0]}
                    comments={this.state.comments.filter((comment) => comment.webId === parseInt(match.params.webId,10))} />
      );
    }

    const AboutLeaders = () => {
      return (
        <About leaders={this.state.leaders} />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/webs" component={() => <Webs webs={this.state.webs} />} />
          <Route path="/webs/:webId" component={WebWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={AboutLeaders} />
          <Redirect to="/home" />

        </Switch>
        <Footer />
      </div >
    )
  }
}

export default Main;
