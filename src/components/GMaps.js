/* eslint-disable no-undef */

import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";

import TransitLayer from './TransitLayer'
import config from '../config';

const GMaps = (props) => {
    let heatMapData = [];

    if (props.catchmentData) {
        heatMapData = props.catchmentData.map(datum => {
            return {
                postcode: datum.postcode,
                location: new google.maps.LatLng(datum.latitude, datum.longitude),
                weight: datum.users
            }
        }).toArray();
    } else if (props.odData) {
        heatMapData = props.odData.map(datum => {
            return {
                location: new google.maps.LatLng(datum.latitude, datum.longitude),
                weight: datum.weight
            }
        }).toArray();
    }


    return (
        <GoogleMap
            defaultZoom={10}
            center={props.origin ? new google.maps.LatLng(props.origin.latitude, props.origin.longitude) : { lat: 51.509865, lng: -0.118092 }}
            layerTypes={['TransitLayer']}
            options={{
                styles: [
                    {
                        featureType: "road",
                        elementType: "all",
                        stylers: [
                            { saturation: -100 } // <-- THIS
                        ]
                    },{
                        featureType: "transit",
                        elementType: "all",
                        stylers: [
                            { saturation: -50 }
                        ]
                    },{
                        featureType: "landscape",
                        elementType: "all",
                        stylers: [
                            { saturation: -100 }
                        ]
                    },{
                        featureType: "poi",
                        elementType: "all",
                        stylers: [
                            { saturation: -100 }
                        ]
                    },{
                        featureType: "water",
                        elementType: "all",
                        stylers: [
                            { saturation: -80 }
                        ]
                    }
                ],
            }}
        >
            {props.origin && <Marker position={new google.maps.LatLng(props.origin.latitude, props.origin.longitude)} />}
            <HeatmapLayer data={heatMapData} />
            <TransitLayer />
        </GoogleMap>
    );
};

export default compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${config.gMapsKey}&v=3.exp&libraries=geometry,drawing,places,visualization`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(GMaps);
