import axios from "axios";

const API = 'e3ac47cfcf5afcb32a5f310612580c84';

export const searchWeatherForecast = (city) => async (dispatch,getState) => {
    
    var cityPresent = getState().weather.find(weather => weather.city.name.toLowerCase() === city.toLowerCase()) 

    if(cityPresent){
        var errorMsg = 'Error : '+city+' is already in the list !!';
        alert(errorMsg);
        return null;
    }

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`,{
            params:{
                q : city,
                appid : API
            }
        });
         
    dispatch({type:'WEATHER_FORECAST',payload:response.data});
}