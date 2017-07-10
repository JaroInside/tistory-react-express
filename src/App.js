import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      project: ''
    }
  }

  onClick() {
    axios.get(`/api`)
    .then( response => {
      console.log(response);
      this.setState({
        name: response.data.name,
        project: response.data.project
      });
    }) // SUCCESS
    .catch( response => { console.log(response); } );
  }

  render() {
    
    const { name , project } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hello {name} / {project}
        </p>
        <button onClick={this.onClick.bind(this)}>api 호출</button>
      </div>
    );
  }
}

export default App;
