import React from 'react';
import { NavLink } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import Contents from "./Contents.jsx";
import NavItemSignin from "./components/NavItemSignin.jsx";
import "./styles/navbar.css";

const NavBar = () => {
    return(
        <nav>
            <NavLink to='/shifts'>shifts</NavLink>
            <NavLink to='/payrates'>rates</NavLink>
            <NavLink to='/check'>check</NavLink>
            <a className='login'>login</a>
            {/* <NavItemSignin /> */}
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