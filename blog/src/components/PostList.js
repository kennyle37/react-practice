import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    // console.log(this.props)
  }

  render() {
    return (
      <div>Post List!</div>
    )
  }
}

//put our action creator inside our connect
export default connect(
  null, 
  { fetchPosts }
)(PostList);
