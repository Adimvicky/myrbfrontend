import React from 'react';

const Feature = (props) => {
  return (
    <div className={`${props.className} flex-col md:flex-row items-center py-2 px-8 first-no-pl`}>
      <img className="d-inline-block mr-4" src={props.img} />
      <p className="w-56">{props.children}</p>
    </div>
  )
}

export default Feature;