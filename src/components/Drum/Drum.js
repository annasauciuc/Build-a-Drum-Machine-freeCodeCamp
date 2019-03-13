import React, { Component } from "react";

import "./Drum.css";

class Drum extends Component {
  constructor(props) {
    super(props);
    this.playSoundKeyPress = this.playSoundKeyPress.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  playSoundKeyPress = e => {
    const { btnProps, sounds } = this.props;
    btnProps.map((btn, i) => {
      const audio = document.getElementById(btn.keyTrigger);
      console.log("audio", audio);
      if (!audio) return;
      audio.curentTime = 0;
      audio.play();
    });

    //  key.classList.add("playing");
  };
  handleKeyPress(e) {
    const { btnProps, sounds } = this.props;
    btnProps.map((btn, i) => {
      console.log("btn :", btn.keyCode);
      if (e.keyCode == btn.keyCode) {
        console.log("e.keyCode :", e.keyCode);
        console.log("btn.keyCode :", btn.keyCode);
        this.playSoundKeyPress();
      }
    });

    // const { btnProps } = this.props;
    // console.log("btnProps[keyCode] :", btnProps.keyCode);
    // console.log("handleKeyPress :");
    // if (e.keyCode == this.props.keyCode) {
    //   this.playSoundKeyPress();
    // }
    // console.log("this.props.keyCode :", this.props.keyCode);
  }
  playSoundOnClick = event => {
    const audio = document.querySelectorAll("audio[data-key]");
  };
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
    const { btnProps, sounds } = this.props;

    return (
      <React.Fragment>
        <div className="container centered">
          <div className="btnDrum">
            {btnProps.map((btn, i) => {
              return (
                <div
                  key={"sound" + i}
                  className="key"
                  // onClick={event => this.playSoundOnClick(event)}
                >
                  <audio className="clip" id={btn.keyTrigger} src={btn.sound} />
                  {btn.keyTrigger}
                </div>
              );
            })}
          </div>
          <div className="logo">
            <span className="textLogo">FCC&nbsp;</span>
            <i className="fab fa-free-code-camp" />
          </div>
          <div className="bankController">
            <div className="power">
              {" "}
              <p>Power</p>
              <div className="select">
                <div className="powerChange" />
              </div>
            </div>
            <div>
              <p className="shaker">Shaker</p>
              );
              <p className="shaker" />
            </div>
            <div className="range">
              <input type="range" name="" id="" />
            </div>
            <div className="power">
              {" "}
              <p>Power</p>
              <div className="select">
                <div className="powerChange" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Drum;
