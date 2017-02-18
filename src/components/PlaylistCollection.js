import React from 'react'
import Playlist from './Playlist';

class PlaylistCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let playlists = this.props.playlists.map(playlist=>{
      let selectedPlaylist = "unselected"
      if (this.props.selectedPlaylistId === playlist.id) {
        selectedPlaylist = "selected"
      }

      return (
        <Playlist
          playlistBeingPlayed = {selectedPlaylist} 
          key = {playlist.id}
          name = {playlist.name}
          song = {playlist.song}
        />
      )
    })

    return (
      <ul>{playlists}</ul>
    );
  };
}

export default PlaylistCollection;
