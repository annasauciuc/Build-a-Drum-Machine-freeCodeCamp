import React, { Component } from "react";

import "./Controller.css";

class Controller extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { btnProps,btnSelected } = this.props;
    
    console.log('btnPropsController', btnProps)

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
            <div className="select">
              <div className="powerChange" />
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
            <p>Power</p>
            <div className="select">
              <div className="powerChange" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Controller;
