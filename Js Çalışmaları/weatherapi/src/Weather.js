import React from 'react';
import './weather.css'
import './App'

function Weather({date,condition,maxtemp,mintemp,icon,city}) {
    const alternatif = () => {
        if(condition.toLowerCase().includes("sun")) {
            return "yellow"
        }
        if (condition.toLowerCase().includes("rain")){
            return "lightblue"
        }
        return ""
    }


    return (
       <div className="resolve" style={{ backgroundColor: alternatif(), fontSize: 15 }}>
           <h2>{date}</h2>
           <h2>{city.name}/ {city.country}</h2>
           <ul>
               <li><img src={icon} alt=""/></li>
               <li>{condition}</li>
               <li><p>{mintemp} C / {maxtemp} C</p></li>
           </ul>

       </div>
    );
}

export default Weather;
