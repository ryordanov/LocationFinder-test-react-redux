import React, { Component } from 'react';

class MapContainer extends Component {

    render() {
        debugger
        // var map = new GMaps({
        //     el: '#map',
        //     lat: this.props.lat,
        //     lng: this.props.lng
        // });

        var map = new google.maps.Map(document.getElementById('map'), {
            center: { lat:this.props.lat, lng: this.props.lng },
            zoom: 10
        });

        // Adding a marker to the location we are showing
        map.addMarker({
            lat: this.props.lat,
            lng: this.props.lng
        });

        return (<div className="map-holder" >
            <p>Loading...</p>
            <div id="map"></div>
        </div>
        );
    }
}

export default MapContainer;