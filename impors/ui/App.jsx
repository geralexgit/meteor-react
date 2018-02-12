import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";

import Player from '../ui/Player';
import TeamList from '../ui/Team-list';
import TeamStats from '../ui/Team-stats';

class App extends Component {
  getPlayers() {
    return [
      {
        _id: 1,
        ballManipulation: 2,
        DualTackling: 5,
        fieldCoverage: 2,
        gameStrategy: 5,
        kickingAbilities: 3,
        name: "Fill Murrae",
        passingAbilities: 1,
        playmakingRisks: 1
      }, {
        _id: 2,
        ballManipulation: 2,
        DualTackling: 5,
        fieldCoverage: 2,
        gameStrategy: 5,
        kickingAbilities: 3,
        name: "Jimmy Hendrix",
        passingAbilities: 1,
        playmakingRisks: 1
      }, {
        _id: 3,
        ballManipulation: 2,
        DualTackling: 5,
        fieldCoverage: 2,
        gameStrategy: 5,
        kickingAbilities: 3,
        name: "Dinald Drumb",
        passingAbilities: 1,
        playmakingRisks: 1
      }
    ];
  };
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Meteor App"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false} />
          <div className="row">
            <div className="col s12 m7"><Player /></div>
            <div className="col s12 m5"><TeamStats /></div>
            <div className="col s12 m5"><TeamList /></div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;