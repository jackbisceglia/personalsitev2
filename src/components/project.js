import React from 'react'
import './Styling/project.css'


export default function Project({title, description, icon, url, livesite, blank}) {
    return (
        <div className='proj-card'>
            <a href={livesite} target={blank ? "_blank" : "_self"}><h1>{title}</h1></a>
            <div className="mockup">
                <img src={icon} alt="" className="proj-mock"/>
            </div>
            <p className="description">{description}</p>
            <a href={url} ><h5 className="link">Repository</h5></a>
        </div>
    )
}
