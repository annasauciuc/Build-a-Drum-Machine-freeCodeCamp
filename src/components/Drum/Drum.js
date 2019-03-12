import React, { Component } from "react";

import "./Drum.css";

class Drum extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="container centered">
          <div class="btnDrum">
            <div data-key="	81" class="key">
              <kbd>Q</kbd>
              <span class="sound">Yeah</span>
            </div>
            <div data-key="87" class="key">
              <kbd>W</kbd>
              <span class="sound">we're</span>
            </div>
            <div data-key="69" class="key">
              <kbd>E</kbd>
              <span class="sound">all</span>
            </div>
            <div data-key="65" class="key">
              <kbd>A</kbd>
              <span class="sound">wonderful,</span>
            </div>
            <div data-key="83" class="key">
              <kbd>S</kbd>
              <span class="sound">wonderful</span>
            </div>
            <div data-key="90" class="key">
              <kbd>D</kbd>
              <span class="sound">people</span>
            </div>
            <div data-key="74" class="key">
              <kbd>Z</kbd>
              <span class="sound">So</span>
            </div>
            <div data-key="88" class="key">
              <kbd>X</kbd>
              <span class="sound">when</span>
            </div>
            <div data-key="67" class="key">
              <kbd>C</kbd>
              <span class="sound">did</span>
            </div>
          </div>
          <div className="logo">
          <span className="textLogo">FCC&nbsp;</span>
          <i class="fab fa-free-code-camp"></i>
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
              {" "}
              <p className="shaker">Shaker</p>
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
