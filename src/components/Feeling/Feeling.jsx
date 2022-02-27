import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Feeling.css'
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

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

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

function Feeling() {
  const [feeling, setFeeling] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: 'ADD_FEELING',
      payload: { feeling },
    });

    setFeeling('');

    history.push('/understanding');
  };

  return (
    <section>
      <Header />
      <h1>How are you feeling today?</h1>

      {/* <form onSubmit={handleFeedbackSubmit}>
        <input
          required
          type="number"
          placeholder="0"
          value={feeling}
          onChange={(event) => setFeeling(event.target.value)}
        /> */}
      {/* <input value="Next" type="submit" /> */}
      {/* </form> */}
      
      <Rating
        name="highlight-selected-only"
        defaultValue={3}
        IconContainerComponent={IconContainer}
        highlightSelectedOnly
        onChange ={(event, newValue) => {
          setFeeling(newValue)
        }}
      />
      <div className='next'>
      <Button  variant="contained" onClick={handleFeedbackSubmit} >Next</Button>
      </div>
    </section>
  );
}

export default Feeling;
