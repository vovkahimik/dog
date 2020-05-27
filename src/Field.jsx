import React from 'react';
import './App.css';
import Item from "./Item";

const Field = () => {

    let state = {
        // currentCount: 0,
        items: 9,
        visibility: true
    }

    let items = []
    for (let i = 1; i <= state.items; i++) {
        items.push(<div><Item id={i}
                              visibility={state.visibility}/></div>)
    }

    return (
        <div className={'field'}>
            {items}
        </div>
    )
}

export default Field
