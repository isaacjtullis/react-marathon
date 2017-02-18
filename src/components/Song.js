import React from 'react';

class Song extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div className={this.props.songBeingPlayed}>
        <li>{this.props.name}</li>
      </div>
    );
  };
}

export default Song;
