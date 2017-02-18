import React from 'react';

class Song extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <li>{this.props.name}</li>
    );
  };
}

export default Song;
