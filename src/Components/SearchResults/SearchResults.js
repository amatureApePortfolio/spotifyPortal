import React from 'react';
import TrackList from '../TrackList/TrackList'
import './SearchResults.css';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props.searchResults)
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd}/>
      </div>
    )
  }
}

export default SearchResults;