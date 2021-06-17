import React from 'react';
import TrackList from '../TrackList/TrackList'

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props.searchResults)
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList searchResults={this.props.searchResults}/>
      </div>
    )
  }
}

export default SearchResults;