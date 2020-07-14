import React from "react";
import './Styling/header.css';
import {Link} from "gatsby";
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function NavLink({ link, name }) {
    const scroll = (link) => {
        scrollTo(link)
    }

    return (
        <button className="navStyle" onClick={() => scroll(link)}>
            {name}
        </button>
    )
}
