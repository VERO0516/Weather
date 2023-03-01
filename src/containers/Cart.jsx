import { useEffect } from "react";
import { useState,useParams } from "react";

export default function Cart({search}) {

    console.log("yes")

    const [current, setCurrent] = useState([]);
    const [location, setLocation] = useState([]);
    const [condition, setCondition] = useState([]);
    const WheatherAPI = async() =>{

        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=07c39328eb134ed3add233858230602&q=${search}}&aqi=no`);

        const data = await response.json();

        //setData(data);

        setLocation(data.location)
        setCurrent(data.current)
        setCondition(data.current.condition)

    }
    useEffect ( () => {
        WheatherAPI();

    },[]);

    console.log("current",current)

    if(current){{
        return(
            <>
                <figure>
                  <img src={condition.icon} alt={condition.text}  />
                </figure>
                <p>{current.temp_f}</p>
                <p>{location.name}</p>
                
                <p>{condition.text}</p>
            </>
        )

    }}
    
   

}