import React from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import {initState }from "./actions"



class PostList extends React.Component {

    componentDidMount() {

        this.props.initState()

    }

    render() {
        console.log(this.props)
        return (    
            <ul>
                {this.props.list.map(post => {
                    return <li key={post.title}>{post.title} <img src={post.path} /></li>
                })}
            </ul>
        )
    }
}

export default connect(state => state.postList, { initState })(PostList)