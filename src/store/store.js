import { configureStore } from '@reduxjs/toolkit';
import hangmanReducers from './hangmanReducers.js';

//setup an empty store
//import reducer
export default configureStore({
  reducer: {
    hangman: hangmanReducers,
  },
});
