import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login/Login';
import CommentFeed from './components/Feed/CommentFeed';
import SignUp from './components/Sign Up/SignUp'

import PrivateRoute from './utils/PrivateRoute';

import './App.css';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <div className='header-links'>
          <nav>
            <Link to='/login' className='logo'>
                <h1>Salty Hackers</h1>
              </Link>
            
                <div className='nav-links'>
                    <Link to='/feed'>View Top Comments</Link>
                    <Link to='/saved-comments'>View My Saved Comments</Link>
                  </div>
            </nav>
        </div>
        <Switch>
          <PrivateRoute exact path='/saved-comments' />
          {/* <PrivateRoute exact path='/feed' component={CommentFeed} /> */}
          <Route path='/sign-up' component={SignUp}/>
          <Route path='/login' component={Login} />
          <Route path='/feed' component={CommentFeed}/>
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
