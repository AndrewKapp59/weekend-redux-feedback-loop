import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

function Support() {

  const [comment, setComment] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: 'ADD_COMMENT',
      payload: comment,
    });

    setComment('');

    history.push('/review');
  };


  return (
    <section>
      <Header />
      <h1>Any comments you want to leave?</h1>
      <form onSubmit={handleFeedbackSubmit} className="form-input">
        <input
          required
          type="text"
          placeholder="?"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <input value="Next" type="submit" />
      </form>
    </section>
  );
}

export default Support;