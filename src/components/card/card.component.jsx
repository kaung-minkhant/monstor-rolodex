import React from 'react'
import './card.styles.css'

export const Card = (props) => {
    return (
        <div className='card-container'>
            <img alt='monstor' src={`https://www.robohash.org/${props.monstor.id}?set=set4&size=150x150`} />
            <h2>{props.monstor.name}</h2>
            <p>{props.monstor.email}</p>
        </div>
    );
}