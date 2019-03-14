import React, { Component } from "react";

import "./Controller.css";

class Controller extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      adjustVolume,
      btnSelected,
      updatePower,
      power,
      bankSelected,
      updateBankSelected,
      sliderVal,
      display
    } = this.props;

    const clips = Array.from(document.getElementsByClassName("clip"));
    clips.forEach(sound => {
      sound.volume = sliderVal;
    });
    const powerSlider = power
      ? {
          float: "right"
        }
      : {
          float: "left"
        };
    const bankSlider =
      bankSelected == "bankOne"
        ? {
            float: "right"
          }
        : {
            float: "left"
          };

    return (
      <React.Fragment>
        <div className="logo">
          <span className="textLogo">FCC&nbsp;</span>
          <i className="fab fa-2x fa-free-code-camp" />
        </div>
        <div className="bankController">
          <div className="power">
            {" "}
            <p>Power</p>
            <div onClick={() => updatePower()} className="select">
              <div style={powerSlider} className="powerChange" />
            </div>
          </div>
          <div>
            <p  id="display" className="shaker">{btnSelected ? btnSelected : display}</p>
          </div>
          <div className="range">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={sliderVal}
              onChange={e => adjustVolume(e)}
            />
          </div>

          <div className="power">
            {" "}
            <p>Bank</p>
            <div onClick={() => updateBankSelected()} className="select">
              <div style={bankSlider} className="powerChange" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Controller;
