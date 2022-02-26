import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Review() {

  const feedback = useSelector((store) => store.currentFeedback)

  console.log(feedback);

  const handleSubmit = event => {
    event.preventDefault();
  
    // TODO - axios request to server to add feedback
    axios.post('/feedback', {feedback} )
      .then(response => {
        console.log('Feedback posted');
      })
      .catch(error => {
        console.log('Error Posting', error);
        alert('🤬');
      })
  };

  return(
    <>
      <h1>Review Your Feedback</h1>
      <h3>Feelings: {feedback.feeling} </h3>
      <h3>Understanding: {feedback.understanding} </h3>
      <h3>Support: {feedback.support}</h3>
      <h3>Comments: {feedback.comment} </h3>
      <button onClick={handleSubmit}>Submit</button>
    </>
  )

}



