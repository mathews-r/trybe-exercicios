import React from 'react';
import Proptypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props;
    return (
      <div className='pokemon'>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>

        <img src={image} alt='Foto do pokemon' />
      </div>
    )
    }
  }

Pokemon.propTypes = {
  name: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
  averageWeight: Proptypes.shape({
    value: Proptypes.number.isRequired,
    measurementUnit: Proptypes.string.isRequired
  }),
  image: Proptypes.string.isRequired,
};

export default Pokemon;