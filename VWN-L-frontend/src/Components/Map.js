import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import { compose, withStateHandlers } from 'recompose'
import MarkerBox from './MarkerContent'



const MapWithAMakredInfoWindow = compose(
    withStateHandlers(() => ({
        isOpen: false,
    }), {
            onToggleOpen: ({ isOpen }) => () => ({
                isOpen: !isOpen,
            })
        }),
    withScriptjs,
    withGoogleMap
)(props => {
    console.log(props.modality)
    const popuMap = props.therapists.map((therapist) => {
        if (props.modality === therapist.modality) {
            return (
                <React.Fragment key={therapist.id}>

                    {props.isMarkerShown && <Marker

                        position={{ lat: parseFloat(therapist.lat), lng: parseFloat(therapist.lng) }}
                        onClick={props.onToggleOpen}
                    >
                        {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
                            <MarkerBox therapists={therapist} />
                        </InfoWindow>}
                    </Marker>
                    }
                </React.Fragment>

            )

        } else if (props.modality === 0 /*or 4??*/) {

        }
    }
    )
    return (
        <GoogleMap
            defaultZoom={11}
            defaultCenter={{ lat: 39.755926, lng: -105.002631 }}
        >
            {popuMap}

        </GoogleMap>
    )
});





export default MapWithAMakredInfoWindow

