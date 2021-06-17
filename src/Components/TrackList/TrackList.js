import React from 'react';
import Track from '../Track/Track';

class TrackList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("TEST", this.props.searchResults)
    return (
      <div className="TrackList">
        {this.props.searchResults && this.props.searchResults.map(track => {
          return <Track track={track} key={track.id}/>
        })}
      </div>
    )
  }
}

export default TrackList;