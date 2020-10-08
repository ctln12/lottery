import React, { Component } from 'react';
import './App.css';
import LotteryBall from './LotteryBall';

class App extends Component {
  static defaultProps = {
    num: 3
  }
  render() {
    const {num} = this.props;
    return (
      <div className="App">
        <LotteryBall num={num}/>
      </div>
    );
  }
}

export default App;
