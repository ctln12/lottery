import React, { Component } from 'react';

import LotteryBall from './LotteryBall';
import './Lottery.css';

class Lottery extends Component {
  constructor(props){
    super(props);
    this.state = {
      nums: Array.from({length: this.props.numBalls})
    }
    this.handleClick = this.handleClick.bind(this);
  }
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40
  }
  generate(){
    const {maxNum} = this.props;
    this.setState(curState => ({
      nums: curState.nums.map(
        n => Math.floor(Math.random() * maxNum) + 1
        )
      })
    );
  }
  handleClick(){
    this.generate();
  }
  render() {
    const {nums} = this.state;
    const {title} = this.props;
    return (
      <div className="Lottery">
        <h1>{title}</h1>
        <div className="Lottery-balls">
          {nums.map(num =>
            <LotteryBall num={num} />
          )}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </div>
    );
  }
}

export default Lottery;
