import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

function Support() {

  const [support, setSupport] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: 'ADD_SUPPORT',
      payload: support,
    });

    setSupport('');

    history.push('/comments');
  };


  return (
    <section>
      <Header />
      <h1>How well are you being supported?</h1>
      <form onSubmit={handleFeedbackSubmit} className="form-input">
        <input
          required
          type="number"
          placeholder="0"
          value={support}
          onChange={(event) => setSupport(event.target.value)}
        />
        <input value="Next" type="submit"/>
      </form>
    </section>
  );
}

export default Support;