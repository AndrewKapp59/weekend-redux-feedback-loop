import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Feeling.css';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { flexbox } from '@mui/system';

// Custom icon imported from material ui
const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

// Material UI function for the icon container
function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

// Feeling component for recording the user input
function Feeling() {
  //records that state of the feeling input
  const [feeling, setFeeling] = useState(3);

  const dispatch = useDispatch();
  const history = useHistory();
  
  const handleFeedbackSubmit = (event) => {
    event.preventDefault();

    // sends the current state of the feeling input to the store
    dispatch({
      type: 'ADD_FEELING',
      payload: { feeling },
    });

    // resets the state of feeling
    setFeeling('');

    // changes the url to that of the next page
    history.push('/understanding');
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
            borderRadius: 5,
            boxShadow: '0px 0px 9px 1px rgba(153,153,153,1)'
          }}
        >
          <Header />
          <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
            How are you feeling today?
          </Typography>
          <Rating
            name="highlight-selected-only"
            defaultValue={3}
            IconContainerComponent={IconContainer}
            highlightSelectedOnly
            onChange={(event, newValue) => {
              setFeeling(newValue);
            }}
          />
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

export default Feeling;
