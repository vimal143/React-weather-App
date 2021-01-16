import React, { useEffect, useState } from 'react';
import "./css/style.css";
import Night from './assets/Night.jpg'
let time=new Date().getHours();
const cssStyle={

};
const cssStyle1={

};

if(time>=1 &&time<=5 ){
    
    cssStyle.background=`url(${Night})`;
    cssStyle.color="white";
    cssStyle1.color="black";

    
  }

const Weather=()=>{
    const[city,setCity]=useState(null);
    const[search,setSearch]=useState("Pratapgarh");
    
    useEffect(()=>{
        const getWeather=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4c0f1bf4c5256440bb7925e317d9f5d0`;
            const response=await fetch(url);
            const res=await response.json();
            
            setCity(res.main);

          
        };
        getWeather();

    },[search])


    
    return(
    <>
    <div className="box" style={cssStyle}>
        <div className="inputData ">
            <input type="search" className="inputField" placeholder="City Name" 
            onChange={(event)=>{setSearch(event.target.value)}} name="city"
            />
        </div>
        {
            !city?(
                <h1 className="weather-description">No Dat Found</h1>
            ):(
                <div>
                    <div className="weather-info">
            <h2 className="weather-description">{}</h2>
            <h1 className="temperature">{city.temp}&deg; C</h1>
            <h5 style={{textAlign:"center"}}><span>Min-temp: {city.temp_min}&deg; C </span>|<span> Max-temp: {city.temp_max}&deg; C</span></h5>
    </div>
    <div className="row">
    <div className="Column city-col">
        <h1 className="cityName">{search}</h1>
        <h1 className="temp">{city.temp}&deg;</h1>
    </div>
    <div className="Column wind-col" style={cssStyle1}>
        <h5 className="wind">Wind</h5>
            <h6 className="wind-speed">{} km/h</h6>
    </div>
    <div className="Column hum-col" style={cssStyle1}>
        <h5 className="humidity">Humidity</h5>
        <h6 className="humidity-amount">{city.humidity}</h6>
    </div>
    </div>


                </div>
            )
        }
        
    </div>
    
   </>   
    );
};
export default Weather;