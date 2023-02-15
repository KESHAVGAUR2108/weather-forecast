export const weatherForecastReducer = (state=[],action) => {
    switch(action.type){
        case 'WEATHER_FORECAST':
            return [action.payload,...state];
        default:
            return state;
    }
}