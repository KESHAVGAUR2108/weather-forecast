import React, { createRef } from 'react';

const google = window.google;

class GoogleMap extends React.Component{

    constructor(props){
        super(props);

        this.callRef = createRef();
    }

    componentDidMount = () => {
        const coord = { lat:this.props.lat, lng: this.props.lon };

        const map = new google.maps.Map(this.callRef.current, {
          zoom: 12,
          center: coord,
        });

        const marker = new google.maps.Marker({
            position: coord,
            map: map,
        });
    }

    render(){
        return <div style={{width:'270px',height:'200px'}} ref={this.callRef} />
    }
}

export default GoogleMap;