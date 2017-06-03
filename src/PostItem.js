import React from 'react';
import { connect } from 'react-redux';
import { postDelete } from './actions';

const PostItem = ({
  id,
  text,
  imageName,
  postDelete
}) => (
  <div>
    <img alt="alt" src={imageName ? imageName : "http://via.placeholder.com/200x200"}/><br/>    
    <label>{text}</label><br/>
    <button onClick={() => postDelete(id)}>Delete</button>  
    <p/>
  </div>
);

export default connect(null, {postDelete})(PostItem);
