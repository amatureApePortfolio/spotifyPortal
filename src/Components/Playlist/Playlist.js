import React from 'react';
import TrackList from '../TrackList/TrackList'

class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class='Playlist'>
        <input value={"New Playlist"}/>
        <TrackList />
        <button className='Playlist-save'>SAVE TO SPOTIFY</button>
      </div>
    )
  }
}

export default Playlist;