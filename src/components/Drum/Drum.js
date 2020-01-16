import React, { Component } from "react";

import "./Drum.css";

class Drum extends Component {
  constructor(props) {
    super(props);
    this.playSoundKeyPress = this.playSoundKeyPress.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  playSoundKeyPress = btnSelected => {
    const { power } = this.props;
    const audio = document.getElementById(btnSelected.keyTrigger);
    audio.classList.add("playing");
    if (!audio || !power) return;
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
    document.removeEventListener("transitionend", this.removeTransition);
  }

  render() {
    const { btnProps } = this.props;

    return (
      <React.Fragment>
        <div className="btnDrum ">
          {btnProps.map((btn, i) => {
            return (
              <div
                id={btn.id}
                key={"sound" + i}
                className="key drum-pad"
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
