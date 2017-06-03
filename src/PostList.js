import React from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';

const PostList = ({ list }) => (
  <div>
    <h3>{list.length} posts</h3>
    
    <hr/>
    
    {list.map(post => <PostItem key={post.id} {...post}/>)}
  </div>
);

export default connect(state => state.postList)(PostList);
