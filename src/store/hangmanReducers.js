import { createSlice } from '@reduxjs/toolkit';
import state1 from '../Assets/hangmandrawings/state1.GIF';
import state2 from '../Assets/hangmandrawings/state2.GIF';
import state3 from '../Assets/hangmandrawings/state3.GIF';
import state4 from '../Assets/hangmandrawings/state4.GIF';
import state5 from '../Assets/hangmandrawings/state5.GIF';
import state6 from '../Assets/hangmandrawings/state6.GIF';
import state7 from '../Assets/hangmandrawings/state7.GIF';
import state8 from '../Assets/hangmandrawings/state8.GIF';
import state9 from '../Assets/hangmandrawings/state9.GIF';
import state10 from '../Assets/hangmandrawings/state10.gif';
import state11 from '../Assets/hangmandrawings/state11.GIF';

export const hangmanSlice = createSlice({
  //name of slice of state that will be implemented into the empty store.
  name: 'hangman',
  //initial state for slice of state.
  initialState: {
    currentState: 1,
    word: '',
    win: 0,
    lose: 0,
    correctLetters: [],
    winState: '',
    states: {
      1: state1,
      2: state2,
      3: state3,
      4: state4,
      5: state5,
      6: state6,
      7: state7,
      8: state8,
      9: state9,
      10: state10,
      11: state11,
    },
  },
  //reducers to manipulate initial or current state.
  reducers: {
    //Random word reducer which has two parameter initial or current state and action
    //generate a random number
    //state of word equals user input
    //split the input to generate an array
    //get a random word from the array by passing the random number as it index
    //change it to lowercase letters and replace any - character with an empty value
    randomWord: (state, action) => {
      const number = Math.floor(Math.random() * 77439);
      state.word = action.payload
        .split('\n')
        [number].toLowerCase()
        .replace('-', '');
    },

    //checker reducer which has two parameter initial or current state and action
    //if the word includes input value
    //push input into correct letter array
    //else current state of the hangman plus 1
    //if current state equals 11 meaning you lose
    //change win state to false
    //add 1 to lost
    checker: (state, action) => {
      if (state.word.includes(action.payload)) {
        state.correctLetters.push(action.payload);
      } else {
        state.currentState++;
        if (state.currentState == 11) {
          state.winState = false;
          state.lose++;
        }
      }
    },

    //updateWinState reducer which has one parameter for the initial/current state
    //split word into an array
    //check if every letter in the word is included in the correct letter array
    //if true change win state to true
    //add one to win
    updateWinState: (state) => {
      if (
        state.word
          .split('')
          .every((letter) => state.correctLetters.includes(letter))
      ) {
        state.winState = true;
        state.win++;
      }
    },

    //resetState reducer has one parameter for the initial/current state
    //reset current state to 1
    //reset win state to empty
    //reset correct letter to an empty array
    resetState: (state) => {
      state.currentState = 1;
      state.winState = '';
      state.correctLetters = [];
    },
  },
});

//export reducer functions
export const { checker, updateWord, updateWinState, randomWord, resetState } =
  hangmanSlice.actions;
export default hangmanSlice.reducer;
