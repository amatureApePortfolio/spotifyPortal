import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: 'name1', artist: 'artist1', album: 'album1'},
        { name: 'name2', artist: 'artist2', album: 'album2'},
        { name: 'name3', artist: 'artist3', album: 'album3'},
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Ja<span className="hightlight">mmm</span>ing</h1>
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}/>
          <Playlist />
        </div>
      </div>
    );
  }
}

export default App;
