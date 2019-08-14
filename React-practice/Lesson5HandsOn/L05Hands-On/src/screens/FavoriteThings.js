import React from 'react';
import Things from './Things';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const FavoriteThings = ({match}) => (
    <div>
        <h1>My Favorite Things Are . . . . . . </h1>

        <ul>
            <li><Link to={`${match.url}/1960 Mustang Cobra`}>Car</Link></li>
            <li><Link to={`${match.url}/Chicken and Beer`}>Food</Link></li>
            <li><Link to={`${match.url}/Batman Returns`}>Movie</Link></li>
        </ul>
            
            <Route path={`${match.url}/:FavoriteThingsId`} component={Things} />
            <Route exact path={match.url} render={() => (<h3>Pick a Favorite Thing . . . . . . </h3>)} />

    </div>
);

export default FavoriteThings;