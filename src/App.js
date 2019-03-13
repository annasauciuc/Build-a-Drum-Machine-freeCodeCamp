import React, { Component } from "react";
import Drum from "./components/Drum/Drum";
import "./App.css";
import sounds from "./sounds/sounds";

class ButtonSound {
  constructor(keyCode, keyTrigger, id, sound) {
    this.keyCode = keyCode;
    this.keyTrigger = keyTrigger;
    this.id = id;
    this.sound = sound;
    this.isActivate = false;
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnProps: []
    };
  }
  componentDidMount() {
    const { btnProps } = this.state;
    btnProps.push(new ButtonSound("81", "Q", "clap", sounds["clap"]));
    btnProps.push(new ButtonSound("87", "W", "hihat", sounds["hihat"]));
    btnProps.push(new ButtonSound("69", "E", "kick", sounds["kick"]));
    btnProps.push(new ButtonSound("65", "A", "openhat", sounds["openhat"]));
    btnProps.push(new ButtonSound("68", "S", "boom", sounds["boom"]));
    btnProps.push(new ButtonSound("90", "D", "ride", sounds["ride"]));
    btnProps.push(new ButtonSound("88", "Z", "snare", sounds["snare"]));
    btnProps.push(new ButtonSound("67", "X", "tom", sounds["tom"]));
    btnProps.push(new ButtonSound("67", "C", "tink", sounds["tink"]));
    console.log("btnProps :", btnProps);
    this.setState({
      btnProps: btnProps
    });
  }

  render() {
    const { btnProps, sounds } = this.state;

    return <Drum sounds={sounds} btnProps={btnProps} />;
  }
}

export default App;
