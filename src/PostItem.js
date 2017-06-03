import React from 'react';
import { connect } from 'react-redux';


const PostItem = ({
    id,
    text,
    imageName

}) => ( <
    div >
    <
    img alt = "alt"
    src = { imageName ? imageName : "http://via.placeholder.com/200x200" }
    /><br/ >
    <
    label > { text } < /label><br/ >

    <
    p / >
    <
    /div>
);

export default connect(state => state, {})(PostItem);