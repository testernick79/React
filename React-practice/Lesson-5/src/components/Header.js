import React from 'react';

const Header = ({title}) => (
    <div>
        < a href="/">Home</a>
        < a href="About">About</a>
        < a href="Topics">Topics</a>
        <h1>{title}</h1>
    </div>
);

export default Header;