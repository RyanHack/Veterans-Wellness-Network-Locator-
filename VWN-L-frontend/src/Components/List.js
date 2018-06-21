import React from 'react'

class List extends React.Component {


    delete = (id) => {

        // event.preventDefault()
        fetch(`https://obscure-chamber-71650.herokuapp.com/practitioners/${id}`, {
            method: 'DELETE'

        })
            .then(response => this.props.getData())
    }

    post = (event) => {
        event.preventDefault()
        var data = {
            name: this.refs.name.value,
            modality: this.refs.modality.value,
            address: this.refs.address.value,
            phone: this.refs.phone.value,
            company: this.refs.company.value
        }
        return fetch('https://obscure-chamber-71650.herokuapp.com/practitioners', {
            method: "POST",
            body: JSON.stringify(data),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
            .then(response => {
                this.props.getData()
                this.refs.name.value = ''
                this.refs.modality.value = ''
                this.refs.address.value = ''
                this.refs.phone.value = ''
                this.refs.company.value = ''
            })
    }


    update = (name, id) => {

        console.log(this.refs[id + 'rename'].value)
        console.log(id)
        console.log(this.refs)
        var data = { name: this.refs[id + 'rename'].value }
        console.log('data', data)
        fetch(`https://obscure-chamber-71650.herokuapp.com/practitioners/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        })
            .then(response => {
                this.props.getData()

            })
    }




    render() {
        console.log('ww', this.props.therapists)
        const popuList = this.props.therapists.map((therapist) => {
            if (this.props.modality === therapist.modality) {

                return <li key={therapist.id} id={therapist.id} ref={therapist.id}>
                    <h4>{therapist.name}</h4>
                    <p>{therapist.company}</p>
                    <p>{therapist.address}</p>
                    <p>{therapist.phone}</p>
                    <button role="button" name="submit" value="Submit" onClick={() => this.delete(therapist.id)}>Delete</button>
                    <br />
                    <button role="button" name="submit" value="Submit" onClick={() => this.update(therapist.name, therapist.id)}>Rename Your Therapist</button>
                    <input type="text" ref={therapist.id + 'rename'} />
                    <br />
                </li>
            } else if (this.props.modality === 4) {
                return <li key={therapist.id} id={therapist.id}>
                    <h4>{therapist.name}</h4>
                    <p>{therapist.company}</p>
                    <p>{therapist.address}</p>
                    <p>{therapist.phone}</p>
                    <button role="button" name="submit" value="Submit" onClick={() => this.delete(therapist.id)}>Delete</button>
                    <br />
                    <button role="button" name="submit" value="Submit" onClick={() => this.update(therapist.name, therapist.id)}>Rename Your Therapist</button>
                    <input type="text" ref={therapist.id + 'rename'} />
                    <br />
                </li>
            }
        })
        return (
            <React.Fragment>
                <section id='Therapists'>
                    <h2>Therapists: </h2>
                    <br />
                    <ul> {popuList}
                    </ul>
                </section>
                <form id='addTherapist'>
                    <h2>Add a new Therapist</h2>
                    <br />
                    <label htmlFor='name'>Name </label>
                    <input ref='name' name='name'></input>
                    <br />
                    <label htmlFor='company'>Company name </label>
                    <input ref='company' name='company'></input>
                    <br />
                    <label htmlFor='address'>Address </label>
                    <input ref='address' name='address'></input>
                    <br />
                    <label htmlFor='phone'>Phone </label>
                    <input ref='phone' name='phone'></input>
                    <br />
                    <select ref='modality'>
                        <option value='1'>Massage Therapist</option>
                        <option value='2'>Hypnotherapist</option>
                        <option value='3'>Energy Worker</option>
                    </select>
                    <button role="button" name="submit" value="Submit" onClick={event => this.post(event)}>Add</button>
                </form>
            </React.Fragment>

        )
    }
}
export default List