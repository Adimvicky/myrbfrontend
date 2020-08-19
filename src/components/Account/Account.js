import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import linkImg from '../../assets/img/link.svg';

const Account = (props) => {
  const { pathname } = useLocation();

  let subRoutes = {
    profile : `${props.match.url}`,
    security : `${props.match.url}/security`,
    integrations : `${props.match.url}/integrations`
  };

  const headerText = () => {
    switch(pathname){
      case subRoutes.profile:
        return 'Profile update'
      case subRoutes.security:
        return 'Security settings'
      case subRoutes.integrations:
        return 'Integrations'
      default:
        return ''
    }
  }

  const ComponentInView = () => {
    switch(pathname){
      case subRoutes.profile:
        return <ProfileUpdate />
      case subRoutes.security:
        return <SecuritySettings />
      case subRoutes.integrations:
        return <Integrations />
      default:
        return null
    }
  }
  return (
    <div className={`bg-grey-100 px-20 py-12 text-dark-200`}>
      <p className="text-dark-200 mb-4 text-13">My account</p>
      <div className="flex justify-between items-center mb-6">
      <h3 className="h3 text-dark-300">{headerText()}</h3>
      </div>
      <div className="flex">
        <nav className="mr-10 flex flex-col items-start">
          <NavLink exact to={subRoutes.profile} activeClassName="text-dark-700 bg-white" className="p-4 py-3 w-56 mb-4">My profile</NavLink>
          <NavLink to={subRoutes.security} activeClassName="text-dark-700 bg-white" className="p-4 py-3 w-56 mb-4">Security</NavLink>
          <NavLink to={subRoutes.integrations} activeClassName="text-dark-700 bg-white" className="p-4 py-3 w-56 mb-4">Integrations</NavLink>
          <button className="mt-auto p-4">Log out</button>
        </nav>
        <div className="w-4/6 p-6 bg-grey-200 text-13 text-dark-200 rounded shadow-light" style={{minHeight : "500px", maxWidth:"420px"}}>
          {ComponentInView()}
        </div>
      </div>
    </div>
  )
}

export default Account;


function ProfileUpdate(props){
  return (
    <form className="">
      <div className="mb-5">
        <label className="block mb-2">Email</label>
        <input type="email" className="input bg-gray-200" placeholder="name@domain.com"></input>
      </div>
      <div class="mb-5">
        <label className="block mb-2">Username</label>
        <input type="email" className="input bg-gray-200" placeholder="myusername"></input>
      </div>
      <div class="mb-5">
        <label className="block mb-2">First Name</label>
        <input type="email" className="input" placeholder="Enter your first name"></input>
      </div>
      <div class="mb-8">
        <label className="block mb-2">Last Name</label>
        <input type="email" className="input" placeholder="Enter your last name"></input>
      </div>
      <div>
        <button className="btn btn-purple btn-xs">update profile</button>
      </div>
    </form>
  )
}

function SecuritySettings(props){
  return (
    <form className="">
      <div className="mb-5">
        <label className="block mb-2">Old password</label>
        <input type="password" className="input" placeholder="name@domain.com"></input>
      </div>
      <div className="mb-5">
        <label className="block mb-2">New password</label>
        <input type="password" className="input" placeholder="name@domain.com"></input>
      </div>
      <div className="mb-8">
        <label className="block mb-2">New password</label>
        <input type="password" className="input" placeholder="name@domain.com"></input>
      </div>
      <div>
        <button className="btn btn-purple btn-xs">change password</button>
      </div>
    </form>
  )
}

function Integrations(props){
  return (
    <div>
      <div className="b-b-lighter--2 -mx-6 p-6">
        <h5 className="text-base mb-4">Active exchanges</h5>
        <div>
          <button className="btn btn-xs bg-gray-200 mr-4 overflow-hidden text-dark-200">
            <span className="action inline-block mx-4 bg-opacity-75">
              <img src={linkImg} width="15px" height="15px"/>
            </span>
            <span className="inline-block text-dark-200">BINANCE</span>
          </button>
        </div>

      </div>
      <div>
        <h5 className="text-base mb-5 mt-8">Connect a new exchange</h5>
        <div className="mb-5">
          <label className="block mb-2">Select an exchange from the list to connect to:</label>
          <select className="input">
            <option>Coinbase</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div>
          <button className="btn btn-purple btn-xs">start</button>
        </div>
      </div>
    </div>
  )
}