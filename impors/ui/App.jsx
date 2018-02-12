import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";

import Player from '../ui/Player';
import TeamList from '../ui/Team-list';
import TeamStats from '../ui/Team-stats';

const App = () => (
    <MuiThemeProvider>
        <div className="container">
            <AppBar 
                title="Meteor App"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                showMenuIconButton={false}
            />
            <div className="row">
                <div className="col s12 m7"><Player /></div>
                <div className="col s12 m5"><TeamStats /></div>
                <div className="col s12 m5"><TeamList /></div>
            </div>
        </div>
    </MuiThemeProvider>
)

export default App;