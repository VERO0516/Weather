import { useEffect } from "react";
import { useState,useParams } from "react";

import Cart from "./TimeCart";

export default function Time(){

    const [data, setData] = useState([]);
    const [location, setLocation] = useState([]);
    const [search, setSearch] = useState([]);
    
    const url = window.location.href;
    const num= url.split('=')
    

    return(
        <>
            <h1>React  Weather App</h1>
            <h1>Time</h1>
            <p>Enter Location</p>

                <form action="/time">

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