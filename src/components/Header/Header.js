import React from 'react';
import { header } from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className={`${header} ${props.bordered ? 'b-b' : null}`}>
      <ul className="flex items-center justify-between px-20 h-full">
        <li className="mr-12"><Link to="/"> MYRB </Link></li>
        <li className="mr-10"><Link to="/"> Home </Link></li>
        <li className="mr-auto text-xs"><Link to="/about"> About your bot </Link></li>
        <li className="mr-8"><Link to="/dashboard">Login</Link></li>
        <li className="b-l pl-6"><button class="btn btn-white btn-sm">Register</button></li>
      </ul>
    </div>
  )
};

export default Header;