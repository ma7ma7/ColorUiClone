import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  main: {
    backgroundColor: "green",
  },
};

function MiniPalette(props) {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <h1>Mini Palette</h1>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
