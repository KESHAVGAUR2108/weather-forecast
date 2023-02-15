import './SearchBar.css';
import React from "react";
import { searchWeatherForecast } from "../actions";
import { connect } from "react-redux";

class SearchBar extends React.Component{
    
    state = {term:''}

    onValueChange(event){
        this.setState({term:event.target.value})
    }

    onSearchHandle = () => {
        this.props.searchWeatherForecast(this.state.term);
    }

    render(){
        return (
            <form onSubmit={(e)=>e.preventDefault()} className="ui search segment">
                    <div className="ui icon input">
                        <input className="prompt" value={this.state.term} onChange={(e)=>this.onValueChange(e)} type="text" placeholder="Get a five day forecast of any city..." />
                        <button onClick={this.onSearchHandle} className="ui button primary">
                            <i className="search icon"></i>
                        </button>
                    </div>
            </form>
        );
    }
}

export default connect(null,{searchWeatherForecast})(SearchBar);