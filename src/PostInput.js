import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import {
  inputTextChange,
  inputImageChange,
  inputSubmit,
} from './actions';

const PostInput = ({
  history,
  text, 
  imageName, 
  inputTextChange, 
  inputImageChange, 
  inputSubmit,
}) => {
  
  
  const submit = x => {
    inputSubmit({ image: document.querySelector('input[type="file"]').files[0], history: history });    
    //document.body.appendChild(x.target);    
    
    //x.preventDefault();
    console.log("redirecting");
    history.push("/");

  }

  return (
    <div>
      <h3>New post</h3>
      <form name="form" 
        action={"http://172.50.1.33:3000/post"} 
        method="POST" encType="multipart/form-data"
        onSubmit={ x => submit({text: text, imageName: x.target.value})}>

      <input
        type="text"
        value={text}
        onChange={e => inputTextChange(e.target.value)}
      />
        <input type="file" name="myFileInput" />

        <input type="button" value="Submit" 
        onClick={inputSubmit({ image: document.querySelector('input[type="file"]').files[0], history: history })}/>
      </form>

    </div>
  );
}

export default withRouter(connect(state => state.postInput, {
  inputTextChange,
  inputImageChange,
  inputSubmit
})(PostInput));
