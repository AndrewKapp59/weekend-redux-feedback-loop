
function App() {

  return(
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/">Feeling</Link>
        </li>
        <li>
          <Link to="/understanding">Understanding</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
        <li>
          <Link to="/comments">comments</Link>
        </li>
        <li>
          <Link to="/review">review</Link>
        </li>
        <li>
          <Link to="/feedback">feedback</Link>
        </li>
      </ul>
      <Route path="/" >
        <Feeling />  
      </Route>
      <Route path="/understanding" exact>
        <Understanding/>
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
      <Route path="/feedback" exact>
        <Feedback />
      </Route>
    </div>
  </Router>
  )
}