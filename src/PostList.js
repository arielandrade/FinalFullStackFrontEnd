import React from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import {initState }from "./actions"



class PostList extends React.Component {

    componentDidMount() {

        this.props.initState()

    }

    render() {
        return ( <div>

                    <h2> Postea algo gato! < /h2>

                     </div>
        )
    }
}

export default connect(state => state.postList, { initState })(PostList)






