import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNewDeck } from "./actions/deck";
import { startGame, cancelGame } from "./actions/settings";
import Instructions from "./components/Instructions";
import "./index.css";
import fetchState from "./reducers/fetchState";
import DrawCard from "./components/DrawCard";
import Card from "./components/Card";
import Guess from "./components/Guess";
import GameState from "./components/GameState";

class App extends Component {
  startGame = () => {
    this.props.startGame();
    this.props.fetchNewDeck();
  };

  render() {
    console.log("this", this);
    if(this.props.fetchState === fetchState.error){
      return (
        <div>
        <p>Please try reloading</p>
        <p>{this.props.error}</p>
        </div>
      )
    }
    return (
      <div>
        <h2>♤ ♡ Evens or Odds ♧ ♢</h2>
        {this.props.gameStarted ? (
          <div>
            <h3>The game is on!</h3>
            <br/>
            <GameState />
            <br />
            <Guess />
            <br />
            <DrawCard />
            <hr />
            <Card/>
            <hr/>
            <button onClick={this.props.cancelGame}>Cancel Game</button>
          </div>
        ) : (
          <div>
            <h3>A new game awaits!</h3>
            <br />
            <button onClick={this.startGame}>Start Game</button>
            <hr />
            <Instructions />
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // const {gameStarted } = state.settings;
  // const {fetchState, message} = state.deck;
  const {
    settings: {gameStarted},
    deck: {fetchState, message}
  } = state
  return { gameStarted, fetchState, message };
};

// const mapDispatchTOProps = dispatch => {
//   return {
//     startGame: () => dispatch(startGame()),
//     cancelGame: () => dispatch(cancelGame()),
//     fetchNewDeck: ()=> fetchNewDeck(dispatch)
//   };
// }
const componentConnector = connect(mapStateToProps, {
  startGame,
  cancelGame,
  fetchNewDeck,
});
export default componentConnector(App);
