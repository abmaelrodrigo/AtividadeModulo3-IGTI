import React, { Component } from 'react';
import InputFullSalary from './components/Inputs/InputFullSalary';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 0,
    };
  }

  render() {
    return (
      <div>
        <h1
          style={{
            margin: '50px',
            textAlign: 'center',
          }}
        >
          React Salário
        </h1>
        <InputFullSalary />
      </div>
    );
  }
}
