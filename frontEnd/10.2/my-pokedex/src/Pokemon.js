import React from 'react';
import PropTypes from 'prop-types';
import pokemons from './data';

class Pokemon extends React.Component {
  render() {
    const { name, type, image, averageWeight } = this.props;
   return (
    <div>
      <p>{ name }</p>
      <p>{ type }</p>
      <p>{ averageWeight.value }</p>
      <p>{ averageWeight.measurementUnit }</p>
      <img src={image} alt='Foto do pokemon'></img>
    </div>
   )
  }

  }



export default Pokemon;