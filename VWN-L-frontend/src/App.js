import React, { Component } from 'react';
// import './App.css';
import Header from './Components/Header'
import Form from './Components/Form'
import Footer from './Components/Footer'


var styles = {
  width: '800px',
  margin: '400px'
};


class App extends Component {



  render() {
    return (
      <React.Fragment>
        <div className="App" style={styles}>
          <Header />
          <Form />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
