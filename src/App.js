import React, { useState } from 'react';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  openOrClose = () => {
    var open = !this.state.isOpen;
    this.setState({ isOpen: open });
  }
  close = () => {
    this.setState({ isOpen: false });
  }
  render() {
    if (!this.state.isOpen)
      return (
        <button onClick={(e) => { this.openOrClose() }}>
          Step1: Open popup
        </button>);

    return (
      <div style={{ position: 'absolute', background: 'yellow', width: '300px', height: '300px' }}>
        {this.props.children}
      </div>
    );
  }
}

function InputWithValue() {
  var [step, setStep] = useState(1);
  return (
    <div>
      Step2: click 'next'; step3: see the input field (or empty screen on Android Chrome)
      {step === 1 && <button onClick={() => { setStep(2) }}>Next step</button>}
      {step === 2 && <input value="123" onChange={()=>{}} />}
    </div>
  );
}

function App() {
  return (
    <div>
      <p>Welcome to this convoluted example!</p>

      {/*
        0 or 2+ text fields: all works
        1 text field: doesn't work
        */}
      <input value="input111" onChange={()=>{}} />

      {/* <input value="input222" onChange={()=>{}} /> */}

      <Popup>
        <InputWithValue />
      </Popup>
    </div>
  );
}

export default App;
