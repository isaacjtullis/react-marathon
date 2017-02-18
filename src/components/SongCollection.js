import React from 'react';
import Song from './Song';

class SongCollection extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let songs = this.props.songs.map(song =>{
      return(
        <Song
          key = {song.id}
          name = {song.name}
          artist = {song.artist}
          album = {song.album}
        />
      )
    })
    return (
      <ul>{songs}</ul>
    )
  };
}

export default SongCollection;
