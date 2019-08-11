import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
    const items = [
        {name: 'Roland 808', price: 999.99},
        {name: 'Moog Grandmother', price: 1100.99},
        {name: 'Novation Peak', price: 1300.99},
        {name: 'Moog Mother', price: 599.99},
        {name: 'Behringer Neutron', price: 299.99}
    ];
    return (
        <div>
            <List items={items} />
        </div>
    )
}

const List = props => {
    const listItems = props.items.map((item, index) => (
        <li key={index}>{item.name}: {item.price}</li>

    ));
    return <ul>{listItems}</ul>;
}

const SynthDetails = props => (
    <ul>
        <li>{props.voices}</li>
        <li>{props.desktop}</li>
        <li>{props.keyboard}</li>
    </ul>
)

const SynthList = props => (
    <ul>
        <li>{props.item1}</li>
        <li>{props.item2}</li>
        <li>{props.item3}</li>
        <li>{props.item4}</li>
        <li>{props.item5}</li>
    </ul>
)

ReactDOM.render(<App />, 
    
document.getElementById('root'));