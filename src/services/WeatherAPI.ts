import { API_KEY, BASE_URL } from "./APIConstants";

async function getCurrentWeatherAPI({location="Thailand" , day="1"} : {location?:string ,day?: string}={}) : Promise<Response | null> {
    const url = `${BASE_URL}forecast.json?key=${API_KEY}&q=${location}&days=${day}&aqi=no&alerts=no`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function getLocationWhenSearchingAPI({location} : {location:string}): Promise<Response | null> {
    
    const url = `${BASE_URL}search.json?key=${API_KEY}&q=${location}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
    
  }

export { getCurrentWeatherAPI, getLocationWhenSearchingAPI };
  