import './App.css';
import  './Weather'
import Weather from "./Weather";
import {useState} from "react";



function App() {
    const API_KEY = "aafbce564c16469882b91659212212"
    let cityinput = ""
    const [weatherdata,setweatherdata] = useState([]);
    const [userInput, setUserInput] = useState("")
    const [city,setCity] = useState({});


    function write(e) {
        setUserInput(e.target.value)
    }

async function getdata (){
    const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${userInput}&days=7&aqi=yes&alerts=no`)
    const result = await data.json();
    setweatherdata(result.forecast.forecastday)
    setCity(result.location)
    console.log(result)
}

const onKeyPress = (key) => {

        if(key.code === "Enter") {
            getdata()
        }
}



  return (
    <div>
        <div className="search">
              <input type="text" onKeyUp={onKeyPress} placeholder={"Searching a City..."} onChange={write}/>
              <button  onClick={getdata}>Search</button>
        </div>
        {
            weatherdata.map (item=>(<Weather key={item.date} city={city}  date={item.date} condition={item.day.condition.text} maxtemp={item.day.maxtemp_c} mintemp={item.day.mintemp_c} icon={item.day.condition.icon}/>))
        }

    </div>
  );
}

export default App;
