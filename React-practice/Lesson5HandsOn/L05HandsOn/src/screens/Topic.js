import React from 'react';

const Topic = ({match}) => (
    <div>
        <h4>{match.params.topicId}</h4>
        
    </div>
);

export default Topic;