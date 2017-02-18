import React from 'react'
import Playlist from './Playlist';

const PlaylistCollection = (props) => {
  let playlists = props.playlists.map(playlist=>{
    let handlePlaylistSelected = () => props.handlePlaylistSelected(playlist.id)

    let selectedPlaylist = "unselected"
    if (props.selectedPlaylistId === playlist.id) {
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
}

export default PlaylistCollection;
