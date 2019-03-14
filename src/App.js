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
      bankSelected: "bankOne",
      btnSelected: "",
      sliderVal: 0.5,
      display: "Heater Kit"
    };
    this.updateBankSelected = this.updateBankSelected.bind(this);
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

  componentDidUpdate(prevProps, prevState) {
    const { btnProps, bankSelected } = this.state;
    let result = [];
    if (prevState.bankSelected != this.state.bankSelected) {
      if (bankSelected == "bankOne") {
        bankOne.map((bank, i) => {
          result.push(
            new ButtonSound(bank.keyCode, bank.keyTrigger, bank.id, bank.url)
          );
        });
      } else {
        bankTwo.map((bank, i) => {
          result.push(
            new ButtonSound(bank.keyCode, bank.keyTrigger, bank.id, bank.url)
          );
        });
      }
      this.setState({ btnProps: result, display: "Smooth Piano Kit" });
    }
  }
  clearDisplay() {
    this.setState({
      display: ""
    });
  }
  adjustVolume(e) {
    if (this.state.power) {
      this.setState({
        sliderVal: e.target.value,
        display: "Volume: " + Math.floor(e.target.value * 100)
      });
      setTimeout(() => this.clearDisplay(), 6000);
    }
  }

  updateBankSelected = () => {
    const { bankSelected } = this.state;
    if (bankSelected == "bankOne") {
      this.setState({ bankSelected: "bankTwo" });
    } else {
      this.setState({ bankSelected: "bankOne" });
    }
  };
  updateBtnSelected = btnSelected => {
    this.setState({ display: btnSelected });
  };
  updatePower = () => {
    const { power } = this.state;
    this.setState({ power: !power });
  };

  render() {
    const {
      btnProps,
      btnSelected,
      power,
      bankSelected,
      sliderVal,
      display
    } = this.state;

    return (
      <React.Fragment>
        <div className="container centered">
          <Drum
            power={power}
            updateBtnSelected={b => this.updateBtnSelected(b)}
            btnProps={btnProps}
          />
          <Controller
            display={display}
            sliderVal={sliderVal}
            adjustVolume={e => this.adjustVolume(e)}
            updateBankSelected={() => this.updateBankSelected()}
            bankSelected={bankSelected}
            power={power}
            updatePower={() => this.updatePower()}
            btnSelected={btnSelected}
            btnProps={btnProps}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
