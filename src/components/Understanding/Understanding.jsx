import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function valuetext(value) {
  return `${value}°C`;
}

function Understanding() {
  const [understanding, setUnderstanding] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: 'ADD_UNDERSTANDING',
      payload: { understanding },
    });

    setUnderstanding('');

    history.push('/support');
  };

  return (
    <React.Fragment>
      <div className='box'>
        <Box
          sx={{
            marginTop: 30,
            marginBottom: 80,
            width: 700,
            height: 300,
            bgcolor: 'rgb(214, 226, 236)',
            borderRadius: 5,
          }}
        >
          <Header />
          <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
            How well are you understanding the content?
          </Typography>
          <div className='box'>
            <Box sx={{ width: 200}}>
              <Slider
                onChange={(event, newValue) => {
                  setUnderstanding(newValue);
                }}
                // aria-label="Temperature"
                defaultValue={5}
                getAriaValueText={valuetext}
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

export default Understanding;
