//import styles, components, data and reducers.
import { useSelector, useDispatch } from 'react-redux';
import { randomWord, resetState } from '../store/hangmanReducers';
import Button from 'react-bootstrap/Button';
import dictionary from '../data/dictionary';
import OffCanvasHints from './Hints';

//Heading component
function Heading() {
  const dispatch = useDispatch();
  //get initial state/current value from store
  const { winState, currentState, win, lose } = useSelector(
    (store) => store.hangman
  );

  //handle reset function that dispatch random word reducer to generate new value
  //dispatch reset to to reset game
  const handleReset = () => {
    dispatch(randomWord(dictionary));
    dispatch(resetState());
  };

  //return header element
  //score for game which uses value from initial/current state from store
  //main heading element
  //sub-heading element to display win/lose state
  //if win state is true or current state is 11 meaning lose display heading else hidden
  //if win state is true sub-heading equals you win else false equals you lose
  //two button one to show hint component
  //other to reset game
  return (
    <header>
      <div className="scores">
        <span>Score:</span>
        <span className="win">{win}</span>
        <span className="lose">{lose}</span>
      </div>
      <div className="title">
        <h1>HangMan</h1>
        <h5
          style={{
            visibility: winState || currentState === 11 ? 'visible' : 'hidden',
          }}
        >
          {winState ? 'You Win' : 'You Lose'}
        </h5>
      </div>
      <div className="btn-container">
        <OffCanvasHints />
        <Button
          variant="outline-danger"
          onClick={handleReset}
          disabled={winState === true || winState === false ? false : true}
        >
          Restart
        </Button>
      </div>
    </header>
  );
}

export default Heading;
