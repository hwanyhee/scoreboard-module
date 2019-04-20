import React from 'react';
import {Counter} from "./Counter";

export const Player = (props) => {
  return (

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

  );
}