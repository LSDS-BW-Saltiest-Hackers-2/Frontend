import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login/Login';
import CommentFeed from './components/Feed/CommentFeed';
import SignUp from './components/Sign Up/SignUp'

import PrivateRoute from './utils/PrivateRoute';

import './App.css';

import gsap from 'gsap'



function App() {

  //logo animation
  let logoItem = useRef(null)
  let navItem1 = useRef(null)
  let navItem2 = useRef(null)
  
  useEffect(() => {
    gsap.to(
      logoItem,
      1,
      {
        y: 20,
      }
    )

    gsap.to(
      navItem1,
      1,
      {
        y: 20,
      }
    )

    gsap.to(
      navItem2,
      1,
      {
        y: 20,
      }
    )
  }, [])
  //

  return (
    <Router>
      <div className='app-container'>
        <div className='header-links'>
          <nav>
            <Link to='/login' className='logo' style={{textDecoration:'none'}}>
                <h1 ref={el => {logoItem = el}}>Salty Hackers</h1>
              </Link>
            
                <div className='nav-links'>
                    <Link ref={el => {navItem1 = el}} to='/feed'>View Top Comments</Link>
                    <Link ref={el => {navItem2 = el}} to='/saved-comments'>View My Saved Comments</Link>
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
