import React from 'react';

export class Counter extends React.Component {
    /*  state = {
      score: 0
    }*/

    constructor() {
        super();
        this.state = {
            score: 0,
            a: 10
        }
    }

    incrementScore() {
        console.log('increment: ', this);

        // this.state.score  += 1;
        // 1) setState()로 값을 변경해야만 UI 렌더링이 일어난다.
        // this.setState({score: this.state.score + 1});

        // 2) merge 된다 => 변경한 state만 기존값에 오버라이딩 된다.

        // 3) setState는 비동기로 일어난다.
        this.setState(prevState => ({score: prevState.score + 1}));
    }
    decrementScore() {
        this.setState(prevState => ({score: prevState.score - 1}));
    }

    render() {
        return (
          <div className="counter">
              <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}> - </button>
              <span className="counter-score">{this.state.score}</span>
              <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
          </div>
        );
    }
}