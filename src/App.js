import React, { Component } from "react";
import Drum from "./components/Drum/Drum";
import Controller from "./components/Controller/Controller";
import "./App.css";
import bankOne from "./components/data/bankOne";
import bankTwo from "./components/data/bankTwo";

class ButtonSound {
  constructor(keyCode, keyTrigger, id, url) {
    this.keyCode = keyCode;
    this.keyTrigger = keyTrigger;
    this.id = id;
    this.url = url;
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnProps: [],
      power: true,
      currentSounds: "Heater Kit",
      bankSelected: "bankOne",
      btnSelected: ""
    };
  }
  componentDidMount() {
    console.log("bankOne :", bankOne);
    const { btnProps, bankSelected } = this.state;
    if (bankSelected == "bankOne") {
      bankOne.map((bank, i) => {
        btnProps.push(
          new ButtonSound(bank.keyCode, bank.keyTrigger, bank.id, bank.url)
        );
      });
    } else {
      bankTwo.map((bank, i) => {
        btnProps.push(
          new ButtonSound(bank.keyCode, bank.keyTrigger, bank.id, bank.url)
        );
      });
    }
    this.setState({ btnProps: btnProps });
  }
  updateBtnSelected = btnSelected => {
    this.setState({ btnSelected: btnSelected });
  };

  render() {
    const { btnProps, btnSelected } = this.state;

    return (
      <React.Fragment>
        <div className="container centered">
          <Drum
            updateBtnSelected={b => this.updateBtnSelected(b)}
            btnProps={btnProps}
          />
          <Controller btnSelected={btnSelected} btnProps={btnProps} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
