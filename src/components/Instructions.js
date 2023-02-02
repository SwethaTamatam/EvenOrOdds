import { connect } from 'react-redux';
import {expandInstructions, collapseInstructions} from '../actions/settings';

const Instructions = props => {
    const {instructionsExpanded, expandInstructions,collapseInstructions } = props
    if(instructionsExpanded) {
        return (
            <div>
                <h3>Instructions</h3>
                <p>Welcome to evens or odds. The game goes on</p>
                <p>The deck is shuffled. Then choose: will the next card be even or odd?</p>
                <p>Make a choice on every draw, and see how many you get right</p>
                <p>(Face cards dont count)</p>
                <br />
                <button onClick={collapseInstructions}>Show less</button>
            </div>
        )
    }
    return (
        <div>
            <h3>Instructions</h3>
            <p>Welcome to evens or odds. The game goes on....</p>
            <button onClick={expandInstructions}>Read more</button>
        </div>
    )
}

const componentConnector = connect(
    state => ({instructionsExpanded:state.settings.instructionsExpanded})
    ,{expandInstructions,collapseInstructions})

export default componentConnector(Instructions)