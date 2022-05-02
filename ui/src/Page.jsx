import React from 'react';
import { NavLink } from "react-router-dom";

import Contents from "./Contents.jsx";

const NavBar = () => {
    return(
        <nav>
            <NavLink exact to='/'>home</NavLink>
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