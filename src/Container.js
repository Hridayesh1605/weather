import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'

const Container = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5f7f84e39160353410bdbd69b1086055`
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
        }
        // async function fetchApi() {
        //     const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5f7f84e39160353410bdbd69b1086055`)
        //     console.log(res);
        //     // setTemp(res.data.main.temp);
        //     setCity(res.main)
        // }
        fetchApi();
    }, [search])
    return (
        <>
            <div className='box'>
                <div className='inputData'>
                    <input type='search' className='inputFeild' onChange={(e) => {
                        setSearch(e.target.value)
                    }} />
                </div>
                {!city ? (
                    <p> No Data Found</p>
                ) : (
                    <div className='info'>
                        <h2 className='location'> {search} </h2>
                        <h1 className='temp'>{city.temp}</h1>
                        <h3>Min 5.25 cel  || max 5.25 cel</h3>
                    </div>
                )
                }
            </div>
        </>
    )
}

export default Container
