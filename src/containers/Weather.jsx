import { useEffect } from "react";
import { useState,useParams } from "react";

import Cart from "./Cart";

export default function Weather(){

    const [data, setData] = useState([]);
    const [location, setLocation] = useState([]);
    const [search, setSearch] = useState([]);
    const [current, setCurrent] = useState([]);
    
    const url = window.location.href;
    const num= url.split('=')


    const WheatherAPI = async() =>{

        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=07c39328eb134ed3add233858230602&q=${num[1]}&aqi=no`);

        const data = await response.json();

        setData(data);

        setLocation(data.location)
        setCurrent(data.current)

    }
    useEffect ( () => {
        WheatherAPI();

    },[]);
    console.log("data",current)
    

    return(
        <>
            <h1>React  Weather App</h1>
            <p>Enter Location</p>

                <form action="/">

                    <input
                    id="search" name="search" type="text"
                    onChange={event => setSearch(event.target.value)}
                    value={search}
                    />
                     <button type="submit">Search</button>
                </form>
                <Cart search={num[1]} />
        </>
    )

}