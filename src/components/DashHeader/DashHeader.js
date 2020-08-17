import React from 'react';
import UserImage from '../UserImage/UserImage';
import { Link, NavLink } from 'react-router-dom';
import profileImg from '../../assets/img/ic-profile.svg';
import dashImg from '../../assets/img/ic-dash.svg';
import { header } from './DashHeader.module.css';

let user = {
  name : 'Daniel P.'
}

const DashHeader = (props) => {

  let url = window.location.href;
  let isDarkPage = url.includes('/dashboard/bot') || url.includes('/dashboard/trader');

  return (
    <header className={`${header} ${isDarkPage ? 'custom-bg-dark--2' : ''}`}>
      <ul className={`px-20 py-4 flex items-center justify-between h-full text-dark-200 ${isDarkPage ? 'b-b-lighter' : 'b-b-light'}`}>
        <li><Link to="/">MYRB</Link></li>
        <li className="flex items-center">
          <UserImage user={user}/>
          <span class="ml-4">{user.name}</span>
        </li>
      </ul>
      <nav>
        <ul className="px-20 py-4 flex items-center text-dark-100">
          <li className="mr-12">
            <NavLink exact to="/dashboard" activeClassName="active-dot" className="flex items-center">
              <img className="mr-3" src={dashImg}></img>
              <span>Home</span>
            </NavLink>
          </li>
          <li className="flex items-center mr-12">
            <NavLink to="/about" activeClassName="active-dot" className="flex items-center">
              <img className="mr-3" src={profileImg}></img>
              <span>About your bots</span>
            </NavLink>
          </li>
          <li className="flex items-center mr-12">
            <NavLink to="/dashboard/trader" activeClassName="active-dot" className="flex items-center">
              <img className="mr-3" src={dashImg}></img>
              <span>Live trader</span>
            </NavLink>
          </li>
          <li className="flex items-center">
            <NavLink to="/dashboard/how" activeClassName="active-dot" className="flex items-center">
              <img className="mr-3" src={profileImg}></img>
              <span>How-to</span>
            </NavLink>
          </li>
          <li className="ml-auto">
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default DashHeader;