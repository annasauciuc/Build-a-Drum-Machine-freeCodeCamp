(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),s=a.n(o),c=(a(15),a(3)),i=a(5),d=a(4),l=a(6),m=a(1),u=a(2),p=(a(16),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).playSoundKeyPress=function(e){var t=a.props.power,n=document.getElementById(e.keyTrigger);n.classList.add("playing"),n&&t&&(n.curentTime=0,n.play(),a.props.updateBtnSelected(e.id))},a.removeTransition=function(e){"transform"===e.propertyName&&e.target.classList.remove("playing")},a.componentDidMount=function(){window.addEventListener("keydown",a.handleKeyPress)},a.playSoundKeyPress=a.playSoundKeyPress.bind(Object(m.a)(Object(m.a)(a))),a.handleKeyPress=a.handleKeyPress.bind(Object(m.a)(Object(m.a)(a))),a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"handleKeyPress",value:function(e){var t=this.props.btnProps.filter(function(t,a){return e.keyCode==t.keyCode});t.length>0&&this.playSoundKeyPress(t[0])}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress),document.removeEventListener("transitionend",this.removeTransition)}},{key:"render",value:function(){var e=this,t=this.props.btnProps;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"btnDrum "},t.map(function(t,a){return r.a.createElement("div",{id:t.id,key:"sound"+a,className:"key drum-pad",onClick:function(){return e.playSoundKeyPress(t)}},r.a.createElement("audio",{className:"clip",id:t.keyTrigger,src:t.url}),t.keyTrigger)})))}}]),t}(n.Component)),k=(a(17),function(e){function t(e){return Object(u.a)(this,t),Object(i.a)(this,Object(d.a)(t).call(this,e))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.adjustVolume,a=e.btnSelected,n=e.updatePower,o=e.power,s=e.bankSelected,c=e.updateBankSelected,i=e.sliderVal,d=e.display;Array.from(document.getElementsByClassName("clip")).forEach(function(e){e.volume=i});var l=o?{float:"right"}:{float:"left"},m="bankOne"==s?{float:"right"}:{float:"left"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"logo"},r.a.createElement("span",{className:"textLogo"},"FCC\xa0"),r.a.createElement("i",{className:"fab fa-2x fa-free-code-camp"})),r.a.createElement("div",{className:"bankController"},r.a.createElement("div",{className:"power"}," ",r.a.createElement("p",null,"Power"),r.a.createElement("div",{onClick:function(){return n()},className:"select"},r.a.createElement("div",{style:l,className:"powerChange"}))),r.a.createElement("div",null,r.a.createElement("p",{id:"display",className:"shaker"},a||d)),r.a.createElement("div",{className:"range"},r.a.createElement("input",{type:"range",min:"0",max:"1",step:"0.01",value:i,onChange:function(e){return t(e)}})),r.a.createElement("div",{className:"power"}," ",r.a.createElement("p",null,"Bank"),r.a.createElement("div",{onClick:function(){return c()},className:"select"},r.a.createElement("div",{style:m,className:"powerChange"})))))}}]),t}(n.Component)),y=(a(18),[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}]),h=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],f=function e(t,a,n,r){Object(u.a)(this,e),this.keyCode=t,this.keyTrigger=a,this.id=n,this.url=r},g=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).updateBankSelected=function(){"bankOne"==a.state.bankSelected?a.setState({bankSelected:"bankTwo"}):a.setState({bankSelected:"bankOne"})},a.updateBtnSelected=function(e){a.setState({display:e})},a.updatePower=function(){var e=a.state.power;a.setState({power:!e})},a.state={btnProps:[],power:!0,bankSelected:"bankOne",btnSelected:"",sliderVal:.5,display:"Heater Kit"},a.updateBankSelected=a.updateBankSelected.bind(Object(m.a)(Object(m.a)(a))),a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("bankOne :",y);var e=this.state,t=e.btnProps;"bankOne"==e.bankSelected?y.map(function(e,a){t.push(new f(e.keyCode,e.keyTrigger,e.id,e.url))}):h.map(function(e,a){t.push(new f(e.keyCode,e.keyTrigger,e.id,e.url))}),this.setState({btnProps:t})}},{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=(a.btnProps,a.bankSelected),r=[];t.bankSelected!=this.state.bankSelected&&("bankOne"==n?y.map(function(e,t){r.push(new f(e.keyCode,e.keyTrigger,e.id,e.url))}):h.map(function(e,t){r.push(new f(e.keyCode,e.keyTrigger,e.id,e.url))}),this.setState({btnProps:r,display:"Smooth Piano Kit"}))}},{key:"clearDisplay",value:function(){this.setState({display:""})}},{key:"adjustVolume",value:function(e){var t=this;this.state.power&&(this.setState({sliderVal:e.target.value,display:"Volume: "+Math.floor(100*e.target.value)}),setTimeout(function(){return t.clearDisplay()},6e3))}},{key:"render",value:function(){var e=this,t=this.state,a=t.btnProps,n=t.btnSelected,o=t.power,s=t.bankSelected,c=t.sliderVal,i=t.display;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container centered",id:"drum-machine"},r.a.createElement(p,{power:o,updateBtnSelected:function(t){return e.updateBtnSelected(t)},btnProps:a}),r.a.createElement(k,{display:i,sliderVal:c,adjustVolume:function(t){return e.adjustVolume(t)},updateBankSelected:function(){return e.updateBankSelected()},bankSelected:s,power:o,updatePower:function(){return e.updatePower()},btnSelected:n,btnProps:a})))}}]),t}(n.Component);a(19),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.e01bf68d.chunk.js.map