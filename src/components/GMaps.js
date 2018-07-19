/* eslint-disable no-undef */

import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";

import TransitLayer from './TransitLayer'
import config from '../config';

const GMaps = (props) => {

    console.log(props.origin);

    const heatMapData = props.data.map(datum => {
        return {
            postcode: datum.postcode,
            location: new google.maps.LatLng(datum.latitude, datum.longitude),
            weight: datum.users
        }
    }).toArray();

    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 51.509865, lng: -0.118092 }}
            layerTypes={['TransitLayer']}
            options={{
                styles: [
                    {
                        featureType: "all",
                        elementType: "all",
                        stylers: [
                            { saturation: -100 } // <-- THIS
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
