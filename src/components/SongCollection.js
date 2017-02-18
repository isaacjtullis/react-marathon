import React from 'react';
import Song from './Song';

class SongCollection extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let songs = this.props.songs.map((song) => {
      let handleSongSelect = () => this.props.handleSongSelect(song.id)

      let songBeingPlayed = "unselected"
      if (this.props.selectedSongId === song.id) {
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
      )
    })
    return (
      <ul>{songs}</ul>
    )
  };
}

export default SongCollection;
