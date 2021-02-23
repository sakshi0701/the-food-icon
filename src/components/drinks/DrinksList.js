import React from 'react';
import './drinks.css'

const DrinksList = ({key,name,speciality,contactNo}) => {
    return (
        <div>
            <div className="drinks-area">
            {key}
            {name}
            <h4>{speciality}</h4>
            <h5>{contactNo}</h5>
        </div>
        </div>
    )
}

export default DrinksList;
