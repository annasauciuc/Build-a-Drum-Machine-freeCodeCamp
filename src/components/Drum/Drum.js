import React, { Component } from "react";

import "./Drum.css";

class Drum extends Component {
  constructor(props) {
    super(props);
    this.playSoundKeyPress = this.playSoundKeyPress.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  playSoundKeyPress = btnSelected => {
    const audio = document.getElementById(btnSelected.keyTrigger);
    if (!audio) return;
    audio.curentTime = 0;
    audio.play();
    this.props.updateBtnSelected(btnSelected.id);
  };
  handleKeyPress(e) {
    const { btnProps } = this.props;
    let btnSelected = btnProps.filter((btn, i) => {
      return e.keyCode == btn.keyCode;
    });
    if (btnSelected.length > 0) {
      this.playSoundKeyPress(btnSelected[0]);
    }
  }
  removeTransition = e => {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  };
  componentDidMount = () => {
    window.addEventListener("keydown", this.handleKeyPress);
  };
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    const { btnProps } = this.props;
    console.log("btnProps", btnProps);
    return (
      <React.Fragment>
        <div className="btnDrum">
          {btnProps.map((btn, i) => {
            return (
              <div
                key={"sound" + i}
                className="key"
                onClick={() => this.playSoundKeyPress(btn)}
              >
                <audio className="clip" id={btn.keyTrigger} src={btn.url} />
                {btn.keyTrigger}
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
export default Drum;
