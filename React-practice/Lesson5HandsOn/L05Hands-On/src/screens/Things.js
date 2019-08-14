import React from 'react';


const Things = ({match}) => (
    <div>
    <h2>{match.params.FavoriteThingsId}</h2>
  </div>
);

export default Things;