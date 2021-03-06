import React, { Component } from 'react';
import MiniPalette from './MiniPalette.js';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container: {
    width: '70%',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
  },
};

class PaletteList extends Component {
  getRoute(id) {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { classes, palettes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 style={{ color: '#fff' }}>React Colors</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette) => {
              return (
                <MiniPalette
                  {...palette}
                  handleRouteChange={() => this.getRoute(palette.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
