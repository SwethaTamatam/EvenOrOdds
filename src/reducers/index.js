import deckReducer from "./deck";
import settingsReducer from "./settings";
import gameStateReducer from './gameState'

export default {
  deck: deckReducer,
  settings: settingsReducer,
  gameState: gameStateReducer
};