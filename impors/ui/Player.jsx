import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import {blue200, blue900} from 'material-ui/styles/colors';

const styles = {
  button: {
    margin: 12
  },
  chip: {
    margin: 4
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap"
  }
};

const Player = () => (
  <Card>
    <CardMedia overlay={< CardTitle title = "Some Name" subtitle = "text text text" />}>
      <img src="http://www.fillmurray.com/g/300/300" alt="" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      <Chip backgroundColor={blue200} style={styles.chip}>
        <Avatar size={32} color={blue200} backgroundColor={blue900}>
          3
        </Avatar>
        Ball manipulation
      </Chip>
      <Chip backgroundColor={blue200} style={styles.chip}>
        <Avatar size={32} color={blue200} backgroundColor={blue900}>
          3
        </Avatar>
        Kicking Abilities
      </Chip>
      <Chip backgroundColor={blue200} style={styles.chip}>
        <Avatar size={32} color={blue200} backgroundColor={blue900}>
          3
        </Avatar>
        Passing Abilities
      </Chip>
      <Chip backgroundColor={blue200} style={styles.chip}>
        <Avatar size={32} color={blue200} backgroundColor={blue900}>
          3
        </Avatar>
        Ball manipulation
      </Chip>
      <Chip backgroundColor={blue200} style={styles.chip}>
        <Avatar size={32} color={blue200} backgroundColor={blue900}>
          3
        </Avatar>
        Ball manipulation
      </Chip>
      <Chip backgroundColor={blue200} style={styles.chip}>
        <Avatar size={32} color={blue200} backgroundColor={blue900}>
          3
        </Avatar>
        Game startegy
      </Chip>
      <Chip backgroundColor={blue200} style={styles.chip}>
        <Avatar size={32} color={blue200} backgroundColor={blue900}>
          3
        </Avatar>
        Risk
      </Chip>
    </CardText>
    <CardActions></CardActions>
  </Card>
)

export default Player;