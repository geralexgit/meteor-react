import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import App from '../impors/ui/App';
import New from '../impors/ui/New';
import Lost from '../impors/ui/Lost';

injectTapEventPlugin();

Meteor.startup(() => {
  render((
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/new" component={New} />
        <Route component={Lost} />
      </Switch>
    </Router>
  ), document.getElementById('app'))
});