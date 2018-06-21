import React, { Component } from 'react';
// import './App.css';
import Header from './Components/Header'
import Form from './Components/Form'
import Footer from './Components/Footer'

import 'bulma/css/bulma.css'  //must be in this format because create-react-app doesn't play well with sass files



class App extends Component {


  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
