import React, { useState } from 'react'
import WeatherDetailsCard from './weatherDetails/WeatherDetailsCard'
import { fetchWeather } from '../services/api'

function SearchBar() {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = await fetchWeather(city)
            setWeather(data)
            setCity("")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='max-w-sm w-full bg-slate-400 rounded-xl p-4 bg-gradient-to-tl from-[#00ffc8] to-[#d400ff] flex flex-col items-center'>
            <h1 className='text-3xl font-bold text-white mb-4'>Weather Wiz</h1>
            <form onSubmit={handleSubmit}
            className='flex justify-center w-full mb-4'
            >
                <input type="text" placeholder="Enter city name"
                value={city} onChange={(e) => setCity(e.target.value)}
                className='px-4 py-2 rounded-lg w-[80%] focus:outline-1 outline-cyan-500 '
                 />
                <button type="submit"
                className='bg-white text-2xl rounded-full w-[2.5rem] h-[2.5rem] ml-2 pl-1'
                >🔍</button>
            </form>
            {weather && <WeatherDetailsCard weather={weather} />}
        </div>

    )
}

export default SearchBar
