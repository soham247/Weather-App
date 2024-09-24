export const fetchWeather = async (city) => {
    const URL = import.meta.env.VITE_APP_URL
    const ApiKey = import.meta.env.VITE_API_KEY
    const response = await fetch(URL + city + `&appid=${ApiKey}`);
    
    if(response.status == 404) {
        console.log("404 error");
        
    }
    else {
        const data = await response.json();
        return data
    }
}