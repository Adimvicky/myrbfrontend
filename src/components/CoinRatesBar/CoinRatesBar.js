import React from 'react';
import { bar } from './CoinRatesBar.module.css';
import coinRatesData from './coin-rates.json';

const CoinRate = (props) => {
  let rateChangeColor = Number(props.change >= 0) ? 'text-green-100' : 'text-red-100';
  return (
    <li className="first-no-pl py-1 px-4 b-r">
      <span> {props.currencies} </span>
      <span className="mx-1"> {props.rate} </span>
      <span className={rateChangeColor}>{props.change}</span>
      <span className={rateChangeColor}>({props.percentage}%)</span>
    </li>
  )
}

const CoinRatesBar = (props) => {
  return (
    <ul className={`${bar} px-20 text-xs h-12 flex items-center justify-between`}>
      {
        coinRatesData.map(rate => {
          return <CoinRate currencies={rate.currencies} rate={rate.rate} change={rate.change} percentage={rate.percentage}/>
        })
      }
    </ul>
  )
}

export default CoinRatesBar