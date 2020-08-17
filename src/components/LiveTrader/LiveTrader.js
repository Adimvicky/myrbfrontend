import React from 'react';
import { Link } from 'react-router-dom';
import PerformanceTable from '../PerformanceTable/PerformanceTable';

const LiveTrader = (props) => {
  return (
    <div className={`custom-bg-dark--3 px-20 py-12 text-white`}>
      <p className="mb-4 ml-8 text-13">Bot activities</p>
      <div className="w-full flex justify-between items-center mb-6 mr-10">
        <h3 className="h3"> <Link to="/dashboard">&larr;</Link> <span>Live Trader</span></h3>
      </div>
      <div>
        <div className="mx-auto my-20">
          -- Graphs here --
        </div>
        <div className="flex my-8">
          <div className="w-3/5 flex-1 justify-between items-center mb-6 mr-10">
            <div className="w-full">
              -- Candlestick Chart here --
            </div>
          </div>
          <div className="flex-1 shadow-light rounded overflow-hidden" style={{maxWidth : '450px'}}>
            <div className="w-full">
              <div className="custom-bg-dark--4 p-6">
                Bot details
              </div>
              <div className="p-6">
                <label className="text-13 text-dark-200 mb-2 inline-block">Pick a bot that was trained on this epic</label>
                <select className="input input--dark text-white text-opacity-50 mb-6">
                  <option>Select bot</option>
                  <option>Bot 1</option>
                </select>
                <button className="btn btn-lg btn-purple-bright mx-auto block">start selected bot</button>
              </div>
              <div className="px-6 py-8 custom-bg-dark--4">
                <div>
                  <label className="text-13 text-dark-200 mb-2 inline-block">Order type</label>
                  <select className="input input--dark mb-4">
                    <option>Select order type</option>
                    <option>Bot 1</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="text-13 text-dark-200 mb-2 inline-block">Size</label>
                  <input type="text" placeholder="1" className="input input--dark" />
                </div>
                <div className="flex items-center justify-center">
                  <button className="btn btn-xs btn-green inline-block mr-5">Buy</button>
                  <button className="btn btn-xs btn-red">sell</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div>
          <h4 className="text-base text-white">Trading Performance</h4>
          <PerformanceTable />
        </div>
    </div>
  )
}

export default LiveTrader;