import React from 'react';
import Song from './Song';

const SongCollection = (props) => {
  let songs = props.songs.map((song) => {
    let handleSongSelect = () => props.handleSongSelect(song.id)

    let songBeingPlayed = "unselected"
    if (props.selectedSongId === song.id) {
      songBeingPlayed = "selected"
    }

    return(
      <Song
          songBeingPlayed = {songBeingPlayed}
          key = {song.id}
          name = {song.name}
          artist = {song.artist}
          album = {song.album}
          handleSongSelect = {handleSongSelect}
      />
    );
  });
  return (
    <ul>
      {songs}
    </ul>
  );
}

export default SongCollection;
