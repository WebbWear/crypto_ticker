import React, { Component } from 'react';
import './App.css';
import CurrentMoney from './CurrentMoney';

class App extends Component {
  render() {
    return (
      <div className="App">
        Crypto Currency Tracker
        <CurrentMoney/>
      </div>
    );
  }
}

export default App;
