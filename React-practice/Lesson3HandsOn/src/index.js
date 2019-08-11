import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
    const items = [
        {car: 'Honda CR-V '},  
        {car: 'Toyota Highlander'},
        {car: 'Ford F-150'},
        {car: 'BMW X3'},
        {car: 'Subaru Crosstrek'}
    ];
    return (
        <div>
            <h1>Lesson 3 HandsOn</h1>
            <List items={items} />
        </div>
    )
}

const List = props => {
    const listItems = props.items.map((item, index) => (
        <li key={index}><strong>{item.car}</strong></li>

    ));
    return <ul>{listItems}</ul>;
}



ReactDOM.render(<App />, 
    
document.getElementById('root'));