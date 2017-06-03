import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PostList from './PostList';
import PostInput from './PostInput';

const App = () => (
  <Router history={history}>
    <div>
      <ul className="menu">
        <li ><Link to="/">Post list</Link></li>
        <li ><Link to="/posts/add">Add post</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={PostList}/>
      <Route path="/posts/add" component={PostInput}/> 
      
    </div>
  </Router>
);

export default connect()(App);
