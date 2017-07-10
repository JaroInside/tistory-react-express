import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      project: ''
    }
    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    axios.get(`/api`)
    .then( response => {
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
        <h1>{project}</h1>
        <h1>Hello {name}</h1>
        <button onClick={this._onClick}>api 호출</button>
      </div>
    );
  }
}

export default App;
