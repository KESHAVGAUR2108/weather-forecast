import { weatherForecastReducer } from "./forecastReducer";
import { combineReducers } from "redux";

export default combineReducers({
    weather : weatherForecastReducer
})
