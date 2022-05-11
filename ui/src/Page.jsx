import React from 'react';
import { NavLink } from "react-router-dom";

import Contents from "./Contents.jsx";
import "./styles/navbar.css";

const NavBar = () => {
    return(
        <nav>
            <NavLink to='/shifts'>shifts</NavLink>
            <NavLink to='/payrates'>rates</NavLink>
            {/* <NavLink to='/check'>check</NavLink> */}
            <NavLink to='/profile'>profile</NavLink>
            <NavLink to='/login' className='login'>login</NavLink>
        </nav>
    )
}

const Header = () => {
  return (
    <div>
      <NavLink to='/'>
        <h1 id="title">paycheck🤑</h1>
      </NavLink>
    </div>
  )
}

const Page = () => {
  return (
    <div>
        <NavBar />
        <Header />
        <Contents />
    </div>
  )
}

export default Page