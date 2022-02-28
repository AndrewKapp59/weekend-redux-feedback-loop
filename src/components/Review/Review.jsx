import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Review.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Review() {
  const history = useHistory();

  const feedback = useSelector((store) => store.currentFeedback);

  console.log(feedback);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(feedback);

    // TODO - axios request to server to add feedback
    axios
      .post('/feedback', feedback)
      .then((response) => {
        console.log('Feedback posted');
      })
      .catch((error) => {
        console.log('Error Posting', error);
        alert('🤬');
      });

    history.push('/success');
  };

  return (
    <React.Fragment>
      <div className="box">
        <Box
          sx={{
            marginTop: 25,
            marginBottom: 80,
            width: 700,
            height: 325,
            bgcolor: 'rgb(214, 226, 236)',
            borderRadius: 5,
          }}
        >
          <Typography sx={{ fontSize: 30, marginTop: 4 }} color="text.primary" gutterBottom>
            Review Your Feedback
          </Typography>
          <div className='feedback'>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              Feelings: {feedback.feeling}
            </Typography>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              Understanding: {feedback.understanding}
            </Typography>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              Support: {feedback.support}
            </Typography>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              Comments: {feedback.comment}
            </Typography>
          </div>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
          {/* <button onClick={handleSubmit}>Submit</button> */}
        </Box>
      </div>
    </React.Fragment>
  );
}

export default Review;
