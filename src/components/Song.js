import React from 'react';

class Song extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div className={this.props.songBeingPlayed}>
        <li onClick={this.props.handleSongSelect}>{this.props.name}</li>
      </div>
    );
  };
}

export default Song;
