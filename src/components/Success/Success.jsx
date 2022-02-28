
import { useHistory } from 'react-router-dom';
import './Success.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

function Success() {

  const history = useHistory();

  const handleClick = event => {
    history.push('/');
  }

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
            boxShadow: '0px 0px 20px 1px rgba(153,153,153,1)'
          }}
        >
        <div className='thanks'>
          <Typography sx={{ fontSize: 50, marginTop: 4 }} color="text.primary" gutterBottom>
            Thank You!
          </Typography>
        </div>
          <div className='submit'>
            <Button variant="contained" onClick={handleClick}>
              Submit New Feedback
            </Button>
          </div>
        </Box>
      </div>
    </React.Fragment>
  );
}

export default Success;
