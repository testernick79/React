import React from 'react';
import Topic from './Topic';
import { Route , Link } from 'react-router-dom';

const Topics = ({match}) => (
    <div>
        <h1>Topics</h1>

        <ul>
            <li><Link to={`${match.url}/rendering`}>Render with React</Link></li>
            <li><Link to={`${match.url}/component`}>Components with React</Link></li>
            <li><Link to={`${match.url}/props`}>Props with React</Link></li>
        </ul>
        
        <Route path={`${match.url}/:topicId`} component ={Topic} />
        <Route exact path={match.url} render={() => <h1>Select a topic ......</h1>} />

    </div>
);

export default Topics;