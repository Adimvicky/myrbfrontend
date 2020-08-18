import React from 'react';
import { Link } from 'react-router-dom';

const Account = (props) => {
  return (
    <div className={`bg-grey-100 px-20 py-12 text-dark-200 dash-body`}>
      <p className="text-dark-200 mb-4 text-13">My account</p>
      <div className="flex justify-between items-center mb-6">
        <h3 className="h3 text-dark-300">Profile update</h3>
      </div>
    </div>
  )
}

export default Account;