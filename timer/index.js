import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
    const element = (
        <div>
            <h1>hi,peachboy!!</h1>
            <h2>It is timer {new Date().toLocaleTimeString()} </h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);