import React, { useEffect } from 'react';

const RatesMiniChart = (props) => {
  let widgetRef = React.createRef();

  useEffect(() => {

    let script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    script.innerHTML = `
      {
        "symbol": "${props.pairSymbol}",
        "width": 336,
        "height": 240,
        "locale": "en",
        "dateRange": "1m",
        "colorTheme": "dark",
        "trendLineColor": "#2F185C",
        "underLineColor": "rgba(255, 255, 255, 0.08)",
        "isTransparent": true,
        "autosize": false,
        "largeChartUrl": ""
      }`

    widgetRef.current.appendChild(script);
  });

  return (
    <div class="tradingview-widget-container custom-bg-dark--4" ref={widgetRef}>
      <div class="tradingview-widget-container__widget"></div>
    </div>
  )
}

export default RatesMiniChart;