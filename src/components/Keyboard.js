//import styles, component and reducers
import { useSelector, useDispatch } from 'react-redux';
import { checker, updateWinState } from '../store/hangmanReducers';
import Button from 'react-bootstrap/Button';

//get win state and current state from store
//create keyboard using the alphabet
//create an array with the alphabet
//map through each letter and return a button for each one
const KeyBoard = () => {
  const { winState, currentState } = useSelector((store) => store.hangman);
  const dispatch = useDispatch();
  const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const keyArr = keys.split('');

  //when button is clicked
  //check if the letter is in the word
  //disabled the button so user can't click same letter
  //update/check the win state
  const handleKey = (e) => {
    e.target.setAttribute('disabled', 'disabled');
    const input = e.target.textContent.toLowerCase();
    dispatch(checker(input));
    dispatch(updateWinState());
  };

  return (
    <div className="keyboard-container">
      {keyArr.map((key, index) => {
        return (
          <Button
            //if current state equals 11 or win state is true disabled keys
            disabled={currentState === 11 || winState === true ? true : false}
            data-key={key}
            onClick={handleKey}
            key={index}
            variant="outline-dark"
          >
            {key}
          </Button>
        );
      })}
    </div>
  );
};

export default KeyBoard;
