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
      ],
      playlistName: '',
      playlistTracks: [
        { name: 'name1', artist: 'artist1', album: 'album1', id: 'id1', uri: []},
        { name: 'name2', artist: 'artist2', album: 'album2', id: 'id2', uri: []},
        { name: 'name3', artist: 'artist3', album: 'album3', id: 'id3', uri: []}
      ]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({
      playlistTracks: tracks
    })
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks.filter(track => track.id !== track.id)
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    })
  }
  savePlaylist() {
    const uris = this.state.playlistTracks.map(track => track.uri);
  }
  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="App">
        <h1>Ja<span className="hightlight">mmm</span>ing</h1>
        <SearchBar onSearch={this.search}/>
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
        </div>
      </div>
    );
  }
}

export default App;
