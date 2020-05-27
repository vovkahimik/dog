import React from 'react';

const Counter = (props) => {

    return (
        <div className={'counter'}>
            {props.currentCount}
        </div>
    )
}

export default Counter
