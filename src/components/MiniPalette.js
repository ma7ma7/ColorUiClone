import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    border: '1px solid #000',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer',
    },
    padding: '8px',
  },

  colors: {
    backgroundColor: '#dae1e4',
    width: '100%',
    height: '150px',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '.5rem',
    fontSize: '1rem',
    position: 'relative',
  },
  emoji: {
    marginRight: '.5rem',
    fontSize: '1.5rem',
  },
  miniColor: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginTop: '-3.8px',
  },
};

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map((miniColor) => (
    <div
      className={classes.miniColor}
      key={miniColor.name}
      style={{ backgroundColor: miniColor.color }}
    ></div>
  ));
  return (
    <div className={classes.root} onClick={props.handleRouteChange}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <div className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
