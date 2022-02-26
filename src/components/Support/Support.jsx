import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

function Support() {

  const [support, setSupport] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleFeedbackChange = (event) => {
    setSupport(event.target.value)
  };

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: 'ADD_SUPPORT',
      payload: support,
    });

    setSupport('');
  };

  const handleClick = () => {
    //change location
    history.push('/support');
  }

  return (
    <section>
      <Header />
      <h1>How well are you support the content?</h1>
      <form onSubmit={handleFeedbackSubmit} className="form-input">
        <input
          required
          type="number"
          placeholder="0"
          value={support}
          onChange={handleFeedbackChange}
        />
        <button type="submit" onClick={handleClick}>Next</button>
      </form>
    </section>
  );
}

export default Support;