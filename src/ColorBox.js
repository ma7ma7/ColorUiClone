import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import "./ColorBox.css";

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
    const { background, name, moreUrl, showLink } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() >= 0.6;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className="ColorBox" style={{ background }}>
          <div
            className={`copy-overlay ${copied && "show"}`}
            style={{ background }}
          ></div>
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>Copied !!</h1>
            <p>{background}</p>
          </div>
          <div className="copy-container">
            <div className={`box-content ${isDarkColor && "light-text"}`}>
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>

          {showLink && (
            <Link to={moreUrl}>
              <span
                className={`see-more ${isLightColor && "dark-text"}`}
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

export default ColorBox;
