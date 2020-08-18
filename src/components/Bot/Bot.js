import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BotTable from '../BotTable/BotTable';

import botDetails from './bot-details.json';
import performanceData from './performance-data.json';
import trainingDetails from './training-details.json'


const Bot = (props) => {
  const [training, setTraining] = useState(false);
  const handleStartTraining = () => {
    setTraining(true);
    setTimeout(() => setTraining(false), 3000)
  }
  const trainButton = training ? (
    <button className="btn btn-yellow-pale mr-4 overflow-hidden">
      <span className="action inline-block mx-4 bg-opacity-75">&#10074;&#10074;</span>
      <span className="btn-xs inline-block btn-yellow">pause training</span>
    </button>
  ) : (
    <button onClick={handleStartTraining} className="btn btn-green-pale mr-4 overflow-hidden">
    <span className="action inline-block mx-4 bg-opacity-75">&#x25B6;</span>
    <span className="btn-xs inline-block btn-green">start training</span>
    </button>
  )



  return (
    <div className={`custom-bg-dark--3 px-20 py-12 text-white`}>
      <p className="mb-4 ml-8 text-13">Bot activities</p>
      <div className="w-full flex justify-between items-center mb-6 mr-10">
        <h3 className="h3"> <Link to="/dashboard">&larr;</Link> <span>My seed round bot</span></h3>
        <div>
          <button className="btn btn-xs btn-purple mr-4">Edit</button>
          {/* <button className="btn btn-yellow-pale mr-4 overflow-hidden"><span className="action inline-block mx-4 bg-opacity-75">||</span><span className="btn-xs inline-block btn-yellow">pause training</span></button> */}
          {trainButton}
          <button className="btn btn-xs btn-white-red">delete</button>
        </div>
      </div>
      <div className="flex">
        <div className="w-3/5 flex-1 justify-between items-center mb-6 mr-10">
          <div className="mb-8 p-20 custom-bg-dark--4">
            -- Chart here --
          </div>
          <BotTable data={performanceData}/>
          <div className="mt-8">
            <BotTable data={trainingDetails}/>
          </div>
        </div>
        <div className="flex-1" style={{maxWidth : '450px'}}>
          <BotTable data={botDetails}/>
        </div>
      </div>
    </div>
  )
}

export default Bot;