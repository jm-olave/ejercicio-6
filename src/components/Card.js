import React from 'react';
import './Card.scss';

export const Card = (props) => {
  const { title, img, description } = props;
  return (
    <>
      <div className='card'>
        <img className='card-image' src={img} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
};
