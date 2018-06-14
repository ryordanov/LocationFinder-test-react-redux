import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getGeocoderAction } from './actions';

import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';

class Map extends Component {
    constructor(props) {
        super();
        this.state = {
            input: props.city || '',
            lat: 0,
            lng: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        this.props.getGeocoderAction({ addr: this.state.input });
        // .then(res => {
        //     console.log(res);
        // });
    }
    handleChange(e) {
        this.setState({
            input: e.target.value
        });
    }

    componentDidMount() {
        const { city } = this.props;
        this.props.getGeocoderAction({ addr: city });
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const location = (nextProps.data && nextProps.data.geometry &&
            nextProps.data.geometry.location) || { lat: 0, lng: 0 };

        this.setState({
            lat: location.lat,
            lng: location.lng
        });
    }

    render() {
        return (
            <div className='container'>
                <div>
                    <h1>Your Google Maps Locations</h1>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='input-group'>
                                <input
                                    className='form-control border-secondary py-2'
                                    type='search'
                                    placeholder='Type a location...'
                                    onChange={this.handleChange}
                                    value={this.state.input}
                                    onKeyPress={event => {
                                        if (event.key === 'Enter') {
                                            this.handleClick();
                                        }
                                    }}
                                />
                                <div className='input-group-append'>
                                    <button className='btn btn-outline-secondary' type='button' onClick={this.handleClick}>
                                        <i className='fa fa-search'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div id='map_div'>
                                {this.props.apiKey &&
                                <Gmaps
                                    // width={'800px'}
                                    height={'270px'}
                                    lat={this.state.lat}
                                    lng={this.state.lng}
                                    zoom={10}
                                    params={{ v: '3.exp', key: this.props.apiKey }}
                                    loadingMessage={'Be happy'}>
                                </Gmaps> }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <div id='current_location'>
                            {this.props.data && this.props.data.formatted_address}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


Map.propTypes = {
    getGeocoderAction: PropTypes.func,
    data: PropTypes.object,
    city: PropTypes.string,
    apiKey: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.mapReducer.data,
        city: state.mapReducer.city,
        apiKey: state.mapReducer.apiKey
    };
};

const mapDispatchToProps = {
    getGeocoderAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
