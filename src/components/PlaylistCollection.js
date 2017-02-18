import React from 'react'
import Playlist from './Playlist';

class PlaylistCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let playlists = this.props.playlists.map(playlist=>{
      let handlePlaylistSelected = () => this.props.handlePlaylistSelected(playlist.id)

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
          handlePlaylistSelected = {handlePlaylistSelected}
        />
      )
    })

    return (
      <ul>{playlists}</ul>
    );
  };
}

export default PlaylistCollection;
