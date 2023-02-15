import React from "react";
import SearchBar from './SearchBar';
import WeatherList from './WeatherList';

const App = () => {
    return (
        <div className="ui container">
            <SearchBar />
            <WeatherList />
        </div>
    );
};

export default App;