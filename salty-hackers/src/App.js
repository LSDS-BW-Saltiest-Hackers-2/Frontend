import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login/Login';
import CommentFeed from './components/Feed/CommentFeed';

import PrivateRoute from './utils/PrivateRoute';

import './App.css';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <div className='header-links'>
          
        </div>
        <Switch>
          <PrivateRoute exact path='/saved-comments' />
          <PrivateRoute exact path='/main-feed' component={CommentFeed} />
          {/*Replace this with Route of Signup Page */}
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
