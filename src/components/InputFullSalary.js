import React, { Component } from 'react';
import InputReadOnly from './InputReadOnly';
import { calculateSalaryFrom } from './salary';

export default class InputFullSalary extends Component {
  constructor() {
    super();

    this.state = {
      bar1: '',
      baseINSS: 0,
      baseIRPF: 0,
      discountINSS: 0,
      dicountIRPF: 0,
      netSalary: 0,
    };
  }

  handleChangeBar1 = (event) => {
    //console.log(event.target.value);
    const bar1 = event.target.value;
    //const bar2 = 100 - bar1;
    //console.log(oi());
    console.log(calculateSalaryFrom(bar1));
    const baseINSS = calculateSalaryFrom(bar1).baseINSS;
    const baseIRPF = calculateSalaryFrom(bar1).baseIRPF;
    const discountINSS = calculateSalaryFrom(bar1).discountINSS;
    const discountIRPF = calculateSalaryFrom(bar1).discountIRPF;
    const netSalary = calculateSalaryFrom(bar1).netSalary;

    this.setState({
      bar1,
      baseINSS,
      baseIRPF,
      discountINSS,
      discountIRPF,
      netSalary,
    });
  };

  render() {
    const {
      bar1,
      baseINSS,
      baseIRPF,
      discountINSS,
      discountIRPF,
      netSalary,
    } = this.state;
    return (
      <div>
        <div className="App">
          <h5>Salário bruto</h5>
          <input
            type="number"
            placeholder="Barra 1"
            onChange={this.handleChangeBar1}
            value={bar1}
          />
        </div>
        <div>
          <InputReadOnly
            valueBaseINSS={baseINSS}
            valueDiscountINSS={discountINSS}
            valueBaseIRPF={baseIRPF}
            valueDiscountIRPF={discountIRPF}
            valueNetSalary={netSalary}
          />
        </div>
      </div>
    );
  }
}
