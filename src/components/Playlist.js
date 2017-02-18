import React from 'react';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className={this.props.playlistBeingPlayed}>
        <li>{this.props.name}</li>
      </div>
    );
  }
}

export default Playlist;
