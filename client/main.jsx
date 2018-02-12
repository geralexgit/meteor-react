import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from '../impors/ui/App';
injectTapEventPlugin();

Meteor.startup(() => {
    render(<App />, document.getElementById('app'))
});