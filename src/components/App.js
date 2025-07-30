import WeatherDisplay from "./weatherDisplay.jsx"
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [weather]=useState({temperature: 25,
                           conditions:"Sunny",});
  return (
    <div>
    <WeatherDisplay weather={weather}/>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
