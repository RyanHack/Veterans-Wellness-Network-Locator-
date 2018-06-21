import React from 'react'



class MarkerBox extends React.Component {

    render() {
        var practitioner = this.props.therapists
        console.log('MarkerBox', this.props.therapists)
        return (
            <div key={practitioner.name}>
                <h4>{practitioner.name}</h4>
                <p>{practitioner.company}</p>
                <p>{practitioner.address}</p>
                <p>{practitioner.phone}</p>
            </div>
        )
    }

}
export default MarkerBox