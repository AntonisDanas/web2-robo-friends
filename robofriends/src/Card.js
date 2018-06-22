import React, { Component } from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className='fl dib w-25 ma2 tc br4 bg-light-green pa2 shadow-5 bw2 grow'>
            <img alt='robot' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;