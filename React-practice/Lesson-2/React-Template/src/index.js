import React from 'react';
import ReactDOM from 'react-dom';

function gL(item1,item1a, item1b, item1c, 
    item2, item2a, item2b, item2c, 
    item3, item3a, item3b, item3c ){
    return(
        <ul>
            <li>{item1}</li>
            <ol>
                <li>{item1a}</li>
                <li>{item1b}</li>
                <li>{item1c}</li>
            </ol>
            <li>{item2}</li>
            <ol>
                <li>{item2a}</li>
                <li>{item2b}</li>
                <li>{item2c}</li>
            </ol>
            <li>{item3}</li>
            <ol>
                <li>{item3a}</li>
                <li>{item3b}</li>
                <li>{item3c}</li>
            </ol>
        </ul>
    );
}

ReactDOM.render(
    gL('Favorite Cars', 'Ford Pinto', 'Gremlin', 'Nissan Cube',
     'Favorite Animals', 'MT Goat', 'Lion', 'Pig', 
     'Favorite Computers', 'Macbook Pro', 'iMac Pro', 'Mac Pro'),
  
  document.getElementById('root')
);