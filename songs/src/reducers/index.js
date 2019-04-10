import { combineReducers } from 'redux';

//return song list
const songReducer = () => {
  return [
    { title: 'Blank Space', duration: '4:05' },
    { title: 'Tear Drops on My Guitar', duration: '3:35' },
    { title: '7 Rings', duration: '3:20' }
  ]
}

//Fetch one song
const selectedSongReducer = (list = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    // console.log('this is action', action)
    return action.payload.song;
  } else {
    return list;
  }
}

export default combineReducers({
  songList: songReducer,
  selectedSong: selectedSongReducer
})