import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const App = () => (
    <MuiThemeProvider>
        <RaisedButton label="click" />
    </MuiThemeProvider>
)

export default App;