import React, { Component } from 'react';
import './App.css';
import {Header} from "./components/Header";


const players = [
  {name: 'LDK', score: 50, id: 1},
  {name: 'HONG', score: 60, id: 2},
  {name: 'KIM', score: 70, id: 3},
  {name: 'PARK', score: 80, id: 4},
];



const Player = (props) => (
  <div className="player">
    <span className="player-name">
      {/*props.removePlayer에 id를 넘겨주는 함수 선언문*/}
      <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>x</button>
    </span>
    <span className="player-name">
      {props.name}
    </span>
    <Counter />
  </div>
)

class Counter extends React.Component {
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

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
    ]
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }));
  }

  render() {
    return (
      <div className="scoreboard">
        {/* {title: 'My Scoreboard', totalPlayers: 11} */}
        <Header title="My Scoreboard" totalPlayers={11} />

        {
          this.state.players.map(player => <Player name={player.name}
                                                   removePlayer={this.handleRemovePlayer}
                                                   id={player.id}
                                                   key={player.id} />)
        }
      </div>
    );
  }
}



// 삭제 로직
// 1) App 에서 삭제 함수를 생성
// 2) props로 삭제함수를 전달
// 3) 삭제 클릭시 해당 props 호출
export default  App;