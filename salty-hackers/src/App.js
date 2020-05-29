import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login/Login';
import CommentFeed from './components/Feed/CommentFeed';
import SignUp from './components/Sign Up/SignUp';
import SavedComments from './components/Feed/SavedComments';
import UpdateForm from './components/Feed/UpdateForm';
import DeleteComment from './components/Feed/DeleteComment';

import PrivateRoute from './utils/PrivateRoute';

import './App.css';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <div className='header-links'>
          <nav>
            <Link to='/login' className='logo' style={{textDecoration:'none'}}>
                <h1>Salty Hackers</h1>
              </Link>
            
                <div className='nav-links'>
                    <Link to='/feed'>View Top Comments</Link>
                    <Link to='/saved-comments'>View My Saved Comments</Link>
                  </div>
            </nav>
        </div>
        <Switch>
          <PrivateRoute exact path='/saved-comments' component={SavedComments}/>
          <PrivateRoute exact path='/edit-comment/:id' component={UpdateForm} />
          <PrivateRoute exact path='/delete-comment/:id' component={DeleteComment} />
          <PrivateRoute exact path='/feed' component={CommentFeed}/>
          <Route exact path='/sign-up' component={SignUp}/>
          <Route exact path='/login' component={Login} />
          <Route exact component={Login} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
