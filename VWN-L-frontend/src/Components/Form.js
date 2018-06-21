import React from 'react'
import List from './List'
import Map from './Map'



class Form extends React.Component {
    state = {
        therapists: [],
        modality: 0
    }


    getData = () => {
        return fetch('https://obscure-chamber-71650.herokuapp.com/practitioners')
            .then(response => response.json())
            .then(therapists => {
                this.setState({
                    therapists: therapists.practitioners
                })
            })
    }




    componentDidMount = () => {
        this.getData()
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let treatment = this.refs.select
        let treatmentId = treatment.value
        // console.log("logged:", typeof treatmentId, treatmentId)
        //SWITCH STATEMENT///
        switch (treatmentId) {
            case '1':
                this.setState({
                    modality: 1
                })
                break;
            case '2':
                this.setState({
                    modality: 2
                })
                break;
            case '3':
                this.setState({
                    modality: 3
                })
                break;
            case '4':
                this.setState({
                    modality: 4
                })

                break;
            default: this.setState({
                modality: 0
            })
                break;
        }
        // console.log('modality, form.js ', this.state.modality)
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <label htmlFor='treatment'>What are you searching for  </label>
                    <select name='treatment' ref='select'>
                        <option value='0'> </option>
                        <option value='1'>Massage Therapy</option>
                        <option value='2'>Hypnotherapy</option>
                        <option value='3'>Energy Work</option>
                        <option value='4'>All</option>
                    </select>
                    <br />
                    <input type="submit" name="submit" value="Submit" onClick={this.handleSubmit} />
                </form>
                <List therapists={this.state.therapists} modality={this.state.modality} getData={this.getData} />

                <Map
                    modality={this.state.modality}
                    therapists={this.state.therapists}
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCgwyGWwuQubP4staJS9Ym1z1AmIjd0upM&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={< div style={{ height: `50%` }} />}
                    containerElement={< div style={{ height: `400px` }} />}
                    mapElement={< div style={{ height: `80%`, width: '60%' }} />}
                />
            </React.Fragment>
        )
    }


}

export default Form