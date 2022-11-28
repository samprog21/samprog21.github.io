import React, { useState } from 'react';

// don't change the Component name "App"
export default function App() {
    const [counter, setCounter] = useState(0);
    
    const onButtonClick = () => {
        setCounter(counter + 1);
    };
    
    return (
        <div>
            <button onClick={onButtonClick}>Click Me!</button>
            
            <h1>Current Count: {counter}</h1>
        </div>
    );
}