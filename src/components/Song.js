import React from 'react';

const Song = (props) => {
  return(
    <div className={props.songBeingPlayed}>
      <li onClick={props.handleSongSelect}>{props.name}</li>
    </div>
  );
};

export default Song;
