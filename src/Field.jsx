import React from 'react';
import './App.css';
import Item from "./Item";

const Field = (props) => {

    let circles = props.items.map((item) =>
        <Item visibility={item.visibility}/>
    )

    return (
        <div className={'field'}>
            {circles}
        </div>
    )
}

export default Field
