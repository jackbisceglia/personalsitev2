import React from 'react'
import '../global.css'
import resume from './static/resume.pdf'

export default function IconBar(props) {

    const gh = require('../images/icons/logo.svg')
    const linkedin = require('../images/icons/linkedin.svg')
    const res = require('../images/icons/resume.svg')
    return (
        <div className="social-bar">
            <a href="https://github.com/jackbisceglia" target="_blank"><div className="soc" style={{backgroundImage: "url("+gh+")"}}></div></a>
            <a href="https://linkedin.com/in/jackbisceglia" target="_blank"><div className="soc" style={{backgroundImage: "url("+linkedin+")"}}></div></a>
            <a href={resume} download="Jack Bisceglia Resume.pdf"><div className="soc" style={{backgroundImage: "url("+res+")"}}></div></a>
        </div>
    )
}
