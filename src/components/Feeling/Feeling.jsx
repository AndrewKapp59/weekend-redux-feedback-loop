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
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

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
  const [feeling, setFeeling] = useState('');

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
      <Container maxWidth="md">
        <Box sx={{ bgcolor: 'rgb(214, 226, 236)', height: '100vh', }}>
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
      </Container>
    </React.Fragment>
  );
}

export default Feeling;
