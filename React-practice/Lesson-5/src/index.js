import React from 'react';
import  ReactDOM from 'react-dom';
import Home from './screens/Home';
import About from './screens/About';
import Topics from './screens/Topics';

const Index = ({ pathname }) => {
    switch (pathname) {
        case '/About':
            return <About/>;

        case '/Topics':
            return <Topics/>;

        default:
            return <Home/>;

    }
}

let pathname = window.location.pathname;

ReactDOM.render(<Index pathname = {pathname}/>, document.getElementById('root'));

window.addEventListener('popstate', () => pathname = window.location.pathname);