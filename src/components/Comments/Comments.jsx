import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Comments.css'
import Header from '../Header/Header';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function Support() {
  const [comments, setComments] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: 'ADD_COMMENT',
      payload: { comments },
    });

    setComments('');

    history.push('/review');
  };

  return (
    <React.Fragment>
      <div className='box'>
      <Box
          sx={{
            marginTop: 25,
            marginBottom: 80,
            width: 700,
            height: 325,
            bgcolor: 'rgb(214, 226, 236)',
            background: 'opacity 0.5',
            borderRadius: 5,
            boxShadow: '0px 0px 9px 1px rgba(153,153,153,1)'
          }}
        >
        <Header />
        <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
          Any comments you want to leave?
        </Typography>
        <form onSubmit={handleFeedbackSubmit}>
            <div className='box'>
              <Box
                sx={{
                  '& > :not(style)': { m: 1, width: '150ch' },
                }}
                noValidate
                autoComplete="off"
              ></Box>
              <TextField 
                required
                value={comments}
                onChange={(event) => {setComments(event.target.value)}}
                id="outlined-basic" 
                label="Comments" 
                variant="outlined"
                autoComplete='off'
              />
            </div>
            <div className="next">
            <Button type='submit' variant="contained">
              Next
            </Button>
            </div>
          </form>
        </Box>
      </div>
    </React.Fragment>
  );
}

export default Support;
