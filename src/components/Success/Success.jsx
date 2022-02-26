import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Success() {

  const history = useHistory();

  const handleClick = event => {
    history.push('/');
  }


  return (
    <>
      <div>
        <h1>Feedback</h1>
      </div>
      <div>
        <h1>Thank You!</h1>
      </div>
      <button onClick={handleClick}>Leave New Feedback</button>
    </>
  );
}

export default Success;
