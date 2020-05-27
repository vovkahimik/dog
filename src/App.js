import React from 'react';
import './App.css';
import Counter from "./Counter";
import Field from "./Field";

const App = () => {

    let state = {
        currentCount: 0,
        items: 9,
        visibility: false
    }

    return (
        <div className="App">
            <Field items={state.items}/>
            <Counter currentCount={state.currentCount}/>
        </div>
    )
}

export default App
