import React, { Component } from 'react';
import './style.css';

class NotFound extends Component {
  constructor() {
    super();

    this.state = {
      math: [3, 5, 9, 15]
    };
  }
  componentDidMount() {



  }
  render() {
    return (
      <div>
        <h1>hello "Jenosize"</h1>
        <h3>X, Y, Z ของ 3, 5, 9, 15, X, Y, Z</h3>
      </div>
    )
  }

}

export default NotFound;