import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/core/styles";
import "./ColorBox.css";

const styles = {
  ColorBox: {
    width: "20%",
    height: (props) => (props.isSingleColorPallete ? "50%" : "25%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4.5px",
    "&:hover button": {
      opacity: 1,
    },
  },
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.6 ? "#f2f2f2" : "#121212",
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08 ? "#f2f2f2" : "#121212",
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.6 ? "#121212" : "#f2f2f2",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    width: "60px",
    height: "30px",
    lineHeight: "30px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.6 ? "#121212" : "#f2f2f2",
    cursor: "pointer",
    width: "100px",
    height: "30px",
    marginTop: "-15px",
    marginLeft: "-50px",
    position: "absolute",
    top: "50%",
    left: "50%",
    display: "inline-block",
    outline: "none",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    textAlign: "center",
    textDecoration: "none",
    opacity: 0,
  },
};

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const { background, name, moreUrl, showLink, classes } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={classes.ColorBox} style={{ background }}>
          <div
            className={`copy-overlay ${copied && "show"}`}
            style={{ background }}
          ></div>
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>Copied !!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div>
            <div className="box-content">
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>

          {showLink && (
            <Link to={moreUrl}>
              <span
                className={classes.seeMore}
                onClick={(e) => e.stopPropagation()}
              >
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
