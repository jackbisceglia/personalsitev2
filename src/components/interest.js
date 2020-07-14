import React from 'react'
import './Styling/interest.css'


export default function Interest({title, specs, icon}) {
    console.log(icon);
    // const swe = require('../images/icons/dashboard.svg')

    return (
        <div className="card">
            <div className="icon">
                <img src={icon} alt=""/>
            </div>
            <h3 className="card-title">{title}</h3>
            {specs.map(el => (
                <p className="line" key={el.title} ><span>{el.name}</span>: {el.rest} </p>
            ))}
        </div>
    )
}
