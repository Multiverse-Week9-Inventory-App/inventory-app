import React from 'react';

export function Sauce (props) {

  return <>
    <h3>{props.sauce.name}</h3>
    <img src={props.sauce.image} alt={props.sauce.name} />
  </>
} 
	