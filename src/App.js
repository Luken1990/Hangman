import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import dictionary from './data/dictionary';
import KeyBoard from './components/Keyboard';
import Word from './components/Word';
import Man from './components/Man';
import Heading from './components/Heading';
import { randomWord } from '../src/store/hangmanReducers';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch();
  dispatch(randomWord(dictionary));

  return (
    <main>
      <div className="main-container">
        <Heading />
        <Man />
        <Word />
        <KeyBoard />
      </div>
    </main>
  );
}

export default App;
