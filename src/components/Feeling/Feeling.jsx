import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

function Feeling() {

  const [feeling, setFeeling] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: 'ADD_FEELING',
      payload: feeling,
    });

    setFeeling('');

    history.push('/understanding');
  };

  return (
    <section>
      <Header />
      <h1>How are you feeling today?</h1>
      <form onSubmit={handleFeedbackSubmit}>
        <input
          required
          type="number"
          placeholder="0"
          value={feeling}
          onChange={(event) => setFeeling(event.target.value)}
        />
        <input value="Next" type="submit" />
      </form>
    </section>
  );
}

export default Feeling;