import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Support.css'
import Header from '../Header/Header';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Support() {
  const [support, setSupport] = useState(5);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: 'ADD_SUPPORT',
      payload: { support },
    });

    setSupport('');

    history.push('/comments');
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
          How well are you being supported?
        </Typography>
        <div className='box'>
            <Box sx={{ width: 200}}>
              <Slider
                onChange={(event, newValue) => {
                  setSupport(newValue);
                }}
                defaultValue={5}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={10}
              />
            </Box>
          </div>
          <div className="next">
            <Button variant="contained" onClick={handleFeedbackSubmit}>
              Next
            </Button>
          </div>
        </Box>
      </div>
    </React.Fragment>
  );
}

export default Support;
