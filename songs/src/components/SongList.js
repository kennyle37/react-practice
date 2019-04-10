import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList = () => {
    return this.props.songList.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button 
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>

          <div className="content">
            {song.title}
          </div>
        </div>
      )
    })
  }

  render() {
    //this.props === { songList: state.songList }
    //our songList component will eventually get songList object as a props from mapStateToProps   
    console.log('this is props', this.props)
    return <div>{this.renderList()}</div>
  }
}

const mapStateToProps = (state) => {
  console.log('this is state', state);
  return { songList: state.songList };
}

export default connect(mapStateToProps, { selectSong })(SongList);
