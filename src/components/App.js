import WeatherDisplay from "./weatherDisplay.jsx"
import {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [weather]=useState({temperature:20,
                           condition:"sunny",});
  return (
    <div>
    <WeatherDisplay weather={weather}/>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
