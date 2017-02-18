import React from 'react';

const Playlist = (props) => {
  return(
    <div className={props.playlistBeingPlayed}>
      <li onClick={props.handlePlaylistSelected}>{props.name}</li>
    </div>
  );
};

export default Playlist;
