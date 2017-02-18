import React from 'react';
import PlaylistCollection from './PlaylistCollection.js';
import SongCollection from './SongCollection';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songSelected: this.props.data.selectedSongId,
      selectedPlaylist: this.props.data.selectedPlaylistId
    }
    this.handleSongSelect = this.handleSongSelect.bind(this)
    this.handlePlaylistSelected = this.handlePlaylistSelected.bind(this)
  }

  handlePlaylistSelected(id){
      let newSelectedPlaylist = id
      this.setState({selectedPlaylist: newSelectedPlaylist})
  }

  handleSongSelect(id){
    let newSelectedSong = id
    this.setState({songSelected: newSelectedSong})
  }

  render() {
    let data = this.props.data

    let selectedPlaylistSongIds = data.playlists[this.state.selectedPlaylist-1].songs;

    let filterById = (obj) => {
      return selectedPlaylistSongIds.includes(obj.id);
    }

    let selectedPlaylistSongs = data.songs.filter(filterById);

    return (
      <div className="App row">
        <div className="row">
          <div class="large-6 columns">
            <h1>Playlists</h1>
            <PlaylistCollection handlePlaylistSelected={this.handlePlaylistSelected} playlists={data.playlists} selectedPlaylistId={this.state.selectedPlaylist}/>
            <SongCollection handleSongSelect={this.handleSongSelect} songs={selectedPlaylistSongs} selectedSongId={this.state.songSelected}/>
          </div>
          <div class="large-6 columns"></div>
        </div>
      </div>
    );
  }
}

export default App;
