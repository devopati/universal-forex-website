import React, { useEffect } from "react";

const TradingVieWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    document.getElementById("ticker-tape-container").appendChild(script);

    return () => {
      const container = document.getElementById("ticker-tape-container");
      if (container && container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, []);

  const widgetOptions = {
    symbols: [
      {
        proName: "FOREXCOM:SPXUSD",
        title: "S&P 500",
      },
      {
        proName: "FOREXCOM:NSXUSD",
        title: "US 100",
      },
      {
        proName: "FX_IDC:EURUSD",
        title: "EUR/USD",
      },
      {
        proName: "BITSTAMP:BTCUSD",
        title: "Bitcoin",
      },
      {
        proName: "BITSTAMP:ETHUSD",
        title: "Ethereum",
      },
      {
        description: "XAUUSD",
        proName: "FXOPEN:XAUUSD",
      },
      {
        description: "NASDAQ",
        proName: "SKILLING:NASDAQ",
      },
    ],
    showSymbolLogo: false,
    colorTheme: "light",
    isTransparent: false,
    displayMode: "adaptive",
    locale: "en",
  };

  useEffect(() => {
    if (
      window.TradingView &&
      typeof window.TradingView.MediumWidget === "function"
    ) {
      new window.TradingView.MediumWidget({
        ...widgetOptions,
        container_id: "ticker-tape-container",
      });
    }
  }, [widgetOptions]);

  return <div className="trading-view-widget" id="ticker-tape-container"></div>;
};

export default TradingVieWidget;
