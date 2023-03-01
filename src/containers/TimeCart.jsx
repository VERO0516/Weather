import { useEffect } from "react";
import { useState,useParams } from "react";

export default function TimeCart({search}) {


    const [location, setLocation] = useState([]);

    const TimeAPI = async() =>{

        const response = await fetch(`http://api.weatherapi.com/v1/timezone.json?key=07c39328eb134ed3add233858230602&q=${search}`);
        
        

        const data = await response.json();

        setLocation(data.location)

    }
    useEffect ( () => {
        TimeAPI();

    });

    console.log("location",location)

    if(location){{
        return(
            <>
                <p>time : {location.localtime} </p>
            </>
        )

    }}
    
   

}