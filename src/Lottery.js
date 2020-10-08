import React, { Component } from 'react';

import LotteryBall from './LotteryBall';
import './Lottery.css';

class Lottery extends Component {
  constructor(props){
    super(props);
    this.state = {
      nums: [28, 30, 16, 22, 34, 33]
    }
    this.createBallsArray = this.createBallsArray.bind(this);
  }
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40
  }
  createBallsArray(){
    const {numBalls, maxNum} = this.props;
    let newNums = [];
    for (let i = 0; i < numBalls; i++) {
      let randNum = Math.floor(Math.random() * maxNum + 1);
      newNums[i] = randNum;
    }
    this.setState({nums: newNums})
  }
  render() {
    const {nums} = this.state;
    const {title} = this.props;
    return (
      <div className="Lottery">
        <h1>{title}</h1>
        <div className="Lottery-balls">
          {nums.map(num =>
            <LotteryBall key={nums.indexOf(num)} num={num} />
          )}
        </div>
        <button onClick={this.createBallsArray}>Generate</button>
      </div>
    );
  }
}

export default Lottery;
