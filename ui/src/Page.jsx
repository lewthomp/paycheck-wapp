import React from 'react';
import { NavLink } from "react-router-dom";

import Contents from "./Contents.jsx";
import "./styles/navbar.css";

const NavBar = () => {
    return(
        <nav>
            <NavLink to='/shifts'>shifts</NavLink>
            <NavLink to='/payrates'>rates</NavLink>
            <NavLink to='/check'>check</NavLink>
            <a className='login'>login</a>
        </nav>
    )
}

const Page = () => {
  return (
    <div>
        <NavBar />
        <Contents />
    </div>
  )
}

export default Page