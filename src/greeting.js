import React from 'react';
let today = new Date();
let hour = today.getHours();
let greeting;

const Greeting = () => {
    if (hour >= 17) {
        greeting = 'Good evening! Look below for trail suggestions.';
    } else if (hour >= 12) {
        greeting = 'Good afternoon! Look below for trail suggestions.';
    } else if (hour >= 0) {
        greeting = 'Good morning! Look below for trail suggestions.';
    } else {
        greeting = 'Hello, come on in!';
    }
    return (
        <div className="App">
            <div className="greeting">
                {greeting}
            </div>
        </div>

    );
};

export default Greeting;