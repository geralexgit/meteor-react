import React from 'react';
import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';

const TeamList = (props) => (
  <ListItem 
  primaryText={props.player.name} 
  leftAvatar={< Avatar  src="http://www.fillmurray.com/g/300/300"/>} />
)

export default TeamList;