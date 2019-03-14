import React, { Component } from "react";

import "./Controller.css";

class Controller extends Component {
  constructor(props) {
    super(props);
  }
  currentPower = () => {};
  render() {
    const {
      btnProps,
      btnSelected,
      updatePower,
      power,
      bankSelected,
      updateBankSelected
    } = this.props;
    console.log('bankSelected', bankSelected)
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
          <i className="fab fa-free-code-camp" />
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
            <p className="shaker">{btnSelected}</p>
          </div>
          <div className="range">
            <input type="range" name="" id="" />
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
