import { useSelector } from 'react-redux';

//word component
//get the word in initial/current state in store
//get the array of correctly guessed letter array
//split the word into an array of letter
//create an element for each letter
//if the correct letter are in the array
//set the visibility to visible
//else set to hidden

const Word = () => {
  const { word, correctLetters } = useSelector((store) => store.hangman);
  const wordArr = word.split('');
  return (
    <div className="word-container">
      {wordArr.map((letter, index) => {
        return (
          <span key={index}>
            <span
              style={{
                visibility: correctLetters.includes(letter)
                  ? 'visible'
                  : 'hidden',
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default Word;
