import React from 'react';
import PlaylistCollection from './PlaylistCollection.js';
import SongCollection from './SongCollection';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data

    let selectedPlaylistSongIds = data.playlists[this.props.data.selectedPlaylistId-1].songs;

    let filterById = (obj) => {
      return selectedPlaylistSongIds.includes(obj.id);
    }

    let selectedPlaylistSongs = data.songs.filter(filterById);

    return (
      <div className="App row">
        <div className="row">
          <div class="large-6 columns">
            <h1>Playlists</h1>
            <PlaylistCollection playlists={data.playlists} />
            <SongCollection songs={selectedPlaylistSongs}/>
          </div>
          <div class="large-6 columns"></div>
        </div>
      </div>
    );
  }
}

export default App;
