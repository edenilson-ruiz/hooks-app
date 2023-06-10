import React from 'react';


export const Small = React.memo(({value}) => {
    console.log('Me volvi a dibujar :( -> ' + value);
  return (
    <small>{value}</small>
  )
})
