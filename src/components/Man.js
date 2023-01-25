import { useSelector } from 'react-redux';

//Man component which returns an image depending on the current state
const Man = () => {
  const { states, currentState } = useSelector((store) => store.hangman);
  return (
    <figure>{<img src={states[currentState]} alt="Hangman state" />}</figure>
  );
};

export default Man;
