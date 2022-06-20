import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt='Cute cat staring' />;
  }
}

export default Image;