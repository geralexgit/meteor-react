import React from 'react';
import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';

const TeamList = (props) => (
  <ListItem
    primaryText={props.player.name}
    leftAvatar={< Avatar src = "http://www.fillmurray.com/g/300/300" />}
    rightIcon={< ActionDeleteForever />} />
)

export default TeamList;