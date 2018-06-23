import React from 'react';

const Scroll = (props) => {

    return (
        <div style={{overflowY: 'scroll', border: '1px solid blue', height: '600px'}} className="">
            {props.children}
        </div>
    );

};

export default Scroll;