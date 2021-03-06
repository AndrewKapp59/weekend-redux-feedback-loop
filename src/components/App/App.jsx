import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review'
import Success from '../Success/Success'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <ul>
          <li>
            <Link to="/">Feeling</Link>
          </li>
          <li>
            <Link to="/">Understanding</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/comments">Comments</Link>
          </li>
          <li>
            <Link to="/review">Review</Link>
          </li>
          <li>
            <Link to="/success">Success</Link>
          </li>
        </ul> */}
        <Route path="/" exact>
          <Feeling />
        </Route>
        <Route path="/understanding" exact>
          <Understanding />
        </Route>
        <Route path="/support" exact>
          <Support />
        </Route>
        <Route path="/comments" exact>
          <Comments />
        </Route>
        <Route path="/review" exact>
          <Review />
        </Route>
        <Route path="/success" exact>
          <Success />
        </Route>
      </div>
    </Router>
  );
}

export default App;
