import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";
import {List} from "material-ui/List";
import Divider from "material-ui/Divider";

import Player from '../ui/Player';
import TeamList from '../ui/Team-list';
import TeamStats from '../ui/Team-stats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
    this.getPlayers = this.getPlayers.bind(this);
    this.renderPlayers = this.renderPlayers.bind(this);
  }
  componentWillMount() {
    const players = this.getPlayers()
    this.setState({players});
  }
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

  renderPlayers() {
    return this.state.players.map(player => (<TeamList key={player._id} player={player} />));
  }

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
            <div className="col s12 m5">
              <h4>Team List</h4>
              <Divider />
              <List>
                {this.renderPlayers()}
              </List>
              <Divider />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;