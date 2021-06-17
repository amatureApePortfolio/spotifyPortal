import React from 'react';
import TrackList from '../TrackList/TrackList'

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value)
  }
  render() {
    return (
      <div class='Playlist'>
        <input value={"New Playlist"} onChange={this.handleNameChange}/>
        <TrackList playlistTracks={this.props.playlistTracks} onRemove={this.props.onRemove}/>
        <button className='Playlist-save'>SAVE TO SPOTIFY</button>
      </div>
    )
  }
}

export default Playlist;