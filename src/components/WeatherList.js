import React from 'react';
import Graph from './Graph';
import { connect } from 'react-redux';
import GoogleMap from './GoogleMap'

class WeatherList extends React.Component{
    
    renderList(){
        return this.props.weather.map(weather => {
            const temps = weather.list.map(weather => weather.main.temp)
            const pressure = weather.list.map(weather => weather.main.pressure)
            const humidity = weather.list.map(weather => weather.main.humidity)
            const {lat,lon} = weather.city.coord;
            return (
                <tr key={weather.city.id}>
                    <td style={{width:'270px',height:'200px'}} data-label='City'>
                        <GoogleMap lat={lat} lon={lon} />
                    </td>
                    <td data-label='Temperature'>
                        <Graph data={temps} unit='K' color='green'  />
                    </td>
                    <td data-label='Pressure'>
                        <Graph data={pressure} unit='hPa' color='brown'  />
                    </td>
                    <td data-label='Humidity'>
                        <Graph data={humidity} unit='%' color='blue' />
                    </td>
                </tr>
            );
        } )
    }

    render(){
        if(this.props.weather.length === 0){
            return <div className='header'>Search weather forecast of any city !!!</div>;
        }
        return (
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderList()}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps =({ weather })=> {
    return {weather}
}

export default connect(mapStateToProps)(WeatherList);